import React, { useContext, useEffect } from 'react';
import Head from "next/head";

export default function HomePage() {

  
  useEffect(() => {
  }, []);

  // console.log("BANNER: ", bannerContext.state)
  // console.log("PARTNER: ", partnerContext.state)

  return (
    <div>
      <Head>
        <title>BKO</title>
        {/* <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/3202/3202926.png"
        /> */}
      </Head>
      hi
    </div>
  )
}