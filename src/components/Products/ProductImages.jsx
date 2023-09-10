import React, { useState } from "react";
import Image from "next/image";
import { client, urlFor } from "../../lib/client";
import styles from "./ProductImages.module.css";


const ProductImages = ({ productImage, images }) => {
    const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className={styles.imageContainer}>
      <Image
        src={
          imageIndex === 0
            ? urlFor(productImage).url()
            : urlFor(images[imageIndex - 1]).url()
        }
        className={
          imageIndex === 0 ?  styles.productDetailsImage : styles.otherImagesLarge
        }
        width={imageIndex === 0 ? 500 : 400}
        height={imageIndex === 0 ? 500 : 400}
      />
      <div className={styles.otherImagesContainer}>
        <img
          src={urlFor(productImage)}
          className={styles.otherProductImage}
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
