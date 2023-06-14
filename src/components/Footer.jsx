import React from "react";
import classes from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={classes.container}>
        <div>Instagram</div>
        <div>
          <Link
            style={{
              textDecoration: "none",
              color: "grey",
              fontWeight: 500,
              paddingRight: 4,
            }}
            href="/terms-and-conditions"
          >
            Terms and conditons
          </Link>{" "}
          <Link
            style={{ textDecoration: "none", color: "grey", fontWeight: 500 }}
            href="/privacy-policy"
          >
            Privacy policy
          </Link>
        </div>
      </div>

      <div className={classes.footer}>
        <p>&copy; 2023 Pnutpresets All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
