import React, { useState } from "react";
import Image from "next/image";
import { client, urlFor } from "../../lib/client";
import styles from "./ProductImages.module.css";

const ProductImages = ({ productImage, images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className={styles.imageContainer}>
      {imageIndex === 0 ? (
        <Image
          src={urlFor(productImage).url()}
          alt="product image"
          className={styles.productDetailsImage}
          width={500}
          height={500}
        />
      ) : (
        <Image
          src={urlFor(images[imageIndex - 1]).url()}
          alt="product image"
          className={styles.otherImagesLarge}
          width={400}
          height={400}
        />
      )}
      <div className={styles.otherImagesContainer}>
        <Image
          src={urlFor(productImage).url()}
          alt="other images"
          className={styles.otherProductImage}
          width={70}
          height={70}
          onClick={() => setImageIndex(0)}
        />
        {images?.map((image, i) => {
          return (
            <Image
              key={i}
              src={urlFor(image).url()}
              className={styles.otherImages}
              onClick={() => setImageIndex(i + 1)}
              width={90}
              height={45}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
