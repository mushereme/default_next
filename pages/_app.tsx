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

const { Header, Content, Footer } = Layout;


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <BannerStore>
      <PartnerStore>
        <RedeemStore>
          <Layout className='font-mono'>
            <Header className='bg-white'>
              <BkoMenu />
            </Header>
            <Content className="bg-slate-50">
              <div className="">
                <Component {...pageProps} />
              </div>
            </Content>
            <Footer>
              <div className='container mx-auto'>
                <div className="flex justify-between">
                  <div> 
                    <BkoSocials />
                    {/* <img src='https://res.cloudinary.com/daliec2ib/image/upload/v1658147950/BKO/assets/273269846_956798281707222_3269984056906119710_n_gccix1.png' width="50px" height="auto"/> */}
                  </div>
                  <div>
                    <div>Phone: (976) 9920-3430</div>
                    <div>Email : info@bkocapital.mn</div>
                  </div>  
                </div>
              </div>
            </Footer>
          </Layout>
        </RedeemStore>
      </PartnerStore>
    </BannerStore>

  )
}

export default MyApp
