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
