import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <main className="main-container">{children}</main>
    </>
  );
};

export default Layout;
