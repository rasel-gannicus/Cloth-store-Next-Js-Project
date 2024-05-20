import React from "react";

const BannerCard1 = () => {
  return (
    <div className=" banner-section flex flex-col justify-center items-center relative h-[680px]">
      {/* --- banner text and buttons --- */}
      <div className="flex flex-col gap-10 md:flex-row justify-between items-center w-full px-20 z-20">
        <div className="banner-left-side flex flex-col gap-5 items-start max-w-60 text-white banner-left">
          <h1 className="uppercase md:text-4xl font-bold">
            <span className="text-[#65CDF5]">Men&apos;s </span> <br /> fashion
          </h1>
          <p>Explore the gorgeous collection for Men&apos;s here</p>
          <button className="btn bg-[#65CDF5] border-none font-semibold rounded-none text-white md:text-lg hover:btn-neutral">
            Shop Now
          </button>
        </div>
        <div className="banner-left-side flex flex-col gap-5 items-start max-w-60 text-white banner-left">
          <h1 className="uppercase md:text-4xl font-bold">
            <span className="text-[#F565B0]">Women&apos;s </span> <br /> fashion
          </h1>
          <p>Explore the gorgeous collection for Women&apos;s here</p>
          <button className="btn bg-[#F565B0] font-semibold rounded-none text-white md:text-lg border-none hover:btn-neutral">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerCard1;
