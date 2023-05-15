import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
import { Cart, BackDrop } from "./";

const Navbar = () => {
  const linkStyle = { textDecoration: "none", color: "black", fontWeight: 700 };
  const { showCart, totalQty, setShowCart } = useStateContext();

  return (
    <div className="nb-wrapper">
      <div className="nb-first-container">
        <img src="/site_logo.png" alt="site logo" width="64px" height="64px" />
        <ul className="navbar-ul">
          <li>
            <Link style={linkStyle} href="/products">
              Products
            </Link>
          </li>
          <li>
            <Link style={linkStyle} href="/tutorial">
              Tutorial
            </Link>
          </li>
          <li>
            <Link style={linkStyle} href="/contact-us">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="nb-second-container">
        <button
          type="button"
          className="cart"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className={totalQty == 0 ? "hidden" : "cart-qty"}>
            {totalQty}
          </span>
        </button>
      </div>
      {showCart && <BackDrop />}
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
