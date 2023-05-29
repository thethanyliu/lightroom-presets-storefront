import React from "react";
import classes from "./ImageSection.module.css";
import { Slider } from ".";
import Link from "next/link";

const ImageSection = () => {
  return (
    <div className={classes.imageSectionContainer}>
      <div className={classes.sliderContainer}>
        <div className={classes.sliderInnerContainer}>
          <Slider beforeImage={"./b.jpg"} afterImage={"./a.jpg"} />
        </div>
        
        <p>Vintage Tones Preset Bundle - Neon Glow</p>
      </div>
      <div className={classes.imageSectionImage}>
        <div className={classes.firstInnerImage}>
          <h2>Lightroom Presets</h2>
          <button type="button" className={classes.shopButton}>
            <Link
              style={{ textDecoration: "none", color: "black", fontWeight: 600 }}
              href="/products"
            >
              Shop Now
            </Link>
          </button>
        </div>
        <div>another image</div>
      </div>
    </div>
  );
};

export default ImageSection;
