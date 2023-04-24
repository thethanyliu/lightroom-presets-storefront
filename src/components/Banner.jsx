import React from "react";
import Link from "next/link";
import BannerImage from "../assets/banner.jpg"

const Banner = () => {
  return (
    <div  
      className="bannerImage text-center relative h-[300px] lg:h-[600px] rounded-md pt-32">
      <div className="text-3xl lg:text-4xl font-bold">
        Empowering Creativity
      </div>
      <div>
        <Link href="/">
          <button type="button">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
