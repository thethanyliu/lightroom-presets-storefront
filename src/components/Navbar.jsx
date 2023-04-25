import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div>
        <ul>
          <li className="home-link">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/tutorial">Tutorial</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
