import React from "react";
import Head from "next/head";
import { CartInfo, Footer, Layout } from "@/components";

const Checkout = () => {
  return (
    <>
      <Head>
        <title>PnutPresets | Checkout</title>
        <meta name="description" content="PnutPresets Checkout" />
        <meta property="og:title" content="PnutPresets | Checkout" />
        <meta property="og:description" content="PnutPresets Checkout" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <CartInfo />
      </Layout>
      <Footer />
    </>
  );
};

export default Checkout;
