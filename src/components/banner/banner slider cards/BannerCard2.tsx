import React from "react";

const BannerCard2 = () => {
  return (
    <div className=" banner-section-2 flex flex-col justify-center items-center relative h-[680px]  ">
      {/* --- banner text and buttons --- */}
      <div className="flex flex-col gap-10 md:flex-row justify-between items-center w-full px-20 z-20">
        <div></div>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-20 z-0"></div>
        <div className="banner-left-side flex flex-col gap-5 items-start max-w-60 text-white banner-left z-40">
          <h1 className="uppercase md:text-4xl font-bold">
            <span className="text-[#F565B0]">Kid&apos;s </span> <br /> fashion
          </h1>
          <p>Explore the gorgeous collection for Kid&apos;s here</p>
          <button className="btn bg-[#F565B0] font-semibold rounded-none text-white md:text-lg border-none hover:btn-neutral z-40">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerCard2;
