import React from "react";
import {
  Banner,
  FeaturedProduct,
  Info,
  Slider,
} from "../components";
import IOne from "../../public/Image_One.jpeg"
import ITwo from "../../public/Image_Two.jpeg"
import { client } from "../lib/client";

const Home = ({ products }) => {
  return (
    <div className="home">
      <Banner />
      <FeaturedProduct
        featuredProducts={products.filter((product) => product.feature)}
      />
      <Info />
      <Slider beforeImage={IOne} afterImage={ITwo} />
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
