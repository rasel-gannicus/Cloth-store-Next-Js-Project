"use client";
import React, { useEffect, useState } from "react";

interface TDynamicProducts {
  dynamicProducts: string;
}

const DynamicProducts = ({ params }: { params: TDynamicProducts }) => {
  //   console.log(params);
  let { dynamicProducts } = params;


  return (
    <div className="py-10">
      <h2 className="text-4xl font-semibold text-center">
        Showing 
        <span className="text-pink-600">
          {dynamicProducts == "women-clothing" && " Women "}
          {dynamicProducts == "mens-wear" && " Men "}
          {dynamicProducts == "kids-wear" && " Kids "}
          {dynamicProducts == "all" && " All "}
        </span> 
        products
      </h2>
    </div>
  );
};

export default DynamicProducts;
