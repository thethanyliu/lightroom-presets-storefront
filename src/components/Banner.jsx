import React from "react";
import FeaturedProduct from "./FeaturedProduct";

const Banner = ({ products }) => {
  return (
    <div className="bannerImage">
      <div className="bannerText">
        Empowering Creativity One Image at a Time
      </div>
      <FeaturedProduct
        featuredProducts={products.filter((product) => product.feature)}
      />
    </div>
  );
};

export default Banner;
