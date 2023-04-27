import React from "react";
import { Product, Footer, Cart, Banner, Layout, Navbar } from "../components";
import { client } from "../lib/client"

const Home = ({ products, banners }) => {
  console.log(process.env)
  return (
    <>
    <Navbar />
      <Banner />
      <Footer />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'; // get all products
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]'; // get all banners
  const banners = await client.fetch(bannerQuery);

  return {
    props: {products, banners}
  }
}

export default Home;
