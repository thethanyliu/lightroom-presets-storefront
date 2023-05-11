import React, { useRef } from "react";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
import { urlFor } from "@/lib/client";
import getStripe from "@/lib/getStripe";
import { toast } from "react-hot-toast";

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
    <div className="cart-container" ref={cartRef}>
      <button
        type="button"
        className="cart-heading"
        onClick={() => setShowCart(false)}
      >
        <AiOutlineLeft />
        <span className="heading">Your Cart: {totalQty} items</span>
      </button>
      {cartItems.length < 1 ? (
        <div className="empty-cart">
          <AiOutlineShopping size={100} /> <h3>Your shopping bag is empty</h3>
          <Link href="/">
            <button
              type="button"
              className="continue-btn"
              onClick={() => setShowCart(false)}
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-product">
              <img
                src={urlFor(item?.productImage)}
                width={100}
                height={100}
                className="cart-pics"
              />
              <div className="cart-item-desc flex">
                <h4>{item.name}</h4>
                <div>
                  <h5>{item.quantity}</h5>
                  <button
                    type="button"
                    className="remove-btn"
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
        <div className="cart-bottom">
          <div>
            <h3>Subtotal: ${totalPrice}</h3>
          </div>
          <div className="pay-btn-container">
            <button type="button" className="pay-btn" onClick={handleCheckout}>
              Pay Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
