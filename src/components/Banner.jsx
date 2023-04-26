import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div  
      className="bannerImage">
      <div className="bannerText">
        Empowering Creativity
      </div>
      <div>
        <Link href="/">
          <button className="bannerButton" type="button">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
