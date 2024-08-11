import Image from "next/image";
import Link from "next/link";
import SocialLogin from "../Social Login/SocialLogin";
import loginImg from "@/assets/img/login.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EmailLogin from "./EmailLogin";

const Login = () => {
  return (
    <div className="w-full lg:grid lg:min-h-[500px] lg:grid-cols-2 xl:min-h-[300px] my-10">
      <div className="flex items-center justify-center py-12 lg:border-t lg:border-l lg:border-b">
        <Card className="mx-auto max-w-sm border-none">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your credentials to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>

            {/* --- email/password login */}
            <EmailLogin />

            {/* --- social account login --- */}
            <SocialLogin />
            
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/authentication/register" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src={loginImg}
          alt="Image"
          className=" w-[500px] object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default Login;
