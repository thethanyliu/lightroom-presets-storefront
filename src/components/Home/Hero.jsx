import React from "react";
import { useRouter } from "next/router";
import { Button } from "@nextui-org/react";
import bgImage from "../../../public/assets/hero-banner-home.jpg";
import styles from "./Hero.module.css";

const Hero = () => {
  const router = useRouter();

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
    >
      <div className={styles.bannerContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Empowering Creativity</h2>
          <span className={styles.subtitle}>Custom Lightroom Presets</span>
          <div className={styles.buttonContainer}>
            <Button auto radius="lg" color="secondary" css={{ zIndex: "$1" }} onPress={() => router.push("/products")}>
              <span
                style={{
                  color: "rgb(241 245 249)",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                }}
              >
                Shop Now
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
