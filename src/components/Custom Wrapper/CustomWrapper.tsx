"use client";

import { usePathname } from "next/navigation";
import React from "react";

const CustomWrapper = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) => {
  const isHomePage = usePathname() === "/";
  console.log(session);
  return (
    <div
      className={`${
        !isHomePage &&
        "pt-20 container min-h-screen flex flex-col justify-center items-center"
      } `}
    >
      {children}
    </div>
  );
};

export default CustomWrapper;
