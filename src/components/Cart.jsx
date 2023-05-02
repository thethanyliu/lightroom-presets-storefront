import React, { useRef } from "react";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { toast } from "react-hot-toast";
import { useStateContext } from "@/context/StateContext";
import { urlFor } from "@/lib/client";

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQty, cartItems, setShowCart } = useStateContext();

  return (
    <div className="cart-container">
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
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div>
              <img src={urlFor(item.productImage)} width={100} height={100} className="cart-pics" />
              {item.name} {item.quantity}
              <button type="button">Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
