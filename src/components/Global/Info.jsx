import React from "react";
import {
  AiOutlineDownload,
  AiOutlineBook,
  AiOutlineDesktop,
  AiOutlineMobile,
} from "react-icons/ai";
import classes from "./Info.module.css"

const Info = () => {
  return (
    <div className={classes.info}>
      <div className={classes.infoDiv}>
        <AiOutlineDownload />
        <span className={classes.infoSpan}>Instant Download</span>
      </div>
      <div className={classes.infoDiv}>
        <AiOutlineBook />
        <span className={classes.infoSpan}>Tutorials Guide</span>
      </div>
      <div className={classes.infoDiv}>
        <AiOutlineDesktop />
        <span className={classes.infoSpan}>Lightroom Desktop</span>
      </div>
      <div className={classes.infoDiv}>
        <AiOutlineMobile />
        <span className={classes.infoSpan}>Lightroom Mobile</span>
      </div>
    </div>
  );
};

export default Info;
