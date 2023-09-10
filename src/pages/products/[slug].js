import React from "react";
import { client } from "../../lib/client";
import {
  Navbar,
  Footer,
  Product,
  Info,
  ProductDetails,
  ProductImages,
  StatsSection,
  Recommended,
} from "../../components";

const ProductSlug = ({ product, products }) => {
  const { productImage, images, name, price, relatedProducts, presetNumber } =
    product;

  const copyWrite = `The ${name} includes files for both Lightroom mobile (DNG files) and Lightroom desktop (XMP files). All of which you get to keep forever!`;

  return (
    <>
      <Navbar bgOn={10} darkMode={true} />
      <div className="product-details">
        <ProductImages productImage={productImage} images={images} />
        <ProductDetails
          product={product}
          name={name}
          price={price}
          presetNumber={presetNumber}
        />
      </div>
      <div className="product-details-info">
        <Info />
      </div>
      <StatsSection text={copyWrite} showIncludes={true} />
      <Recommended relatedProducts={relatedProducts} products={products} />
      <Footer />
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
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`; // get product equal to current slug
  const product = await client.fetch(query);

  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products },
  };
};

export default ProductSlug;
