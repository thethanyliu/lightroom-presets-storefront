import React from "react";
import Product from "./Product";

const FeaturedProduct = ({ featuredProducts }) => {
  return (
    <div className="feature">
      <h1 className="feature-text">Featured Products</h1>
      <div className="feature-products">
        {featuredProducts.map((product) => {
          return <Product product={product} width={350} height={350} />
        })}
      </div>
    </div>
  );
};

export default FeaturedProduct;
