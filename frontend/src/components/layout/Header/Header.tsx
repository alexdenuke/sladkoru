"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { headerMenu } from "../../../data/headerMenuData";

const Header = () => {
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const stickyPosition = stickyRef.current.getBoundingClientRect().top;
        setIsSticky(stickyPosition <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Основной Header */}
      <header>
        <div className="flex py-4 my-container items-center">
          <div className="flex items-center mr-auto">
            <img className="h-5" src="logo-icon.svg" alt="Logo-icon" />
            <img className="h-5 ml-1" src="logo.svg" alt="Logo" />
          </div>
          {headerMenu.map((item) => (
            <Link
              className="hidden md:block ml-5"
              key={item.id}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="border-t border-b">
          <h1 className="my-h1 text-center">Магазин турецких сладостей</h1>
        </div>
      </header>

      {/* Липкий блок */}
      <div
        ref={stickyRef}
        className={`sticky top-0 z-10 border-b transition-all duration-300 ${
          isSticky ? "bg-yellow-300 shadow-md" : "bg-white"
        }`}
      >
        <div className="my-container flex py-4 overflow-x-auto relative">
          <div
            className={`flex transition-all duration-300  ${
              isSticky ? "ml-[74px]" : "ml-0"
            }`}
          >
            <img
              className={`h-[24px] absolute transition-all duration-300 ${
                isSticky ? "left-0" : "left-[-50px]"
              }`}
              src="logo-icon.svg"
              alt=""
            />
            <Link className="mr-5" href={"/"}>
              Пахлава
            </Link>
            <Link className="mr-5" href={"/"}>
              Лукум
            </Link>
            <Link className="mr-5" href={"/"}>
              Халва
            </Link>
            <Link className="mr-5" href={"/"}>
              Чай
            </Link>
            <Link className="mr-5" href={"/"}>
              Кофе
            </Link>
            <Link className="mr-5" href={"/"}>
              Подарочные наборы
            </Link>
          </div>
          {/* Корзина */}
          <img className="ml-auto hidden md:block" src="cart.svg" alt="Cart" />
        </div>
      </div>
    </>
  );
};

export default Header;
