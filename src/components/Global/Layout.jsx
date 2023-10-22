import React from "react";
import { useStateContext } from "@/context/StateContext";
import { LoadingPage } from "..";

const Layout = ({ children }) => {
  const { isLoading } = useStateContext();
  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <main className="main-container">{children}</main>
      )}
    </>
  );
};

export default Layout;
