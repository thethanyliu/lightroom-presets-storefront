import React from "react";
import Head from "next/head";
import { client } from "../../lib/client";
import {
  Footer,
  Info,
  Layout,
  Navbar,
  ProductDetails,
  ProductImages,
  StatsSection,
  Recommended,
} from "../../components";

const ProductSlug = ({ product, products, slug }) => {
  const { productImage, images, name, price, relatedProducts, presetNumber } =
    product;

  const copyWrite = `The ${name} includes files for both Lightroom mobile (DNG files) and Lightroom desktop (XMP files). All of which you get to keep forever!`;
  return (
    <>
      <Head>
        <title>PnutPresets | Presets</title>
        <meta name="description" content={`${name} product details`} />
        <meta property="og:title" content={name} />
        <meta property="og:description" content={`${name} product details`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Navbar bgOn={10} darkMode={true} />
        <div className="product-details">
          <ProductImages productImage={productImage} images={images} />
          <ProductDetails
            product={product}
            name={name}
            price={price}
            presetNumber={presetNumber}
            slug={slug}
          />
        </div>
        <Info />
        <StatsSection text={copyWrite} showIncludes={true} />
        <Recommended relatedProducts={relatedProducts} products={products} />
      </Layout>
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

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`; // get product equal to current slug
  const product = await client.fetch(query);

  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products, slug },
    revalidate: 60 * 60 * 24, // seconds
  };
};

export default ProductSlug;
