import Link from "next/link";
import "./banner.css";
import Image from "next/image";

const Banner = () => {
  return (
    <div className=" banner-section flex flex-col justify-center items-center relative h-[680px] bg-red-500 mb-28">
      {/* <div className="banner-shadow bg-slate-800 z-10"></div> */}

      {/* --- banner image --- */}
      {/* <div className="absolute left-0 right-0 top-0 bottom-0 z-10">
        <Image
          alt="Banner Image"
          width={1960}
          height={680}
          src={"https://themewagon.github.io/believe/images/slider-1.jpg"}
        />
      </div> */}

      {/* --- banner text and buttons --- */}
      <div className="flex flex-col gap-10 md:flex-row justify-between items-center w-full px-20 z-20">
        <div className="banner-left-side flex flex-col gap-5 items-start max-w-60 text-white banner-left">
            <h1 className="uppercase text-4xl font-bold"> <span className="text-[#65CDF5] ">Men's </span> <br /> fashion</h1>
            <p>Explore the gorgeous collection for Men's here</p>
            <button className="btn bg-[#65CDF5] border-none font-semibold rounded-none text-white text-lg hover:btn-neutral">Shop Now</button>
        </div>
        <div className="banner-left-side flex flex-col gap-5 items-start max-w-60 text-white banner-left">
            <h1 className="uppercase text-4xl font-bold"> <span className="text-[#F565B0] ">Women's </span> <br /> fashion</h1>
            <p>Explore the gorgeous collection for Women's here</p>
            <button className="btn bg-[#F565B0] font-semibold rounded-none text-white text-lg border-none hover:btn-neutral">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
