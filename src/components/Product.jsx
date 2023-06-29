import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../lib/client";
import classes from "./Product.module.css";

const Product = ({ product, width, height }) => {
  return (
    <div className={classes.productCard}>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        href={`/products/${product.slug.current}`}
      >
        <div className={classes.product}>
          <Image
            src={urlFor(product.productImage)}
            width={width}
            height={height}
            style={{
              marginTop: "5px",
              marginBottom: "10px",
              textAlign: "center",
              fontWeight: "800",
            }}
            priority={true}
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
