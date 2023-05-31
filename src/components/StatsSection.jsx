import React from "react";
import classes from "./StatsSection.module.css";
import Image from "next/image";

const StatsSection = ({ text }) => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          src="/mobile_desktop.png"
          alt="desktop and mobile image"
          width={500}
          height={350}
        ></Image>
      </div>
      <div className={classes.textContainer}>
        <h1 className={classes.title}>
          Mobile + Desktop Presets
        </h1>
        <p className={classes.text}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default StatsSection;
