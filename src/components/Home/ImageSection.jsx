import React from "react";
import { useRouter } from "next/router";
import { Button } from "@nextui-org/react";
import classes from "./ImageSection.module.css";

const ImageSection = () => {
  const router = useRouter();

  return (
    <div className={classes.imageSectionContainer}>
      <div className={classes.firstImage}>
        <div className={classes.innerImageContainer}>
          <h2 className="text-3xl font-semibold pb-3">Lightroom Presets</h2>
          <Button
            type="button"
            radius="full"
            className="bg-white"
            onPress={() => router.push("/products")}
          >
            <span
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: 600,
              }}
            >
              Shop Now
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
