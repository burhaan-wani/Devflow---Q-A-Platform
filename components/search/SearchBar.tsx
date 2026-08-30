"use client";

import { deleteKeysFromQueryString, formQueryString } from "@/lib/searchQuery";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {
  route: string;
  placeholder: string;
  children: React.ReactNode;
}

const SearchBar = ({ placeholder, route, children }: Props) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const delayDebounceFN = setTimeout(() => {
      if (searchQuery) {
        const path = formQueryString({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });
        router.push(path, { scroll: false });
      } else {
        if (pathname === route) {
          const path = deleteKeysFromQueryString({
            params: searchParams.toString(),
            queryKeys: ["query"],
          });
          router.push(path, { scroll: false });
        }
      }
    }, 300);
    return () => clearTimeout(delayDebounceFN);
  }, [searchQuery]);

  return (
    <div className="flex bg-gray-800 px-3 py-5 rounded-lg space-x-3">
      {children}
      <input
        className="w-full border-none outline-none bg-transparent text-white placeholder:text-gray-400"
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
