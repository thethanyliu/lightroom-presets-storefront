import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import classes from "./Loading.module.css";

const LoadingPage = () => {
  return (
    <div className={classes.loading}>
      <MoonLoader color={"#4BE9CE"} />
    </div>
  );
};

export default LoadingPage;
