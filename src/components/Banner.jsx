import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div  
      className="bannerImage">
      <div className="bannerText">
        Empowering Creativity One Image at a Time
      </div>
      <div>
        <Link href="/products">
          <button className="bannerButton" type="button">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
