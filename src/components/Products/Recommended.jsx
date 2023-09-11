import React from "react";
import { Product } from "..";
import styles from "./Recommended.module.css";

const Recommended = ({ products, relatedProducts }) => {
  return (
    <div className={styles.recommendedProductsContainer}>
      <h2 className={`${styles.recProducts} text-4xl font-bold`}>Recommended</h2>
      <div className={styles.recommendedProducts}>
        {products.map((product, i) => {
          if (relatedProducts.includes(product.name)) {
            return (
              <Product key={i} product={product} width={300} height={300} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Recommended;
