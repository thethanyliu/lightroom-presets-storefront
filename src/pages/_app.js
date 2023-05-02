import "@/styles/globals.css";
import React from "react";
import { Layout } from "@/components";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  // the "Component" component refers to the current page
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
