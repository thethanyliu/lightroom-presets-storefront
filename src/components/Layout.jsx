import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoadingPage from "./LoadingPage";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
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
          {" "}
          <header>
            <Navbar />
          </header>
          <main className="main-container">{children}</main>
          <footer>
            <Footer />
          </footer>{" "}
        </>
      )}
    </>
  );
};

export default Layout;
