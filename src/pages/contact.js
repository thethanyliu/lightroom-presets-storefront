import React from "react";
import Head from "next/head";
import { ContactForm, Navbar, Footer, Layout } from "../components";

const contact = () => {
  return (
    <>
      <Head>
        <title>PnutPresets | Contact</title>
        <meta name="description" content="PnutPresets Contact" />
        <meta property="og:title" content="PnutPresets | Contact" />
        <meta property="og:description" content="PnutPresets Contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Navbar />
        <ContactForm />
      </Layout>
      <Footer />
    </>
  );
};

export default contact;
