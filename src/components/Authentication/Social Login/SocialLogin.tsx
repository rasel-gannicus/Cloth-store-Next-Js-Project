import { Button } from "@/components/ui/button";
import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <p className="text-center font-semibold text-slate-500 mb-3">Or Sign in with</p>
      <div className="flex justify-center items-center gap-4">
        <Button variant="outline" className="">
          <FaGithub className="font-bold mx-5 w-5 h-5" />
        </Button>
        <Button variant="outline" className="">
          <FaFacebook className="font-bold mx-5 w-5 h-5" />
        </Button>
        <Button variant="outline" className="">
          <FaGoogle className="font-bold mx-5 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
