import React from "react";
import classes from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className={classes.container}>
        <div className={classes.socialContainer}>
          <div className={classes.footerLogo}>
            <img
              src="/site_logo.png"
              alt="site logo"
              width="100px"
              height="100px"
            />
          </div>
        </div>
        <div className={classes.supportLinkContainer}>
          <h4 className={classes.support}>Popular</h4>
          <div className={classes.supportLink}>
            <Link
              style={{
                textDecoration: "none",
                color: "grey",
                fontWeight: 500,
              }}
              href="/products/master-collection"
            >
              Master Collection
            </Link>
          </div>
          <div className={classes.supportLink}>
            <Link
              style={{
                textDecoration: "none",
                color: "grey",
                fontWeight: 500,
              }}
              href="/products/urbanized-preset-bundle"
            >
              Urbanized
            </Link>
          </div>
          <div className={classes.supportLink}>
            <Link
              style={{
                textDecoration: "none",
                color: "grey",
                fontWeight: 500,
              }}
              href="/products/exotic-islande-preset-bundle"
            >
              Exotic Islande
            </Link>
          </div>
        </div>
        <div className={classes.presetLinkContainer}>
          <h4 className={classes.support}>Support</h4>
          <div className={classes.supportLink}>
            <Link
              style={{
                textDecoration: "none",
                color: "grey",
                fontWeight: 500,
              }}
              href="/terms-and-conditions"
            >
              Terms and conditons
            </Link>
          </div>
          <div className={classes.supportLink}>
            <Link
              style={{
                textDecoration: "none",
                color: "grey",
                fontWeight: 500,
              }}
              href="/privacy-policy"
            >
              Privacy policy
            </Link>
          </div>
          <div className={classes.supportLink}>
            <Link
              style={{
                textDecoration: "none",
                color: "grey",
                fontWeight: 500,
              }}
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className={classes.socialLinkContainer}>
          <h4 className={classes.support}>Social</h4>
          <div className={classes.supportLink}>
            <a
              style={{
                textDecoration: "none",
                color: "grey",
                fontWeight: 500,
              }}
              href="https://www.instagram.com/pnutpresets/"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className={classes.footer}>
        <p>&copy; 2023 Pnutpresets All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
