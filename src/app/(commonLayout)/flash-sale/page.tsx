import FlashSaleCard from "@/components/for home page/flash sale/flash sale card/FlashSaleCard";
import { TCloths } from "@/types/types";
import React from "react";

const FlashSaleAll = async () => {
  // --- fetching data with SSR(Server Site Rendering) method
  const res = await fetch(
    "https://server-for-assignment-8.vercel.app/allCloths",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return (
    <div className=" mx-auto">
      <h2 className="text-center mt-10 text-4xl font-bold">Hurry Up ! </h2>
      <h2 className="text-center my-3 text-4xl font-bold">
        Before the <span className="text-red-500">Sale Ends </span> !
      </h2>
      <hr className="border-2 w-3/4 mx-auto my-5" />

      {/* --- all the flash sale items in card view --- */}
      <div className="py-5 grid md:grid-cols-3 gap-6 px-1">
        {data?.length > 0 ? (
          data?.map((item: TCloths) => (
            <FlashSaleCard key={item._id} data={item} />
          ))
        ) : (
          <h2>No data found</h2>
        )}
      </div>
    </div>
  );
};

export default FlashSaleAll;
