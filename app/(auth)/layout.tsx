import SocialAuthForm from "@/components/forms/social-auth";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen flex justify-center items-center px-6">
      <section className="bg-gray-900 px-4 py-6 rounded-md w-112.5">
        <div className="flex justify-between items-center gap-10">
          <div>
            <h1 className="text-2xl font-bold">Join DevFlow</h1>
            <p className="text-sm text-gray-400">
              To get your questions answered
            </p>
          </div>
          <p className="text-4xl">📚</p>
        </div>
        {children}
        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
