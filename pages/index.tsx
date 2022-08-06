import React, { useContext, useEffect } from 'react';
import Head from "next/head";

import RedeemContext from "../context/RedeemContext";
import BannerContext from "../context/BannerContext";
import PartnerContext from '../context/PartnerContext';

import { RedeemHeader } from "../components/Layout/RedeemHeader";
import { BkoTerms } from "../components/Bko/Terms";
// import { RedeemForm } from "../components/Bko/RedeemForm";
import RedeemForm from "../components/Bko/RedeemFormNew";
import BkoGrid from "../components/Layout/BkoGrid";

export default function RedeemPage() {

  const context = useContext(RedeemContext);
  const bannerContext = useContext(BannerContext);
  const partnerContext = useContext(PartnerContext);

  const { checkRedeem } = context;
  
  useEffect(() => {
    bannerContext.getBanners();
    partnerContext.getPartners();
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
      <RedeemHeader data={bannerContext.state.list}>
        {/* <RedeemForm onFinish={checkRedeem} /> */}
        <RedeemForm onFinish={checkRedeem} />
      </RedeemHeader>
      <BkoGrid data={partnerContext.state.list}/> 
      <BkoTerms />
    </div>
  )
}