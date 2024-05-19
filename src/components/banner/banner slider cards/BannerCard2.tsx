import React from "react";

const BannerCard2 = () => {
  return (
    <div className=" banner-section-2 flex flex-col justify-center items-center relative h-[680px]  lg:my-10">
      {/* --- banner text and buttons --- */}
      <div className="flex flex-col gap-10 md:flex-row justify-between items-center w-full px-20 z-20">
        <div></div>
        <div className="banner-left-side flex flex-col gap-5 items-start max-w-60 text-white banner-left">
          <h1 className="uppercase text-4xl font-bold">
            {" "}
            <span className="text-[#F565B0] ">Kid's </span> <br /> fashion
          </h1>
          <p>Explore the gorgeous collection for Kid's here</p>
          <button className="btn bg-[#F565B0] font-semibold rounded-none text-white text-lg border-none hover:btn-neutral">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerCard2;
