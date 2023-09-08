import React from "react";
import bgImage from "../../../public/assets/hero-banner.jpg";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div
      className={styles.bannerImageContainer}
      style={{
        height: "100vh",
        backgroundImage: `linear-gradient(
      90deg,
      rgba(30, 31, 30, 0.4),
      rgba(50, 49, 49, 0.35)
    ), url(${bgImage?.src})`,
      }}
    ></div>
  );
};

export default Hero;
