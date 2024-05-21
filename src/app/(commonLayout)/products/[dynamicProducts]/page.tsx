"use client";
import React, { useEffect, useState } from "react";

interface TDynamicProducts {
  dynamicProducts: string;
}

const DynamicProducts = ({ params }: { params: TDynamicProducts }) => {
//   console.log(params);
  const [category, setCategory] = useState("All");

  //   --- checking the url for showing dynamic products according to the url
  useEffect(() => {
    if (params.dynamicProducts == "women-clothing") {
      setCategory("Women's");
    } else if (params.dynamicProducts == "kids-wear") {
      setCategory("Kid's");
    } else if (params.dynamicProducts == "mens-wear") {
      setCategory("Men's");
    } else {
      setCategory("All");
    }
  }, [category]);

  return (
    <div className="py-10">
      <h2 className="text-4xl font-semibold text-center">
        Showing <span className="text-pink-600">{category}</span> products</h2>
    </div>
  );
};

export default DynamicProducts;
