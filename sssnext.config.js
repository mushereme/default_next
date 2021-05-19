const withLess = require("@zeit/next-less");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const lessToJS = require("less-vars-to-js");
const withPlugins = require("next-compose-plugins");

const fs = require("fs");
const path = require("path");

const dotenv = require("dotenv");

dotenv.config();

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, "./public/antd-less/variables.less"),
    "utf8"
  )
);

const plugins = [
  [withCSS],
  [
    withLess({
      lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables, // make your antd custom effective
      },
      webpack: (config, { isServer }) => {
        if (isServer) {
          const antStyles = /antd\/.*?\/style.*?/;
          const origExternals = [...config.externals];
          config.externals = [
            (context, request, callback) => {
              if (request.match(antStyles)) return callback();
              if (typeof origExternals[0] === "function") {
                origExternals[0](context, request, callback);
              } else {
                callback();
              }
            },
            ...(typeof origExternals[0] === "function" ? [] : origExternals),
          ];

          config.module.rules.unshift({
            test: antStyles,
            use: "null-loader",
          });
        }

        const builtInLoader = config.module.rules.find((rule) => {
          if (rule.oneOf) {
            return (
              rule.oneOf.find((deepRule) => {
                return (
                  deepRule.test && deepRule.test.toString().includes("/a^/")
                );
              }) !== undefined
            );
          }
          return false;
        });

        if (typeof builtInLoader !== "undefined") {
          config.module.rules.push({
            oneOf: [
              ...builtInLoader.oneOf.filter((rule) => {
                return (
                  (rule.test && rule.test.toString().includes("/a^/")) !== true
                );
              }),
            ],
          });
        }

        config.resolve.alias["@"] = path.resolve(__dirname);

        config.node = {
          fs: "empty",
          child_process: "empty",
          net: "empty",
          dns: "empty",
          tls: "empty",
        };
        return config;
      },
    }),
  ],
  [
    withSass,
    {
      cssModules: true,
      cssLoaderOptions: {
        localIdentName: "[path]___[local]___[hash:base64:5]",
      },
    },
  ],
];

const nextConfig = {
  env: {},
  images: {
    domains: ["res.cloudinary.com"],
    loader: "cloudinary",
  },
};

// module.exports = withPlugins(plugins, nextConfig);
module.exports = withPlugins(plugins, nextConfig);

// module.exports = {
//   webpack: (config) => {
//     config.node = {
//       fs: "empty",
//       child_process: "empty",
//       net: "empty",
//       dns: "empty",
//       tls: "empty",
//     };
//     return config;
//   },
//   images: {
//     domains: ["res.cloudinary.com"],

//     loader: "cloudinary",
//   },
// };
