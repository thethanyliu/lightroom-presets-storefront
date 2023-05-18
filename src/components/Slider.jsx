import React from "react";
import ReactCompareImage from "react-compare-image";
const Slider = ({beforeImage, afterImage}) => {
  return (
    <div className="slider">
      <ReactCompareImage
        leftImage={beforeImage}
        rightImage={afterImage}
      />
    </div>
  );
};

export default Slider;
