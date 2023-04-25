import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-transparent w-screen h-16 z-20 fixed">
      <div className="px-3 justify-between items-center w-full h-full flex border-b">
        <ul className="hidden md:flex heading">
          <li className="pl-8 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="pl-5 cursor-pointer">
            <Link href="/products">Products</Link>
          </li>
          <li className="pl-5 cursor-pointer">
            <Link href="/tutorial">Tutorial</Link>
          </li>
          <li className="pl-5 cursor-pointer">
            <Link href="/contact-us">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
