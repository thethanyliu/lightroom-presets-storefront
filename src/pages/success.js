import React, { useEffect } from "react";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

const success = () => {
  const { cartItems, setTotalQty, setCartItems, setTotalPrice } =
    useStateContext();

  useEffect(() => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQty(0);
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="back-fill-icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order.</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <Link href="/">
          <button type="button" className="continue-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default success;
