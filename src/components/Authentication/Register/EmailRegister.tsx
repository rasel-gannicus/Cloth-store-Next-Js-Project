"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { registerUser } from "@/utils/Authentication/registerUser";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TailSpin } from "react-loader-spinner";

const EmailRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast(); // --- toast from ShadCn

  const router = useRouter();

  //   --- submitting the form
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (password !== repassword) {
      // window.alert("Password didn't matched");
      toast({
        description: "Password didn't matched",
        variant: "destructive",
      });
      return;
    }
    if (password.length < 6) {
      toast({
        description: "Password should be atleast 6 characters long !",
        variant: "destructive",
      });
      return;
    }
    try {
      setLoading(true);
      let name = firstName + " " + lastName;
      const res = await registerUser({
        name,
        email,
        password,
      });
      if (!res.success) {
        setLoading(false);
        toast({
          description: res.message,
        });
      }
      if (res.success) {
        setLoading(false);
        toast({
          description: res.message + " Now login please !",
        });
        router.push("/authentication/login");
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
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="first-name">First name</Label>
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            id="first-name"
            placeholder="Shafiqul Hasan"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="last-name">Last name</Label>
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            id="last-name"
            placeholder="Rasel"
            required
          />
        </div>
      </div>
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
        <Label htmlFor="password">Password</Label>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Confirm Password</Label>
        <Input
          value={repassword}
          onChange={(e) => setRepassword(e.target.value)}
          id="password"
          type="password"
        />
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="w-full  hover:text-white bg-[#FFC700]"
      >
        {loading ? (
          <TailSpin
            visible={true}
            height="30"
            width="30"
            color="#ddd"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          "Create an account"
        )}
      </Button>
    </form>
  );
};

export default EmailRegister;
