import React from "react";
import '../styles/globals.css'
import 'antd/dist/antd.css'
import { AppProps } from 'next/app'
import { RedeemStore } from "../context/RedeemContext";

import { 
  Layout
} from "antd";

import { BkoMenu } from "../components/Layout/BkoMenu";

const { Header, Content, Footer } = Layout;


function MyApp({ Component, pageProps }: AppProps) {
  return (
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
                <img src='https://res.cloudinary.com/daliec2ib/image/upload/v1657370030/BKO/236309417_128750226130749_2479255844028366833_n_w3o7d8.png' width="50px" height="auto"/>
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

  )
}

export default MyApp
