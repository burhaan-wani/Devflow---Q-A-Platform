"use client";

import { SheetClose } from "@/components/ui/sheet";
import { SideBarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathname = usePathname();
  const userId = 1;
  return (
    <>
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
            <p
              className={cn(
                "text-lg",
                isActive ? "font-bold" : "",
                !isMobileNav && "hidden",
              )}
            >
              {item.label}
            </p>
          </Link>
        );
        return isMobileNav ? (
          <SheetClose key={item.label}>{LinkComponent}</SheetClose>
        ) : (
          <React.Fragment>{LinkComponent}</React.Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;
