import { urlencoded } from "express";
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://kinsta.com/blog/best-google-fonts/#3-lato"
            rel="stylesheet"
          />
        </Head>
        <body
          className="bg"
          style={{
            alignItems: "center",
            margin: "0%",
            fontFamily: "Roboto",
            maxWidth: "1440px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
