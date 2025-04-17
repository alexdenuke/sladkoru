'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { headerMenu } from '../../../data/headerMenuData';
import MainSwiper from '@/components/swiper/MainSwiper';

// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Header = () => {
  return (
    <>
      <header>
        <div className="flex py-4 my-container items-center">
          <div className="flex items-center mr-auto">
            <Link className="" href={'/'}>
              <img className="h-5" src="/logo-icon.svg" alt="Logo-icon" />
            </Link>
            <Link className="" href={'/'}>
              <img className="h-5 ml-1" src="/logo.svg" alt="Logo" />
            </Link>
          </div>

          <Sheet>
            <SheetTrigger>
              <img className="md:hidden" src="/burger.svg" alt="Меню Бургер" />
            </SheetTrigger>
            <SheetContent side={'left'}>
              <SheetHeader>
                <SheetTitle>Меню сайта</SheetTitle>
                <SheetDescription>
                  Приятных покупок

                </SheetDescription>
                <div className='flex flex-col gap-4'>
                  <Link href={'/about'}>О нас</Link>
                  <Link href={'/about'}>Оплата</Link>
                  <Link href={'/about'}>Доставка</Link>
                  <Link href={'/about'}>Контакты</Link>
                  <Link href={'#'}>8(999)999-99-99</Link>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          {headerMenu.map((item) => (
            <Link className="hidden md:block ml-5" key={item.id} href={item.href}>
              {item.name}
            </Link>
          ))}
        </div>
        {/* <div className="my-container">
          <MainSwiper />
        </div> */}

        <div className="">
          {/* <h1 className="my-h1 text-center">Магазин турецких сладостей</h1> */}
        </div>
      </header>
    </>
  );
};

export default Header;
