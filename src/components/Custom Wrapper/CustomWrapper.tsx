"use client";

import { usePathname } from "next/navigation";
import React from "react";

const CustomWrapper = ({ children }: { children: React.ReactNode }) => {
  const isHomePage = usePathname() === "/";
  return (
    <div className={`${!isHomePage && "pt-20 container min-h-screen flex flex-col justify-center items-center"} `}>{children}</div>
  );
};

export default CustomWrapper;
