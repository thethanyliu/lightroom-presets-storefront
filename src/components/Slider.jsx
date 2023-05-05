import React, { useRef } from "react";
import Image from "next/image";


const Slider = ({ beforeImage, afterImage }) => {
  const sliderRef = useRef(null);
  const handleMouseMove = (e) => {
    if (sliderRef.current) {
      const xPos = e.pageX - sliderRef.current.offsetLeft;
      const width = sliderRef.current.clientWidth;
      sliderRef.current.style.setProperty("--slider-offset", xPos / width);
    }
  };

  return (
    <div className="slider-container" onMouseMove={handleMouseMove}>
      <Image src={beforeImage} alt="Before" className="slider-image" />
      <div className="slider-divider" ref={sliderRef} />
      <Image src={afterImage} alt="After" className="slider-image" />
    </div>
  );
};

export default Slider;