import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useEffect, useState } from 'react'
import Image from "next/image";
import { useCart } from '@/app/hooks/cartContext'


const Cart = () => {
    const { cart, clearCart, updateQuantity } = useCart()

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    // if (cart.length === 0) {
    //     return <p className="p-4">Корзина пуста</p>
    // }
    return (
        <Sheet>
            <SheetTrigger className='ml-auto hidden md:block'>Корзина</SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Количество товаров и общая сумма</SheetTitle>
                    <SheetDescription>
                        Информация (до минимальной суммы доставки итд )
                    </SheetDescription>
                    <div>

                        <ul className="space-y-2">
                            {cart.map((item) => (
                                <li key={`${item.productId}-${item.weightId}`} className="flex justify-between">

                                    <div>
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-sm text-gray-600">{item.weight} г</p>
                                        <p className="text-sm text-gray-700">Количество: {item.quantity}</p>
                                    </div>
                                    <div className="text-right font-bold">
                                        {item.price * item.quantity} ₽
                                    </div>
                                    <div className="flex items-center space-x-2 mt-1">
                                        <button
                                            className="px-2 py-1 bg-gray-200 rounded"
                                            onClick={() => updateQuantity(item.productId, item.weightId, -1)}
                                        >
                                            –
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            className="px-2 py-1 bg-gray-200 rounded"
                                            onClick={() => updateQuantity(item.productId, item.weightId, 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </li>


                            ))}
                        </ul>
                        <div className="mt-4 text-right text-lg font-bold">Итого: {total} ₽</div>

                        <button
                            onClick={clearCart}
                            className="mt-4 w-full bg-red-500 text-white py-2 rounded"
                        >
                            Очистить корзину
                        </button>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}


export default Cart;