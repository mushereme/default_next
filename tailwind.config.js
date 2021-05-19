// import colors from "tailwindcss/colors";
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  // purge: false,
  darkMode: "class", // or 'media' or 'class'
  // important: true,
  theme: {
    colors: {
      moto: {
        lightest: "#8edeb8",
        light: "#69d3a0",
        DEFAULT: "#44C889",
        dark: "#36a06d",
        darkest: "#287852",
      },
      primary: "#44C889",
      secondary: "#8ca59a",
      success: "#349798",
      warning: "#ce9457",
      danger: "#b83e79",

      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    extend: {},

    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
