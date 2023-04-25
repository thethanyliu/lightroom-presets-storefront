import React from "react";
import Link from "next/link";
import BannerImage from "../assets/banner.jpg"

const Banner = () => {
  return (
    <div  
      className="bannerImage">
      <div className="text-3xl lg:text-4xl font-bold">
        Empowering Creativity
      </div>
      <div>
        <Link href="/">
          <button className="border border-slate-600" type="button">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
