import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
  Product,
  ProductDesc,
  Info,
  BeforeAndAfter,
  StatsSection,
} from "../../components";
import { useStateContext } from "@/context/StateContext";
import getStripe from "@/lib/getStripe";
import { toast } from "react-hot-toast";

const ProductDetails = ({ product, products }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const {
    productImage,
    images,
    name,
    price,
    relatedProducts,
    presetNumber,
    beforeAfterImages,
  } = product;

  const { onAddToCart, cartItems, setTotalPrice, setTotalQty, setCartItems } =
    useStateContext();

  const copyWrite = `The ${name} includes files for both Lightroom mobile (DNG files) and Lightroom desktop (XMP files). All of which you get to keep forever!`;
  const handleBuyNow = async () => {
    const stripe = await getStripe();
    const newCartItems = [...cartItems, { ...product, quantity: 1 }];

    setCartItems(newCartItems);
    setTotalPrice((prev) => prev + price);
    setTotalQty((prev) => prev + 1);

    const res = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCartItems),
    });

    if (res.status === 500) {
      return console.log("Error");
    }

    const data = await res.json();

    toast.loading("Redirecting...");

    return stripe.redirectToCheckout({ sessionId: data.id }); // an instance of a checkout
  };

  console.log(products);

  return (
    <>
      <div className="product-details">
        <div className="image-container">
          <img
            src={
              imageIndex === 0
                ? urlFor(productImage)
                : urlFor(images[imageIndex - 1])
            }
            className={
              imageIndex === 0 ? "product-details-image" : "other-images-large"
            }
          />
          <div className="other-images-container">
            <img
              src={urlFor(productImage)}
              className="other-product-image"
              onClick={() => setImageIndex(0)}
            />
            {images?.map((image, i) => {
              return (
                <img
                  key={i}
                  src={urlFor(image)}
                  className="other-images"
                  onClick={() => setImageIndex(i + 1)}
                />
              );
            })}
          </div>
        </div>

        <div className="product-details-container">
          <h1 className="product-details-title">{name}</h1>
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <div className="details-price">${price} CAD</div>
          <ProductDesc presetNumber={presetNumber} />
          <div className="product-detail-buttons">
            <button type="botton" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
            <button
              type="button"
              className="add-to-cart"
              onClick={() => {
                onAddToCart(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="product-details-info">
        <Info />
      </div>
      {/* <BeforeAndAfter fromSchema={true} beforeAfterImages={beforeAfterImages} titleText={"What's Diffing"} /> */}
      <StatsSection text={copyWrite} showIncludes={true} />
      <div className="recommended-products-container">
        <h2 className="rec-products">Recommended Products</h2>
        <div className="recommended-products">
          {products.map((product) => {
            if (relatedProducts.includes(product.name)) {
              return <Product product={product} width={300} height={300} />;
            }
          })}
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  // get all products but only return slug property
  const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`; // get all products
  const product = await client.fetch(query);

  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products },
  };
};

export default ProductDetails;
