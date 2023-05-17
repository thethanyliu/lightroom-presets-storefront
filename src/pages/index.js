import React from "react";
import {
  Banner,
  ImageSection,
  Info,
  Slider,
} from "../components";
import { client } from "@/lib/client";

const Home = ({ products }) => {
  return (
    <div className="home">
      <Banner products={products} />
      <ImageSection />
      <Info />
      {/* <Slider  /> */}
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
