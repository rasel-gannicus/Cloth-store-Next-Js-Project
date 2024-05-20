import { TCloths } from "@/types/types";
import React from "react";

const FlashSaleCard = ({data} : {data : TCloths}) => {
    // console.log(data);
  return (
    data?.FlashSale && <div className="card-normal w-[95%] mx-auto md:w-full bg-base-100 shadow-xl">
    <figure>
      <img
        src={data.Images}
        alt="Shoes"
        className="mx-auto p-2"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{data.Title}</h2>
      <p>{data.Description}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  );
};

export default FlashSaleCard;
