import { TCloths } from "@/types/types";
import React from "react";

const FlashSaleCard = ({data} : {data : TCloths}) => {
    
  return (
    data?.FlashSale && <div className="card-normal w-[95%] mx-auto md:w-full bg-base-100 shadow-xl">
    <figure className="relative">
      <img
        src={data.Images}
        alt="Shoes"
        className="mx-auto p-2"
      />
      <span className="absolute bg-[#DB2777] py-1 px-2 bottom-4 right-6 shadow-xl text-white">Time Remaining : 2d</span>
    </figure>
    <div className="card-body">
      <h2 className="card-title">{data.Title}</h2>
      <p>{data.Description}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-neutral">Buy Now</button>
      </div>
    </div>
  </div>
  );
};

export default FlashSaleCard;
