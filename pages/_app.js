import "antd/dist/antd.css";
// import "public/antd/vars.css";
// import "public/antd-less/variables.less";
import "styles/moto.scss";

import "tailwindcss/tailwind.css";
import "public/fonts/inter/styles.css";
import { useState, useEffect } from "react";
import useSWR, { SWRConfig } from "swr";
import { ThemeProvider } from "context/theme-context";
import { GoogleProvider } from "context/google-context";
import Router from "next/router";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

Nprogress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: true,
});

Router.onRouteChangeStart = (url) => {
  // console.log(url);
  Nprogress.start();
};

Router.onRouteChangeComplete = (url) => {
  Nprogress.done();
};

Router.onRouteChangeError = (url) => {
  Nprogress.done();
};

const fetcher = async (url) => {
  const res = await fetch(url);
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function MotoApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
          <div>
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900 block"></div>
            <div className="block mt-8">Ачаалж байна, одоохон...</div>
          </div>
        </div>
      ) : (
        <SWRConfig
          value={{
            // refreshInterval: 60000,
            fetcher: fetcher,
            onError: (error, key) => {
              if (error.status !== 403 && error.status !== 404) {
                console.error("Алдаа гарлаа", error);
              }
            },
          }}
        >
          <GoogleProvider>
            <Component {...pageProps} />
          </GoogleProvider>
        </SWRConfig>
      )}
    </>
  );
}
