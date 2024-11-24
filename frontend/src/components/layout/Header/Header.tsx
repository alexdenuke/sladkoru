// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
import Link from "next/link";

import { headerCatalog, headerMenu } from "../../../data/headerMenuData";

const Header = () => {
  return (
    <header className="">
      <div className="flex py-4 my-container items-center">
        <div className="flex items-center mr-auto">
          <img className="h-5 " src="logo-icon.svg" alt="Logo-icon" />
          <img className="h-5 ml-1 " src="logo.svg" alt="Logo" />
        </div>
        {headerMenu.map((item) => (
          <Link className="hidden md:block ml-5" key={item.id} href={item.href}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className=" border-t border-b ">
        <h1 className="my-container h1 text-center font-bold">
          Интернет магазин турецких сладостей
        </h1>
      </div>

      <div className="my-container flex py-4">
        {headerCatalog.map((item) => (
          <Link className="mr-5" key={item.id} href={item.href}>
            {item.name}
          </Link>
        ))}
        <img className="ml-auto" src="cart.svg" alt="Cart" />
      </div>
    </header>
  );
};

export default Header;
