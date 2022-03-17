import '../styles/globals.css'
import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import { OrderStore } from "../context/OrderContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <OrderStore>
      <Component {...pageProps} />
    </OrderStore>

  )
}

export default MyApp
