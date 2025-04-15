import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import transliterate from "transliterate";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function slugify(str: string): string {
//   return transliterate(str)
//     .toLowerCase()
//     .replace(/\s+/g, "-")
//     .replace(/[^\w-]+/g, "");
// }

// lib/utils.ts
export function slugify(str: string): string {
  const cyrillicToLatinMap: Record<string, string> = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ъ: "",
    ы: "y",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };

  return str
    .toLowerCase()
    .split("")
    .map((char) => cyrillicToLatinMap[char] || char)
    .join("")
    .replace(/\s+/g, "-") // пробелы на дефисы
    .replace(/[^\w\-]+/g, "") // удалить все кроме букв, цифр, дефисов
    .replace(/\-\-+/g, "-") // двойные дефисы
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
