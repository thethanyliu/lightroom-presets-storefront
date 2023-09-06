import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
import { Cart, BackDrop } from "..";
import classes from "./Navbar.module.css"

const Navbar = () => {
  const linkStyleDesktop = { textDecoration: "none", color: "black", fontWeight: 700 };
  const linkStyleMobile = { textDecoration: "none", color: "black", fontWeight: 500 }
  const { showCart, totalQty, setShowCart } = useStateContext();

  return (
    <div className={classes.nbWrapper}>
      <div className={classes.nbFirstContainer}>
        <Link href="\"><img src="/site_logo.png" alt="site logo" width="64px" height="64px" /></Link>
        
        <ul className={classes.navbarUl}>
          <li className={classes.linkItem}>
            <Link style={window.innerWidth > 768 ? linkStyleDesktop : linkStyleMobile} href="/products">
              Products
            </Link>
          </li>
          <li className={classes.linkItem}>
            <Link style={window.innerWidth > 768 ? linkStyleDesktop : linkStyleMobile} href="/tutorial">
              Tutorial
            </Link>
          </li>
          <li className={classes.linkItem}>
            <Link style={window.innerWidth > 768 ? linkStyleDesktop : linkStyleMobile} href="/contact-us">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.nbSecondContainer}>
        <button
          type="button"
          className={classes.cart}
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className={totalQty == 0 ? classes.hidden : classes.cartQty}>
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
