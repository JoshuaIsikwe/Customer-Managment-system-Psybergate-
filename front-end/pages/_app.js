'use client'
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Layout from '../components/layout'

const poppins = Poppins({ subsets: ['latin'], weight:['400', '600', '800'] })

export default function App({ Component, pageProps }) {

  return (
    <div className={poppins.className}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </div>
  )
}
