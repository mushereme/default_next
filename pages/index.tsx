import React, { useContext } from 'react';
import Head from "next/head";

import { RedeemHeader } from "../components/Layout/RedeemHeader";
import { BkoTerms } from "../components/Bko/Terms";
import { RedeemForm } from "../components/Bko/RedeemForm";

import RedeemContext from "../context/RedeemContext";

export default function RedeemPage() {

  const context = useContext(RedeemContext);
  const { checkRedeem } = context;
  

  return (
    <div>
      <Head>
        <title>BKO</title>
        {/* <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/3202/3202926.png"
        /> */}
      </Head>
      <RedeemHeader>
        <RedeemForm onFinish={checkRedeem} />
      </RedeemHeader>
      {/* <MiddleMenu /> */}
      <BkoTerms />
    </div>
  );
}