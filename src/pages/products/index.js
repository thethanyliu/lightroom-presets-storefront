import React from "react";
import { client } from "../../lib/client";
import { Product } from "@/components";

const product = ({ products }) => {
  return (
    <>
      <div className="products">
        {products?.map((product) => {
          return <Product product={product} dimensions={350} />;
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
