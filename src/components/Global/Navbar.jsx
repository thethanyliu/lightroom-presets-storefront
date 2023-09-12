import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useStateContext } from "@/context/StateContext";
import { AiOutlineCloseCircle, AiOutlineShopping } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
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
  showBottomBorder = true,
}) => {
  const [menuBar, setMenuBar] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const { showCart, totalQty } = useStateContext();

  const navbarRef = useRef(null);

  const router = useRouter();
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

  const clickHandler = (e) => {
    if (navbarRef.current && !navbarRef.current.contains(e.target)) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    handleChangeNavBG();

    window.addEventListener("scroll", handleChangeNavBG);
    window.addEventListener("mousedown", clickHandler);
    return () => {
      window.removeEventListener("scroll", handleChangeNavBG);
      window.removeEventListener("mousedown", clickHandler);
    };
  });

  return (
    <header>
      <div
        className={
          !menuBar && initiallyTransparent
            ? styles.nbWrapper
            : styles.nbWrapperSecond
        }
        style={
          !menuBar && showBottomBorder
            ? { borderBottom: "#ccc 0.1px solid" }
            : null
        }
      >
        <div
          className={
            !menuBar && !darkMode
              ? styles.barContainerLight
              : styles.barContainerDark
          }
          onClick={() => setShowSidebar((prev) => !prev)}
        >
          {!showSidebar ? <FaBars /> : <AiOutlineCloseCircle />}
        </div>
        <div className={styles.nbFirstContainer}>
          <Link href="/">
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
            className={
              !menuBar && !darkMode ? styles.shopLight : styles.shopDark
            }
            onClick={() => router.push("/checkout")}
          >
            <AiOutlineShopping />
          </div>
          {totalQty !== 0 && <div className={styles.cartQty}>{totalQty}</div>}
        </div>
        {showCart && <BackDrop />}
        {showCart && <Cart />}
      </div>
      <ul
        className={showSidebar ? styles.navBarUlMobile : styles.hidden}
        ref={navbarRef}
      >
        <li className={styles.closeContainerDark}>
          {showSidebar ? (
            <AiOutlineCloseCircle
              onClick={() => setShowSidebar((prev) => !prev)}
            />
          ) : (
            <div className={styles.hidden} />
          )}
        </li>
        {navLinks?.map((navLink, i) => (
          <li
            key={i}
            className={styles.linkItemMobile}
            style={!showSidebar ? { display: "none" } : null}
          >
            <Link key={navLink.name} href={navLink.on ? navLink.link : "#"}>
              <span
                style={
                  showSidebar
                    ? pathname === navLink.link
                      ? linkStyleMobileUnderline
                      : linkStyleMobile
                    : { display: "none" }
                }
              >
                {navLink.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
