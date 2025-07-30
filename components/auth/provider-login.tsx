"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function ProviderLogin() {
  const router = useRouter();

  const handleProviderLogin = async (provider: "google" | "github") => {
    const res = await signIn(provider, {
      redirect: false,
      callbackUrl: "/",
    });
    if (res?.url) {
      router.push(res.url);
    }
  };
  return (
    <div className="w-full flex flex-col gap-4">
      <Button variant={"outline"} onClick={() => handleProviderLogin("google")}>
        <p className="gap-3 flex items-center">
          Login with google
          <FcGoogle />
        </p>
      </Button>
      <Button variant={"outline"} onClick={() => handleProviderLogin("github")}>
        <p className="gap-3 flex items-center">
          Login with github
          <FaGithub />
        </p>
      </Button>
    </div>
  );
}

export default ProviderLogin;
