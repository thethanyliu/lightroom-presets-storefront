import React from "react";
import { client } from "../../lib/client";
import { Footer, Layout, Navbar, Product } from "@/components";

const product = ({ products }) => {
  const uniqProducts = [];
  products.forEach((item) => {
    if (!uniqProducts.includes(item)) {
      uniqProducts.push(item);
    }
  });

  return (
    <>
      <Layout>
        <Navbar bg={10} darkMode={true} />
        <div className="products">
          {uniqProducts?.map((product, i) => {
            return (
              <Product key={i} product={product} width={350} height={350} />
            );
          })}
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const query = '*[_type == "product"]'; // get all products
  const products = await client.fetch(query);

  return {
    props: { products },
    revalidate: 60 * 60 * 24, // seconds
  };
};

export default product;
