"use client";

import { SideBarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";
import ROUTES from "@/constants/routes";
import { Button } from "../ui/button";

const LeftSideBar = () => {
  const pathname = usePathname();
  const userId = 1;
  return (
    <section className="min-h-screen w-63.75 pt-24 bg-gray-900 px-4 max-sm:hidden flex flex-col justify-between pb-2 border-r">
      <div className="space-y-3">
        {SideBarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          if (item.route === "/profile") {
            if (userId) item.route = `${item.route}/${userId}`;
            else return null;
          }

          const LinkComponent = (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                "flex items-center gap-3 dark:bg-gray-800 px-2 py-4 rounded-md font-spaceGrotesk text-md text-white bg-gray-500",
                isActive && "dark:bg-orange-500 bg-orange-500",
              )}
            >
              <item.logo />
              <p className={cn("text-lg", isActive ? "font-bold" : "")}>
                {item.label}
              </p>
            </Link>
          );
          return (
            <React.Fragment key={item.label}>{LinkComponent}</React.Fragment>
          );
        })}
      </div>
      <div className="flex flex-col gap-2 px-2">
        <Link href={ROUTES.SIGN_UP}>
          <Button
            type="submit"
            className={
              "w-full p-5 bg-orange-500 rounded-md cursor-pointer text-white "
            }
          >
            Sign Up
          </Button>
        </Link>
        <Link href={ROUTES.SIGN_IN}>
          <Button
            type="submit"
            className={
              "w-full p-5 dark:bg-gray-800 bg-gray-400 rounded-md cursor-pointer text-white"
            }
          >
            Sign In
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default LeftSideBar;
