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
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { TriangleAlert } from "lucide-react";
import { signIn } from "next-auth/react";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Student",
  });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";
    const res = await fetch(`${API_BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      setPending(false);

      toast.success(data.message);
      router.push("/sign-in");
    } else if (res.status == 400) {
      setPending(false);
      setError(data.message);
    } else if (res.status == 500) {
      setPending(false);
      setError(data.message);
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
          <CardTitle className="text-center">Sign Up</CardTitle>
          <CardDescription className="text-sm text-center text-accent-foreground">
            Use Email and Services to create account
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
            {/* <label htmlFor="role" className="block text-sm font-medium text-gray-700"> Select Your Role</label> */}
            <select
              id="role"
              disabled={pending}
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="Student">Student</option>
              <option value = 'Teacher'>Teacher</option>
              <option value="Admin">Admin</option>
            </select>
            <Input
              type="text"
              disabled={pending}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              placeholder="Full Name"
            />
            <Input
              type="email"
              disabled={pending}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              placeholder="Email"
            />
            <Input
              type="password"
              disabled={pending}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              placeholder="Password"
            />
            <Input
              type="password"
              disabled={pending}
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
              required
              placeholder="Confirm Password"
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
                onClick={() => {}}
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
              Already have an account?
              <Link
                href="sign-in"
                className="text-sky-700 hover:underline  cursor-pointer"
              >
                {" "}
                Sign In
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
      Sign Up
    </div>
  );
};

export default SignUp;
