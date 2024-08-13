"use client";

import { addUserToRedux } from "@/utils/Redux/features/user/userSlice";
import { useAppDispatch } from "@/utils/Redux/hooks";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Modal from "../Modal/Modal";

const CustomWrapper = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) => {
  const isHomePage = usePathname() === "/";
  console.log(session);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (session?.user.email) {
      dispatch(addUserToRedux(session?.user));
      // dispatch(addUserToRedux(session));
    }
  }, [session, dispatch]);
  return (
    <div
      className={`${
        !isHomePage &&
        "pt-20 container min-h-screen flex flex-col justify-center items-center"
      } `}
    >
      {children}
      <Modal />
    </div>
  );
};

export default CustomWrapper;
