import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import transliterate from "transliterate";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




export function slugify(str: string): string {
  return transliterate(str)
    .toLowerCase()
    .replace(/\s+/g, "-") 
    .replace(/[^\w-]+/g, ""); 
}