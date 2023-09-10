import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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

const Navbar = ({
  bgOn = 50,
  initiallyTransparent = true,
  darkMode = false,
}) => {
  const [menuBar, setMenuBar] = useState(false);

  const { showCart, totalQty, setShowCart } = useStateContext();
  console.log(totalQty);

  const pathname = usePathname();

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
          {!menuBar && !darkMode ? (
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
      </div>
      <div className={styles.linksContainer}>
        <ul className={styles.navbarUl}>
          {navLinks?.map((navLink, i) => (
            <li
              key={i}
              className={styles.linkItem}
              style={
                !menuBar && !darkMode
                  ? pathname === navLink.link
                    ? linkStyleDesktopLightUnderline
                    : linkStyleDesktopLight
                  : pathname === navLink.link
                  ? linkStyleDesktopDarkUnderline
                  : linkStyleDesktopDark
              }
            >
              <Link key={navLink.name} href={navLink.on ? navLink.link : "#"}>
                <span>{navLink.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.cartContainer}>
        <div
          className={!menuBar && !darkMode ? styles.shopLight : styles.shopDark}
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
        </div>
        {totalQty !== 0 && <span className={styles.cartQty}>{totalQty}</span>}
      </div>
      {showCart && <BackDrop />}
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
