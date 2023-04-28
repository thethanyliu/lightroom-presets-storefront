import React from "react";
import Product from "./Product";

const FeaturedProduct = ({ featuredProducts }) => {
  console.log(featuredProducts)
  return (
    <div className="feature">
      <h1 className="feature-text">Featured Products</h1>
      <div className="feature-products">
        {featuredProducts.map((product) => {
          return <Product product={product} />
        })}
      </div>

      {/* <div className="curve"></div> */}
    </div>
  );
};

export default FeaturedProduct;
