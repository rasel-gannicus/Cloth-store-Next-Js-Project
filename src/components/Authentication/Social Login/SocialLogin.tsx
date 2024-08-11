"use client" ;
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    // console.log(process.env.NEXT_PUBLIC_CLIENT_SITE_URL);
  return (
    <div>
      <p className="text-center font-semibold text-slate-500 my-4">
        Or Sign in with
      </p>
      <div className="flex justify-center items-center gap-4">
        <Button
          variant="outline"
          onClick={() =>
            signIn("github", {
              callbackUrl: `${process.env.NEXT_PUBLIC_CLIENT_SITE_URL}`,
            })
          }
          className=""
        >
          <FaGithub className="font-bold mx-5 w-5 h-5" />
        </Button>
        {/* <Button variant="outline" className="">
          <FaFacebook className="font-bold mx-5 w-5 h-5" />
        </Button> */}
        <Button
          onClick={() =>
            signIn("google", {
              callbackUrl: `${process.env.NEXT_PUBLIC_CLIENT_SITE_URL}`,
            })
          }
          variant="outline"
          className=""
        >
          <FaGoogle className="font-bold mx-5 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
