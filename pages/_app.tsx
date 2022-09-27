import React from "react";
import '../styles/globals.css'
import 'antd/dist/antd.css'
import { AppProps } from 'next/app'

import { 
  Layout
} from "antd";

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
      <Layout>
        <Content className="bg-slate-50">
          
          <Component {...pageProps} />
        </Content>
      </Layout>
    </>
  )
}

export default MyApp
