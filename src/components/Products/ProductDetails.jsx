import React, { useState } from "react";
import getStripe from "@/lib/getStripe";
import { useStateContext } from "@/context/StateContext";
import { Button } from "@nextui-org/react";
import { ProductDesc } from "..";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "./ProductDetails.module.css";

const ProductDetails = ({ product, name, price, presetNumber, slug }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { onAddToCart, cartItems } = useStateContext();

  const handleBuyNow = async () => {
    setIsLoaded(true);

    const stripe = await getStripe();
    const productInCart = cartItems.find((item) => item.name === product.name);

    let newCartItems;
    if (productInCart) {
      newCartItems = cartItems.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      newCartItems = [...cartItems, { ...product, quantity: 1 }];
    }

    const res = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems: newCartItems, slug }),
    });

    if (res.status === 500) {
      return new Error("Error");
    }

    const data = await res.json();

    onAddToCart(product, false);

    setIsLoaded(false);

    return stripe.redirectToCheckout({ sessionId: data.id }); // an instance of a checkout
  };

  return (
    <div className={styles.productDetailsContainer}>
      <h1 className={styles.productDetailsTitle}>{name}</h1>
      <div className={styles.starsRatingContainer}>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </div>
      <div className={styles.detailsPrice}>${price} CAD</div>
      <ProductDesc presetNumber={presetNumber} />
      <div className={styles.productDetailButtons}>
        <Button
          type="button"
          size="lg"
          color="secondary"
          onPress={handleBuyNow}
          isLoading={isLoaded}
          radius="lg"
          spinner={
            <svg
              className="animate-spin h-5 w-5 text-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                fill="currentColor"
              />
            </svg>
          }
        >
          <span>{isLoaded ? "Loading..." : "Buy Now"}</span>
        </Button>
        <Button
          type="button"
          size="lg"
          color="secondary"
          variant="ghost"
          onPress={() => {
            onAddToCart(product);
          }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
