import React from "react";
import FeaturedProduct from "./FeaturedProduct";
import classes from "./Banner.module.css"

const Banner = ({ products }) => {
  return (
    <div className={classes.bannerImage}>
      <div className={classes.bannerText}>
        Empowering Creativity One Image at a Time
      </div>
      <FeaturedProduct
        featuredProducts={products.filter((product) => product.feature)}
      />
    </div>
  );
};

export default Banner;
