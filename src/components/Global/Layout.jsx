import React, { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "./Footer";
import LoadingPage from "./Loading";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <Head>
        <title>PnutPresets</title>
      </Head>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <main className="main-container">{children}</main>
          <footer>
            <Footer />
          </footer>
        </>
      )}
    </>
  );
};

export default Layout;
