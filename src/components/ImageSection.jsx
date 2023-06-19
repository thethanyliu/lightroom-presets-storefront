import React from "react";
import classes from "./ImageSection.module.css";
import Link from "next/link";

const ImageSection = () => {
  return (
      <div className={classes.imageSectionContainer}>
        <div className={classes.firstInnerImage}>
          <h2>Lightroom Presets</h2>
          <button type="button" className={classes.shopButton}>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: 600,
              }}
              href="/products"
            >
              Shop Now
            </Link>
          </button>
        </div>
        <div className={classes.secondInnerImage} />
      </div>
  );
};

export default ImageSection;
