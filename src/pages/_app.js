import "@/styles/globals.css";
import React from "react";
import { Layout } from "@/components";

export default function App({ Component, pageProps }) {
  // the "Component" component refers to the current page
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
