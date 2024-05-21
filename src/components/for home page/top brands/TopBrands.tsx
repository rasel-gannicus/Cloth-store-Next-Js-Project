import Image from "next/image";
import Link from "next/link";
import React from "react";
import './style.css' ;

const TopBrands = () => {
  return (
    <div className="py-20 w-[95%] mx-auto md:w-full ">
      <h2 className="text-xl md:text-4xl font-semibold text-center">Top Categories</h2>
      <p className="md:text-lg text-xs text-center my-5">
        Visit the Categories which are famous on our site
      </p>

      <div className="grid md:grid-cols-3 gap-5 py-5">
        {/* --- first row --- */}
        <Link href={"/products/mens-wear"}>
          <div className="bg-slate-800 p-5 relative hover:shadow-xl hover:cursor-pointer transition-all ">
            <Image
              src={
                "https://themewagon.github.io/hexashop/assets/images/men-03.jpg"
              }
              width={370}
              height={390}
              alt="Category Men"
            />
            <div className="absolute bottom-8 left-8">
              <h2 className="text-4xl font-bold">Men</h2>
            </div>
          </div>
        </Link>

        {/* --- mid row --- */}
        <div className=" grid gap-4">
          <Link href={"/products/kids-wear"}>
            <div className="bg-slate-900 h-[202px] p-5 relative hover:shadow-xl hover:cursor-pointer transition-all mid-div">
              <div className="absolute bottom-8 left-8">
                <h2 className="text-4xl font-bold text-white">Kids</h2>
              </div>
            </div>
          </Link>
          <Link href={""}>
            <div className="bg-slate-900 h-[202px] p-5 relative hover:shadow-xl hover:cursor-pointer transition-all mid-div2">
              
              <div className="absolute bottom-8 left-8">
                <h2 className="text-4xl font-bold text-white">Accessories</h2>
              </div>
            </div>
          </Link>
        </div>

        {/* --- last row --- */}
        <Link href={"/products/women-clothing"}>
          <div className="bg-slate-800 p-5 relative hover:shadow-xl hover:cursor-pointer transition-all ">
            <Image
              src={
                "https://themewagon.github.io/hexashop/assets/images/women-03.jpg"
              }
              width={370}
              height={390}
              alt="Category Women"
            />
            <div className="absolute bottom-8 left-8">
              <h2 className="text-4xl font-bold text-white">Women</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopBrands;
