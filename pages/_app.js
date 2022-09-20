import React from "react";
import Head from "next/head";


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
      
      <Component {...pageProps} />
      
    </>
  );
}
export default MyApp;
