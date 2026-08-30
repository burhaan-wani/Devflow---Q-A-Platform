import LeftSideBar from "@/components/navigation/LeftSideBar";
import Navbar from "@/components/navigation/navbar";
import RightSideBar from "@/components/navigation/RightSideBar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <LeftSideBar />
        <section className="h-full pt-24 pl-10 bg-gray-900 min-h-screen w-4xl">
          {children}
        </section>
        <RightSideBar />
      </div>
    </div>
  );
};

export default RootLayout;
