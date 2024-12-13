import Link from "next/link";
import { Separator } from "@/components/ui/separator";
const Footer = () => {
  return (
    <footer className="bg-gray-400 ">
      <div className="my-container flex flex-col items-center text-center">
        <div className="flex flex-col py-5">
          <Link className="mt-4" href="/about">
            О нас
          </Link>
          <Link className="mt-4" href="/about">
            Контакты
          </Link>
          <Link className="mt-4" href="/about">
            Доставка
          </Link>
          <Link className="mt-4" href="/about">
            Бонусная программа
          </Link>
          <Link className="mt-4" href="/about">
            Калорийность и состав
          </Link>
          <Link className="mt-4" href="/about">
            Политика конфиденциальности
          </Link>
          <Link className="mt-4" href="/about">
            Реквизиты
          </Link>
        </div>
        <div className="mr-auto border-y py-5 mx-auto">
          <p className="mb-4 ">
            <span className="font-bold">Телефон:</span> 8(985)878-55-55,
            8(985)887-55-55
          </p>
          <p className="mb-4">
            <span className="font-bold">самовывоз:</span> г. Москва, м.
            Фрунзенская, Комсомольский проспект, 24 стр. 1, Торговый центр
            "К-24"
          </p>
          <p className="mb-4">
            <span className="font-bold">Часы работы:</span> Магазин открыт: с
            10:30 до 21:00
          </p>
        </div>
      </div>
      <div className="my-container">
        <div className="flex justify-between py-5 flex-col items-center">
          <div className="flex mb-4">
            <img className="w-10 ml-5" src="/youtube.svg" alt="" />
            <img className="w-10 ml-5" src="/youtube.svg" alt="" />
            <img className="w-10 ml-5" src="/youtube.svg" alt="" />
          </div>
          <p className="text-center">
            © 2010 - 2024 Sladkoru.ru - all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
