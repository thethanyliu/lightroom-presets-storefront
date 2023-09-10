import React from "react";
import { client } from "../../lib/client";
import { Footer, Navbar, Product } from "@/components";

const product = ({ products }) => {
  const uniqProducts = [];
  products.forEach((item) => {
    if (!uniqProducts.includes(item)) {
      uniqProducts.push(item);
    }
  });

  return (
    <>
      <Navbar bg={10} darkMode={true} />
      <div className="products">
        {uniqProducts?.map((product, i) => {
          return <Product key={i} product={product} width={350} height={350} />;
        })}
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'; // get all products
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default product;
