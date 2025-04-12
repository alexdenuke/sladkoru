'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { getCart } from '@/lib/cart'
import CartSheet from '@/components/cart/CartSheet'
const BottomHeader = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [imgWidth, setImgWidth] = useState(0)
  const stickyRef = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const stickyPosition = stickyRef.current.getBoundingClientRect().top
        setIsSticky(stickyPosition <= 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (imgRef.current) {
      const width = imgRef.current.offsetWidth
      console.log('Image Width: ', width)
      setImgWidth(width) // Записываем ширину в состояние
    }
  }, [imgRef.current]) // Следим за изменением imgRef

  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 z-50 bg-white ${isSticky
        ? 'bg-opacity-85 backdrop-blur-lg shadow-[0px_4px_30px_rgba(6,5,50,0.1)]'
        : 'bg-opacity-100'
        }`}
    >
      <div className="my-container flex overflow-x-auto relative py-4 items-center">
        <Link className="" href={'/'}>
          <img
            ref={imgRef}
            className="h-6"
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              transition: 'left 0.3s ease',
              left: isSticky ? `${imgWidth}px` : `${-imgWidth}px`,
            }}
            src="/logo-icon.svg"
            alt="Лого"
          />
        </Link>

        <Link
          className={`mr-5 whitespace-nowrap transition-all duration-300 ${isSticky ? 'ml-16' : 'ml-0'
            }`}
          href="/"
        >
          Пахлава
        </Link>
        <Link className="mr-5 whitespace-nowrap" href={'/'}>
          Лукум
        </Link>
        <Link className="mr-5 whitespace-nowrap" href={'/'}>
          Халва
        </Link>
        <Link className="mr-5 whitespace-nowrap" href={'/'}>
          Чай
        </Link>
        <Link className="mr-5 whitespace-nowrap" href={'/'}>
          Кофе
        </Link>
        <Link className="mr-5 whitespace-nowrap" href={'/'}>
          Подарочные наборы
        </Link>
        <CartSheet />
        {/* <img className="ml-auto hidden md:block" src="cart.svg" alt="Cart" /> */}
        {/* <button className=" rounded-3xl py-2 ml-auto text-black hidden md:block ">
          Корзина
        </button> */}

        {/* 
        <Link className="ml-auto hidden md:block" href={'/cart'}>Корзина</Link> */}
      </div>
    </div>
  )
}

export default BottomHeader
