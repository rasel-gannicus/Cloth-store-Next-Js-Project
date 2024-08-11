"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { loginUser } from "@/utils/Authentication/loginUser";
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TailSpin } from 'react-loader-spinner'


const EmailLogin = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await loginUser({
        email,
        password,
      });
      if (!res.success) {
        toast({
          variant: "destructive",
          description: res.message || "An error happened",
        });
        setLoading(false);
      }
      if (res.success) {
        setLoading(false);
        toast({
          description: res.message,
        });

        // dispatch(addNewSession(res.user))
        // dispatch(addUserToRedux({user : res.user})) ;
        // dispatch(goToPage(1));
        router.push('/') ;
      }
    } catch (err: any) {
      setLoading(false);
      toast({
        variant: "destructive",
        description: err.message || "An error happened",
      });

      throw new Error(err.message);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          placeholder="rasel@example.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          <Link href="#" className="ml-auto inline-block text-sm underline">
            Forgot your password?
          </Link>
        </div>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? (
          <TailSpin
          visible={true}
          height="30"
          width="30"
          color="white"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          />
        ) : (
          "Login"
        )}
      </Button>
    </form>
  );
};

export default EmailLogin;
