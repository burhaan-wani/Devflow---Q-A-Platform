"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
        redirect: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-5 flex gap-2">
      <Button
        className={"flex-1 py-5 cursor-pointer"}
        onClick={() => handleSignIn("github")}
      >
        <span>Github</span>
      </Button>
      <Button
        className={"flex-1 py-5 cursor-pointer"}
        onClick={() => handleSignIn("google")}
      >
        <span>Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
