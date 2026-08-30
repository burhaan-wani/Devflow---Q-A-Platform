import Link from "next/link";
import Theme from "./Theme";
import MobileNav from "@/components/forms/mobile-navigation";

const Navbar = () => {
  return (
    <div className="p-5 fixed z-50 bg-gray-900 flex justify-between items-center w-full  text-accent-foreground border-b">
      <Link href={"/"} className="flex gap-0.5 font-bold text-xl">
        <span className="text-orange-800">Dev</span>
        Flow
      </Link>

      <p className="max-sm:hidden visible text-white">Search Bar</p>
      <div className="flex items-center gap-2.5">
        <Theme />
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
