import React from "react";
import { client, urlFor } from "../../lib/client";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductDetails = ({ product }) => {
  const { image, name, price, details } = product;

  return (
    <>
      <div className="product-details">
        <div className="image-container">
          <img src={urlFor(image && image[0])} width={450} height={450} />
        </div>
        <div>
          <h1 className="product-details-title">{name}</h1>
          <div className="details-price">${price} CAD</div>
        </div>
      </div>
      <div><h2>Recommended Products</h2></div>
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

  return {
    props: { product },
  };
};

export default ProductDetails;
