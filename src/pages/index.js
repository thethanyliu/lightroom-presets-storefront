import React from "react";
import {
  Cart,
  Banner,
  Layout,
  FeaturedProduct,
  Info,
} from "../components";
import { client } from "../lib/client";

const Home = ({ products }) => {
  return (
    <div className="home">
      <Banner />
      <FeaturedProduct
        featuredProducts={products.filter((product) => product.feature)}
      />
      <Info />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'; // get all products
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default Home;
