import React from "react";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>PnutPresets</title>
      </Head>
      <>
        <main className="main-container">{children}</main>
      </>
    </>
  );
};

export default Layout;
