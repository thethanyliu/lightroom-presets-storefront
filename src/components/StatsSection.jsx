import React from "react";
import classes from "./StatsSection.module.css";
import Image from "next/image";

const StatsSection = () => {
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
          Upgrading your photo game has never been easier. With over 40+ Lightroom mobile (XMP files) and Lightroom desktop
          presets (DNG files) in our Master Collection, each designed to enhance
          your creative workflow, you can be sure that there will be a preset to
          make every photo look spectacular.
        </p>
      </div>
    </div>
  );
};

export default StatsSection;
