import React from "react";
import ReactCompareImage from "react-compare-image";
import classes from "./Slider.module.css"

const Slider = ({beforeImage, afterImage}) => {
  return (
    <div className={classes.slider}>
      <ReactCompareImage
        leftImage={beforeImage}
        rightImage={afterImage}
      />
    </div>
  );
};

export default Slider;
