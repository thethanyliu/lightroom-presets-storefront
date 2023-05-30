import React from "react";
import classes from "./StatsSection.module.css";

const StatsSection = () => {
  return (
    <div className={classes.container}>
      <div></div>
      <div>
        <h1 className={classes.title}>
          Upgrading your photo game has never been easier.
        </h1>
        <p className={classes.text}>
          With over 40+ Lightroom mobile (XMP files) and Lightroom desktop
          presets (DNG files) in our Master Collection, each designed to enhance
          your creative workflow, you can be sure that there will be a preset
          to make every photo look spectacular.
        </p>
      </div>
    </div>
  );
};

export default StatsSection;
