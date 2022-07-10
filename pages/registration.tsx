import React, { useContext, useEffect } from 'react';
import Head from "next/head";

import { RegistrationHeader } from "../components/Layout/RegistrationHeader";
import { BkoTerms } from "../components/Bko/Terms";
import { RegistrationForm } from "../components/Bko/RegistrationForm";

import RedeemContext from "../context/RedeemContext";
import { useRouter } from "next/router";

export default function RegistrationPage() {

  const router = useRouter()
  const context = useContext(RedeemContext);
  const { state, createRegistration } = context;

  useEffect(() => {
    checkRedeemStatus();
  }, []);

  const checkRedeemStatus = () => {
    console.log("REDEEM: ", state.redeem);
    if(!state.redeem.id) {
      router.push("/");
    }
  };

  return (
    <div>
      <Head>
        <title>Registration</title>
        {/* <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/3202/3202926.png"
        /> */}
      </Head>
      <RegistrationHeader />
      <RegistrationForm state={state.redeem} onFinish={createRegistration}/>
      {/* <MiddleMenu /> */}
      <BkoTerms />
    </div>
  );
}