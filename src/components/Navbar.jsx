import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  const linkStyle = { textDecoration: "none", color: "black", fontWeight: 700 }

  return (
    <div className="nb">
      <div>
        <ul className="navbar-ul">
          <li>
            <Link
              style={linkStyle}
              href="/products"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              style={linkStyle}
              href="/tutorial"
            >
              Tutorial
            </Link>
          </li>
          <li>
            <Link
              style={linkStyle}
              href="/contact-us"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button type="button" className="cart" onClick="">
          <AiOutlineShopping />
          <span className="cart-qty">1</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
