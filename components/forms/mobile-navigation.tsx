import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";

import { Menu } from "lucide-react";
import Link from "next/link";
import NavLinks from "../navigation/navbar/NavLinks";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className={"sm:hidden"}>
        <Menu className="text-white dark:text-gray-400 cursor-pointer " />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="flex flex-col justify-between h-full">
          <div>
            <h1 className="text-2xl font-bold">
              Dev<span className="text-orange-400">Flow</span>
            </h1>
            <div className="mt-15 flex flex-col justify-between gap-1 h-full px-2">
              <NavLinks isMobileNav />
            </div>
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
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
