import "@/styles/globals.css";
import "@/styles/slug.css";
import "@/styles/success.css";
import "@/styles/products.css";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Layout } from "@/components";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  // the "Component" component refers to the current page
  return (
    <>
      <NextUIProvider>
        <StateContext>
          <Layout>
            <Toaster />
            <Component {...pageProps} />
          </Layout>
        </StateContext>
      </NextUIProvider>

      <Analytics />
    </>
  );
}
