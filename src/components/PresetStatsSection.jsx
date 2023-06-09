import React from "react";
import classes from "./PresetStatsSection.module.css";
import { urlFor } from "../lib/client";

const PresetStatsSection = ({ presetNumber, images }) => {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h1>{presetNumber} Custom Presets</h1>
      </div>
      <div className={classes.imageContainer}>
        {images?.map((image, i) => {
          if (i % 2 == 0) {
            return <img className={classes.imageWithPadding} src={urlFor(image)} width={200} height={200} alt="image" />
          } else {
            return <img src={urlFor(image)} width={200} height={200} alt="image" />
          }
        }
         
          
        )}
      </div>
    </div>
  );
};

export default PresetStatsSection;
