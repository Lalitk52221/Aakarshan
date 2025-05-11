"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const UserButton = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loader className="size-6 mr-4 mt-4 float-right animate-spin" />;
  }
  console.log("session", session);
  const avatarFallback = session?.user?.name?.charAt(0).toUpperCase();
  const handleSignOut = async () => {
    await signOut({
      redirect: false,
    });
    router.push("/");
  };

  return (
    <div>
      {session ? (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger className="outline-none relative float-right ">
            <div className="flex gap-4 items-center">
              <div className="text-right leading-0.5 hidden md:flex flex-col">
                <span className="capitalize text-base">
                  {session.user?.name}
                </span>
                <p className="text-xs text-gray-500">{session.user?.role}</p>
              </div>
              <Avatar className="size-10 hover:opacity-75 transition ">
                <AvatarImage
                  className="size-10 hover:opaticy-75 transition "
                  src={session.user?.image || undefined}
                />
                <AvatarFallback className="bg-sky-900 text-white">
                  {avatarFallback}
                </AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            side="bottom"
            className="w-50 mt-4"
          >
            <DropdownMenuItem className="h-10" onClick={() => handleSignOut()}>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="p4">
          <Button>
            <Link href="sign-in ">Sign-In</Link>
          </Button>
        </div>
      )}{" "}
    </div>
  );
};

export default UserButton;
