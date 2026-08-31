"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { deleteKeysFromQueryString, formQueryString } from "@/lib/searchQuery";

const filters = [
  { name: "Newest", value: "newest" },
  { name: "Popular", value: "popular" },
  { name: "Unanswered", value: "unanswered" },
  { name: "Recommended", value: "recommended" },
];
const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filterQuery = searchParams.get("filter") || "";
  const [urlFilter, setUrlFilter] = useState(filterQuery);
  const [activeFilter, setActiveFilter] = useState("");

  const handleFilterChange = (filter: string) => {
    let path = "";
    setActiveFilter(filter);

    if (filter == activeFilter) {
      setActiveFilter("");

      path = deleteKeysFromQueryString({
        params: searchParams.toString(),
        queryKeys: ["filter"],
      });

      router.push(path, { scroll: false });
    } else {
      setActiveFilter(filter);

      path = formQueryString({
        params: searchParams.toString(),
        key: "filter",
        value: filter.toLowerCase(),
      });

      router.push(path, { scroll: false });
    }
  };

  return (
    <div className="mt-5 space-x-5">
      {filters.map((filter) => (
        <Button
          key={filter.name}
          className={cn(
            "px-3 py-5 bg-gray-800 text-gray-200 hover:bg-gray-800 cursor-pointer",
            activeFilter === filter.value
              ? "bg-orange-500 hover:bg-orange-500 text-white"
              : "",
          )}
          onClick={() => handleFilterChange(filter.value)}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default Filter;
