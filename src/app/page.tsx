"use client";
import UserButton from "@/components/user-button";
import { SessionProvider } from "next-auth/react";
import React from "react";

const Home = () => {
  return (
    <div>
      <SessionProvider>
        <UserButton />
      </SessionProvider>
    </div>
  );
};

export default Home;
