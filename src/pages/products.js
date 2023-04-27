import React from "react";
import { client } from "../lib/client"
import { Product } from "@/components";


const product = ({ products }) => {
    console.log(products[0])
    return <div>{products.map((product) => {
        return <Product product={product}/>
    })}</div>
}

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]'; // get all products
    const products = await client.fetch(query);
  
    return {
      props: {products}
    }
  }


  export default product