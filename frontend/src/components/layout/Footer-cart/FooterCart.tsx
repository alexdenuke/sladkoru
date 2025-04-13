"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useCart } from '@/context/cartContext'
import { ShoppingCart, X, Plus, Minus } from "lucide-react"
const FooterCart = () => {
  const { cart, clearCart, updateQuantity } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Disable scrolling on body when drawer is open
      document.body.style.overflow = "hidden"
    } else {
      // Re-enable scrolling when drawer is closed
      document.body.style.overflow = "auto"
    }

    // Cleanup function to ensure scroll is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])
  return (
    // <div>
    //   <Link className="fixed bottom-6 right-6 md:hidden block" href="#">
    //     <div className="bg-white rounded-full shadow-lg p-4">
    //       <img className="h-8" src="/cart.svg" alt="" />
    //     </div>
    //   </Link>
    // </div>
    <>
      {/* Floating Cart Button - only visible on mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 md:hidden bg-white text-black h-14 w-14 rounded-full shadow-lg flex items-center justify-center z-50"
        aria-label="Open cart"
      >
        <ShoppingCart className="h-6 w-6" />
      </button>

      {/* Cart Drawer */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 h-3/4 bg-white z-50 shadow-lg rounded-t-3xl transform transition-transform duration-300 ease-in-out md:hidden overflow-y-scroll",
          isOpen ? "translate-y-0" : "translate-y-full",
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Ваша корзина</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close cart">
            <X className="h-5 w-5" />
          </Button>
        </div>
        {/* Cart Items */}
        {cart.map((item) => (
          <div key={`${item.productId}-${item.weightId}`} className="flex items-center gap-4 py-4 border-b">
            <div className="h-16 w-16 bg-gray-100 rounded-md flex-shrink-0">
              <Image src={"/hero.jpg"} alt={item.name} width={100} height={100} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 pr-4">
              <h3 className="font-medium">{`${item.name} `}<span className='whitespace-nowrap'></span></h3>
              <p className="text-sm text-gray-500">{item.weight} гр</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => updateQuantity(item.productId, item.weightId, -1)}
                  className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-3 w-3" />
                </button>
                <span className="mx-3 min-w-[20px] text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.productId, item.weightId, 1)}
                  className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-3 w-3" />
                </button>

                {/* Item Total */}
                <span className="ml-auto font-medium">&#8381;{item.price}</span>
              </div>
            </div>
          </div>
        ))}


        {/* Checkout Button */}
        <div className="p-4 border-t bg-white">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Общая сумма:</span>
            <span className="font-bold">{total}</span>
          </div>
          <Link href="/checkout">
            <button className="w-full bg-black text-white py-3 rounded-md ">Оформление</button>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}

export default FooterCart
