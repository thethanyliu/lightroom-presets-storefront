import React from "react";
import getStripe from "@/lib/getStripe";
import { useStateContext } from "@/context/StateContext";
import { Button } from "@nextui-org/react";
import { ProductDesc } from "..";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "./ProductDetails.module.css";

const ProductDetails = ({ product, name, price, presetNumber, slug }) => {
  const { onAddToCart, cartItems, setIsLoading } =
    useStateContext();

  const handleBuyNow = async () => {
    setIsLoading(true);
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
    
    setIsLoading(false);

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
