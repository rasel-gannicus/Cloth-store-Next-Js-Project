import loginImg from "@/assets/img/register.jpg";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SocialLogin from "../Social Login/SocialLogin";
import EmailRegister from "./EmailRegister";

const Register = async () => {
  // // --- fetching data with SSG(Static Site Generation) method
  // const res = await fetch(
  //   `https://server-for-assignment-8.vercel.app/cloths/${params.productId}`,
  //   {
  //     cache: "force-cache",
  //   }
  // );
  // const data = await res.json();
  return (
    <div className="w-full lg:grid lg:min-h-[500px] lg:grid-cols-2 xl:min-h-[300px] ">
      <div className="flex items-center justify-center py-12 lg:border-t lg:border-l lg:border-b">
        <Card className="mx-auto max-w-sm border-none">
          <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            
            {/* --- email-password login --- */}
            <EmailRegister />

            {/* --- social login --- */}
            <SocialLogin />

            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/authentication/login" className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src={loginImg}
          alt="Image"
          className=" w-[500px] h-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default Register;
