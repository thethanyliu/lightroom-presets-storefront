import React from "react";
import FeaturedProduct from "./FeaturedProduct";
import classes from "./FeaturedProducts.module.css"

const FeaturedProducts = ({ products }) => {
  return (
    <div className={classes.featuredProductsContainer}>
      <div className={classes.featuredProductsText}>
        Featured Bundles
      </div>
      <FeaturedProduct
        featuredProducts={products.filter((product) => product.feature)}
      />
    </div>
  );
};

export default FeaturedProducts;
