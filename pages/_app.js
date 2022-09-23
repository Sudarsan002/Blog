import React from "react";
import Head from "next/head";
import { Header } from "../src/Components/Header";
import Footer from "../src/Components/Footer";
import '../styles.css'



function MyApp({ Component, pageProps }) {
  return (
    <>
      
      <Head>
      <title>Blog</title>
        <meta
          name="viewport"
          content="initial-scale=1,width=device-width,viewport-fit=cover,maximum-scale=1.0,user-scalable=no"
        />
      </Head>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
      
    </>
  );
}
export default MyApp;
