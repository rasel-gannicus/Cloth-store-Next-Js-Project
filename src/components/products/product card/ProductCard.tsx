import { TCloths } from "@/types/types";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data }: { data: TCloths }) => {
  return (
    <div className="card w-[95%] mx-auto md:w-full bg-base-100 shadow-xl">
      <figure className="relative">
        <img src={data.Images} alt="Shoes" className="mx-auto w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.Title}</h2>
        <div className="flex justify-between items-center mt-5">
          <p>Price :</p>
          <p>
            $ <span className="font-bold">{data.Price}</span>
          </p>
        </div>
        <div className="flex justify-between items-center mb-5">
          <p>Rating :</p>
          <p>
            <span className="font-bold text-orange-400">{data.Ratings}</span>
          </p>
        </div>
        <p className="text-gray-400">{data.Description}</p>
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

export default ProductCard;
