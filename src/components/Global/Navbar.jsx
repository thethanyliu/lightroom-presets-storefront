import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
import { Cart, BackDrop } from "..";
import styles from "./Navbar.module.css"

const Navbar = () => {
  const linkStyleDesktop = { textDecoration: "none", color: "black", fontWeight: 700 };
  const linkStyleMobile = { textDecoration: "none", color: "black", fontWeight: 500 }
  const { showCart, totalQty, setShowCart } = useStateContext();

  return (
    <div className={styles.nbWrapper}>
      <div className={styles.nbFirstContainer}>
        <Link href="\"><img src="/assets/site_logo.png" alt="site logo" width="64px" height="64px" /></Link>
        
        <ul className={styles.navbarUl}>
          <li className={styles.linkItem}>
            <Link style={window.innerWidth > 768 ? linkStyleDesktop : linkStyleMobile} href="/products">
              Products
            </Link>
          </li>
          <li className={styles.linkItem}>
            <Link style={window.innerWidth > 768 ? linkStyleDesktop : linkStyleMobile} href="/tutorial">
              Tutorial
            </Link>
          </li>
          <li className={styles.linkItem}>
            <Link style={window.innerWidth > 768 ? linkStyleDesktop : linkStyleMobile} href="/contact-us">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.nbSecondContainer}>
        <button
          type="button"
          className={styles.cart}
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className={totalQty == 0 ? styles.hidden : styles.cartQty}>
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
