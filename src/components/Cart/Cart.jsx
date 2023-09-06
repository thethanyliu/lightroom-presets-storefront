import React, { useRef } from "react";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
import { urlFor } from "@/lib/client";
import getStripe from "@/lib/getStripe";
import { toast } from "react-hot-toast";
import classes from "./Cart.module.css"

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQty, cartItems, setShowCart, removeFromCart } =
    useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const res = await fetch("/api/stripe", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (res.status === 500) {
      return console.log("Error");
    }

    const data = await res.json();
    toast.loading("Redirecting...");

    return stripe.redirectToCheckout({ sessionId: data.id }); // an instance of a checkout
  };

  return (
    <div className={classes.cartContainer} ref={cartRef}>
      <button
        type="button"
        className={classes.cartHeading}
        onClick={() => setShowCart(false)}
      >
        <AiOutlineLeft />
        <span className={classes.heading}>Your Cart: {totalQty} items</span>
      </button>
      {cartItems.length < 1 ? (
        <div className={classes.emptyCart}>
          <AiOutlineShopping size={100} /> <h3>Your shopping bag is empty</h3>
          <Link href="/">
            <button
              type="button"
              className={classes.continueBtn}
              onClick={() => setShowCart(false)}
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className={classes.cartItems}>
          {cartItems.map((item, index) => (
            <div className={classes.cartProduct}>
              <img
                src={urlFor(item?.productImage)}
                width={100}
                height={100}
                className={classes.cartPics}
              />
              <div className={classes.cartItemDesc}>
                <h4>{item.name} {item.quantity}</h4>
                <div>
                  <button
                    type="button"
                    className={classes.removeBtn}
                    onClick={() => removeFromCart(item, index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length >= 1 && (
        <div className={classes.cartBottom}>
          <div>
            <h3>Subtotal: ${totalPrice}</h3>
          </div>
          <div className={classes.payBtnContainer}>
            <button type="button" className={classes.payBtn} onClick={handleCheckout}>
              Pay Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
