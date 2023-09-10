import React from "react";
import Image from "next/image";
import classes from "./StatsSection.module.css";

const StatsSection = ({ text, showIncludes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          src="/assets/mobile_desktop.png"
          alt="desktop and mobile image"
          width={500}
          height={350}
        />
      </div>
      <div className={classes.textContainer}>
        <h3 className={showIncludes ? classes.secondTitle : classes.hidden}>
          Includes
        </h3>
        <h1 className={classes.title}>Mobile + Desktop Presets</h1>
        <p className={classes.text}>{text}</p>
      </div>
    </div>
  );
};

export default StatsSection;
