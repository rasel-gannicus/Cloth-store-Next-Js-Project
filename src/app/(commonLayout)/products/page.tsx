import ProductCard from "@/components/products/product card/ProductCard";
import { TCloths } from "@/types/types";
import React from "react";

const AllProducts = async () => {
  //   --- fetching data from server with SSR
  const res = await fetch(
    "https://server-for-assignment-8.vercel.app/allCloths",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10">
        Showing
        <span className="text-pink-600">All</span>
        products
      </h2>
      <div className="py-5 grid md:grid-cols-3 gap-6 px-1">
        {data?.length > 0 ? (
          data?.map((item: TCloths) => (
            <ProductCard key={item._id} data={item} />
          ))
        ) : (
          <h2>No data found</h2>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
