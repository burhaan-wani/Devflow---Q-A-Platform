import { techMap } from "@/constants/techMap";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDevIconClassName = (name: string): string => {
  if (!name) return "";

  const normalizedKey = name.replaceAll(/[ ._-]/g, "").toLowerCase();

  return techMap[normalizedKey] || "devicon-code-plain";
};

export function getRelativeTimeString(dateInput: Date) {
  const date = new Date(dateInput);
  const now = new Date();

  // Calculate difference in seconds
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  // Handle immediate actions
  if (diffInSeconds < 5) {
    return "just now";
  }

  // Time units in seconds
  const units = [
    { name: "year", seconds: 31536000 },
    { name: "month", seconds: 2592000 },
    { name: "week", seconds: 604800 },
    { name: "day", seconds: 86400 },
    { name: "hour", seconds: 3600 },
    { name: "minute", seconds: 60 },
    { name: "second", seconds: 1 },
  ];

  // Find the appropriate unit
  for (const unit of units) {
    if (diffInSeconds >= unit.seconds) {
      const count = Math.floor(diffInSeconds / unit.seconds);
      const plural = count > 1 ? "s" : "";
      return `created ${count} ${unit.name}${plural} ago`;
    }
  }

  return "just now";
}
