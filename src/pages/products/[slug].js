import React from "react";
import { useState } from "react";
import { client, urlFor } from "../../lib/client";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Product, ProductDesc } from "../../components";

const ProductDetails = ({ product, products }) => {
  const { productImage, images, name, price, relatedProducts } = product;
  const [index, setIndex] = useState(true);

  return (
    <>
      <div className="product-details">
        <div className="image-container">
          <img
            src={urlFor(index ? productImage : images[index])}
            className="product-details-image"
            width={450}
            height={450}
          />
          <div className="other-images-container">
            {images?.map((image, i) => {
              return (
                <img
                  src={urlFor(image)}
                  onMouseEnter={() => {
                    setIndex(i);
                  }}
                  onMouseLeave={() => {
                    setIndex(true);
                  }}
                  className="other-image"
                />
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="product-details-title">{name}</h1>
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <div className="details-price">${price} CAD</div>
          <ProductDesc />
        </div>
      </div>
      <div className="recommended-products-container">
        <h2 className="rec-products">Recommended Products</h2>
        <div className="recommended-products">
          {products.map((product) => {
            if (relatedProducts.includes(product.name)) {
                return <Product product={product} dimensions={250} />
            }
          }
          )}
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  // get all products but only return slug property
  const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`; // get all products
  const product = await client.fetch(query);

  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products },
  };
};

export default ProductDetails;
