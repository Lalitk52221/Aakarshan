"use client";
// Shadcn UI

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

// react-icons

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { TriangleAlert } from "lucide-react";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("Student");
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      role,
    });
    if (res?.ok) {
      router.push("/");
      toast.success("Login Successfull");
    } else if (res?.status === 401) {
      setError("Invalid credentials");
      setPending(false);
    } else {
      setError("Something went wrong");
    }
  };
  const handleProvider = (
    event: React.MouseEvent<HTMLButtonElement>,
    value: "github" | "google"
  ) => {
    event.preventDefault();
    signIn(value, { callbackUrl: "/" });
  };
  return (
    <div className="h-full flex items-center justify-center bg-[#1b0918] ">
      <Card className="md:h-auto w-[80%] sm:w-[420px] p-4 sm:p-8 ">
        <CardHeader>
          <CardTitle className="text-center">Sign In</CardTitle>
          <CardDescription className="text-sm text-center text-accent-foreground">
            Use Email and Services to sign in
          </CardDescription>
        </CardHeader>
        {!!error && (
          <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6 ">
            <TriangleAlert />
            <p>{error}</p>
          </div>
        )}
        <CardContent className="px-2 sm:px-6 ">
          <form onSubmit={handleSubmit} className="space-y-3">
            <select
              id="role"
              disabled={pending}
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Admin">Admin</option>
            </select>
            <Input
              type="email"
              disabled={pending}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
            <Input
              type="password"
              disabled={pending}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />

            <Button
              className="w-full"
              size={"lg"}
              variant="default"
              type="submit"
              disabled={pending}
            >
              Continue
            </Button>
            <Separator />
            <div className="flex my-2 justify-evenly mx-auto items-center">
              <Button
                disabled={false}
                onClick={(e) => handleProvider(e, "google")}
                variant="outline"
                size="lg"
                className="bg-slite-300 hover:bg-slate-400 hover:scale-110 "
              >
                <FcGoogle className="size-8 left-2.5 top-2.5" />
              </Button>
              <Button
                disabled={false}
                onClick={(e) => handleProvider(e, "github")}
                variant="outline"
                size="lg"
                className="bg-slite-300 hover:bg-slate-400 hover:scale-110 "
              >
                <FaGithub className="size-8 left-2.5 top-2.5" />
              </Button>
            </div>
            <p className="text-center text-sm mt-2 text-muted-foreground">
              Create a new account?
              <Link
                href="sign-up"
                className="text-sky-700 hover:underline  cursor-pointer"
              >
                {" "}
                Sign Up
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
      Sign Up
    </div>
  );
};

export default SignIn;
