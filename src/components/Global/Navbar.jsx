import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useStateContext } from "@/context/StateContext";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart, BackDrop } from "..";
import styles from "./Navbar.module.css";
import {
  linkStyleDesktopDark,
  linkStyleDesktopDarkUnderline,
  linkStyleDesktopLight,
  linkStyleDesktopLightUnderline,
  linkStyleMobileUnderline,
  linkStyleMobile,
} from "./NbStyles";

const Navbar = ({ bgOn = 50, initiallyTransparent = true }) => {
  const [menuBar, setMenuBar] = useState(false);

  const { showCart, totalQty, setShowCart } = useStateContext();

  const router = useRouter();

  const navLinks = [
    {
      name: "Home",
      link: "/",
      on: true,
    },
    {
      name: "Products",
      link: "/products",
      on: true,
    },
    {
      name: "Tutorial",
      link: "/tutorial",
      on: true,
    },
    {
      name: "Contact",
      link: "/contact",
      on: true,
    },
  ];

  const handleChangeNavBG = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= bgOn) {
        setMenuBar(true);
      } else {
        setMenuBar(false);
      }
    }
  };

  useEffect(() => {
    handleChangeNavBG();

    window.addEventListener("scroll", handleChangeNavBG);
    return () => {
      window.removeEventListener("scroll", handleChangeNavBG);
    };
  });

  return (
    <div
      className={
        !menuBar && initiallyTransparent
          ? styles.nbWrapper
          : styles.nbWrapperSecond
      }
    >
      <div className={styles.nbFirstContainer}>
        <Link href="\">
          {!menuBar ? (
            <Image
              src="/assets/Logos/site-logo-light.png"
              alt="site logo"
              width={64}
              height={64}
            />
          ) : (
            <Image
              src="/assets/Logos/site-logo-dark.png"
              alt="site logo"
              width={64}
              height={64}
            />
          )}
        </Link>

        <ul className={styles.navbarUl}>
          {navLinks.map((link, i) => (
            <li key={i} className={styles.linkItem}>
              <Link
                key={link.name}
                style={
                  !menuBar
                    ? router.pathname === link.link
                      ? linkStyleDesktopLightUnderline
                      : linkStyleDesktopLight
                    : router.pathname === link.link
                    ? linkStyleDesktopDarkUnderline
                    : linkStyleDesktopDark
                }
                href={link.on ? link.link : "#"}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.cartContainer}>
        <div
          className={!menuBar ? styles.shopLight : styles.shopDark}
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className={totalQty == 0 ? styles.hidden : styles.cartQty}>
            {totalQty}
          </span>
        </div>
      </div>
      {showCart && <BackDrop />}
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
