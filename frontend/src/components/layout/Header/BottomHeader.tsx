'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { getCart } from '@/lib/cart';
import CartSheet from '@/components/cart/CartSheet';

const BottomHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [imgWidth, setImgWidth] = useState(0);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const stickyPosition = stickyRef.current.getBoundingClientRect().top;
        setIsSticky(stickyPosition <= 0);
      }
    };

    // ⬅️ вызов сразу при монтировании
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (imgRef.current) {
      const width = imgRef.current.offsetWidth;
      console.log('Image Width: ', width);
      setImgWidth(width); // Записываем ширину в состояние
    }
  }, [imgRef.current]); // Следим за изменением imgRef

  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 z-50 bg-white ${isSticky
        ? 'bg-opacity-85 backdrop-blur-lg shadow-[0px_4px_30px_rgba(6,5,50,0.1)]'
        : 'bg-opacity-100'
        }`}
    >
      <div className="my-container flex overflow-x-auto relative py-4 items-center">
        {isMainPage && (
          <Link className="" href={'/'}>
            <img
              ref={imgRef}
              className={`
                h-6 absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out
                ${isSticky ? 'opacity-100 left-0' : 'opacity-0 pointer-events-none'}
              `}
              style={{
                // position: 'absolute',
                // top: '50%',
                // transform: 'translateY(-50%)',
                // transition: 'left 0.3s ease',
                left: isSticky ? `42px` : `-42px`,
              }}
              src="/logo-icon.svg"
              alt="Лого"
            />
          </Link>
        )}
        {isMainPage ? (
          <>
            <Link
              className={`mr-5 whitespace-nowrap transition-all duration-300 ${isSticky ? 'ml-16' : 'ml-0'
                }`}
              href="#pahlava"
            >
              Пахлава
            </Link>
            <Link className="mr-5 whitespace-nowrap" href={'#lukum'}>
              Лукум
            </Link>
            <Link className="mr-5 whitespace-nowrap" href={'#halva'}>
              Халва
            </Link>
            <Link className="mr-5 whitespace-nowrap" href={'#chay'}>
              Чай
            </Link>
            <Link className="mr-5 whitespace-nowrap" href={'#kofe'}>
              Кофе
            </Link>
          </>
        ) : (
          <Link
            className="ml-4 whitespace-nowrap font-medium bg-black text-white px-4 py-2 rounded transition hover:bg-gray-800"
            href="/"
          >
            Перейти в каталог
          </Link>
        )}
        <CartSheet />
      </div>
    </div>
  );
};

export default BottomHeader;
