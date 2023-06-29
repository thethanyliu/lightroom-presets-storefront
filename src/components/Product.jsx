import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import classes from "./Product.module.css"

const Product = ({ product, width, height }) => {
  return (
    <div className={classes.productCard}>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        href={`/products/${product.slug.current}`}
      >
        <div className={classes.product}>
          <img
            src={urlFor(product.productImage)}
            width={width}
            height={height}
            className={classes.productImage}
            alt="cover image"
          />
          <div className={classes.productTitle}>{product.name}</div>
          <div className={classes.productImage}>${product.price} CAD</div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
