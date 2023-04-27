import React from "react";
import { client } from "../lib/client";
import { Product, Navbar } from "@/components";

const product = ({ products }) => {
  return (
    <>
      <Navbar />
      <div className="products">
        {products?.map((product) => {
          return <Product product={product} />;
        })}
      </div>
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
