import { TCloths } from "@/types/types";
import React from "react";

const ProductCard = ({data} : {data : TCloths}) => {
  return (
    <div className="card w-[95%] mx-auto md:w-full bg-base-100 shadow-xl">
      <figure className="relative">
        <img src={data.Images} alt="Shoes" className="mx-auto w-full" />
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

export default ProductCard;
