import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nb">
      <div>
        <ul className="navbar-ul">
          <li>
            <Link style={{ textDecoration: "none", color: "white" }} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/products"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/tutorial"
            >
              Tutorial
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "white" }}
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
