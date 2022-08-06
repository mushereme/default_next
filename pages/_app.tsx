import React from "react";
import '../styles/globals.css'
import 'antd/dist/antd.css'
import { AppProps } from 'next/app'
import { BannerStore } from "../context/BannerContext";
import { RedeemStore } from "../context/RedeemContext";
import { PartnerStore } from "../context/PartnerContext";

import { 
  Layout
} from "antd";

import { BkoMenu } from "../components/Layout/BkoMenu";
import BkoSocials from "../components/Layout/BkoSocials";
import BkoContact from "../components/Layout/BkoContact";
import Head from "next/head";

const { Header, Content, Footer } = Layout;


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <BannerStore>
        <PartnerStore>
          <RedeemStore>
            <Layout>
              {/* <Header className='bg-white'>
                <BkoMenu />
              </Header> */}
              <Content className="bg-slate-50">
                <div 
                  className=""
                  style={{
                    
                    backgroundColor: "#FAFAFC",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundImage: "url(https://res.cloudinary.com/daliec2ib/image/upload/v1659533862/BKO/assets/Blend_Group_2_zaauz1.png)"
                  }}
                >
                  <Component {...pageProps} />
                </div>
              </Content>
              <Footer>
                <div className='container mx-auto'>
                  <div className="grid grid-cols-2">
                    <div className="md:col-span-1 col-span-2 md:mr-auto mx-auto md:order-1 order-2"> 
                      <BkoSocials />
                      {/* <img src='https://res.cloudinary.com/daliec2ib/image/upload/v1658147950/BKO/assets/273269846_956798281707222_3269984056906119710_n_gccix1.png' width="50px" height="auto"/> */}
                    </div>
                    <div className="md:col-span-1 col-span-2 md:ml-auto mx-auto md:order-2 order-1">
                      <BkoContact />
                    </div>  
                  </div>
                </div>
              </Footer>
            </Layout>
          </RedeemStore>
        </PartnerStore>
      </BannerStore>
    </>
  )
}

export default MyApp
