import LeftSideBar from "@/components/navigation/LeftSideBar";
import Navbar from "@/components/navigation/navbar";
import RightSideBar from "@/components/navigation/RightSideBar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="flex relative top-0">
        <LeftSideBar />
        <section className="pt-28 px-8 bg-gray-900 min-h-screen w-4xl scroll-auto ml-64">
          {children}
        </section>
        <RightSideBar />
      </div>
    </div>
  );
};

export default RootLayout;
