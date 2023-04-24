import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url(..assets/banner.jpg)] text-center relative h-[300px] lg:h-[600px] rounded-md">
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
