import "@/styles/globals.css";
import "@/styles/success.css";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  // the "Component" component refers to the current page
  // make sure prices are handled in the backend
  return (
    <>
      <NextUIProvider>
        <StateContext>
          <Toaster />
          <Component {...pageProps} />
        </StateContext>
      </NextUIProvider>
      <Analytics />
    </>
  );
}
