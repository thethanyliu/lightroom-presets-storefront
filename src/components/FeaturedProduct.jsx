import React from "react";
import { urlFor } from "../lib/client";
import Product from "./Product";

const FeaturedProduct = ({ product }) => {
  return (
    <div>
      <h1 className="feature">Featured Product</h1>
      <Product product={product} />
    </div>
  );
};

export default FeaturedProduct;
