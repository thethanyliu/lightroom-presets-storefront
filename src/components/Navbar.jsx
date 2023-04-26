import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nb">
      <div>
        <ul className="navbar-ul">
          <li className="home-link">
            <Link style={{ textDecoration: "none", color: "black" }} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href="/products"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href="/tutorial"
            >
              Tutorial
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href="/contact-us"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
