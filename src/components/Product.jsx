import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Product = ({ product }) => {
  return (
    <div>
      <Link
        href={`/products/${product.slug.current}`}
      >
        <div className="product">
          <img
            src={urlFor(product.image && product.image[0])}
            width={350}
            height={350}
            alt="cover image"
          />
          <div className="p-title">{product.name}</div>
          <div className="p-price">${product.price}</div>
        </div>{" "}
      </Link>
    </div>
  );
};

export default Product;
