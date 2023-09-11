import React from "react";
import {
  FeaturedProducts,
  Footer,
  Hero,
  ImageSection,
  Info,
  Layout,
  Navbar,
  StatsSection,
} from "../components";
import { client } from "@/lib/client";

const Home = ({ products }) => {
  const copyWrite =
    "Upgrading your photo game has never been easier. With over 40+ Lightroom mobile (XMP files) and Lightroom desktop presets (DNG files) in our Master Collection, each designed to enhance your creative workflow, you can be sure that there will be a preset to make every photo look spectacular.";

  return (
    <>
      <Layout>
        <Navbar />
        <Hero />
        <FeaturedProducts products={products} />
        <StatsSection text={copyWrite} showIncludes={false} />
        <Info />
        <ImageSection />
      </Layout>
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

export default Home;
