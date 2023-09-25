import React from "react";
import Product from "../Products/Product";
import styles from "./FeaturedProduct.module.css"

const FeaturedProduct = ({ featuredProducts }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.featureProducts}>
        {featuredProducts.map((product, i) => {
          return <Product key={i} product={product} width={350} height={350} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedProduct;
