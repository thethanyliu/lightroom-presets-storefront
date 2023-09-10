import React from "react";
import getStripe from "@/lib/getStripe";
import { useStateContext } from "@/context/StateContext";
import { Button } from "@nextui-org/react";
import { ProductDesc } from "..";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { toast } from "react-hot-toast";
import styles from "./ProductDetails.module.css";

const ProductDetails = ({ product, name, price, presetNumber }) => {
  const { onAddToCart, cartItems, setTotalPrice, setTotalQty, setCartItems } =
    useStateContext();

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
        >
          Buy Now
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
