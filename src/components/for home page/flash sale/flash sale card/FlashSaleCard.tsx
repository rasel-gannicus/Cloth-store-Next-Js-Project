import { TCloths } from "@/types/types";
import React from "react";
import FlashSaleCountdown from "../flash sale countdown/FlashSaleCountdown";
import Link from "next/link";

const FlashSaleCard = ({data} : {data : TCloths}) => {
    
  return (
    data.FlashSale && <div className="card w-[95%] lg:w-[400px]   bg-base-100 shadow-xl mx-auto">
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
          <Link href={`/singleProduct/${data._id}`}>
            <button className="btn btn-neutral hover:btn-ghost">
              View Details
            </button>
          </Link>
          <button className="btn btn-neutral hover:btn-warning">Buy Now</button>
        </div>
    </div>
  </div>
  );
};

export default FlashSaleCard;
