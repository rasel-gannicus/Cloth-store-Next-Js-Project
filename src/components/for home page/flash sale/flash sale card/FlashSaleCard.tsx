import { TCloths } from "@/types/types";
import React from "react";
import FlashSaleCountdown from "../flash sale countdown/FlashSaleCountdown";

const FlashSaleCard = ({data} : {data : TCloths}) => {
    // console.log(data);
  return (
    data.FlashSale && <div className="card w-[95%] mx-auto md:w-full bg-base-100 shadow-xl">
    <figure className="relative">
      <img
        src={data.Images}
        alt="Shoes"
        className="mx-auto w-full"
      />
      {data?.flashSaleEndTime && <div className="absolute bg-[#DB2777] py-1 px-2 bottom-0 right-0  text-white text-sm ">
      <FlashSaleCountdown endTime={data.flashSaleEndTime} />
      </div>}
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
