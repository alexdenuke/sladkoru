import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/cartContext';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const CartSheet = () => {
  const { cart, clearCart, updateQuantity, cartCount } = useCart();

  // if (cartCount === 0) return null

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // if (cart.length === 0) {
  //     return <p className="p-4">Корзина пуста</p>
  // }
  return (
    <Sheet>
      <SheetTrigger asChild className="">
        <Button
          className="z-50 shadow-lg flex items-center gap-2 px-4 py-6 ml-auto hidden md:flex"
          size="lg"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>Cart ({cartCount})</span>
        </Button>

        {/* Корзина ({cartCount}) */}
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{/* Количество товаров и общая сумма */}</SheetTitle>
          <SheetDescription>
            {/* Информация (до минимальной суммы доставки итд ) */}
          </SheetDescription>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="px-4 py-6">
              <h2 className="text-xl font-semibold">Количество товаров и общая сумма</h2>
              <p className="text-sm text-muted-foreground mt-1">
                {/* В корзине {totalItems}{" "}
                                {totalItems === 1 ? "товар" : totalItems >= 2 && totalItems <= 4 ? "товара" : "товаров"} на сумму {totalPrice}{" "}
                                ₽ */}
              </p>
            </div>

            <Separator />

            {/* Scrollable Cart Items */}
            <ScrollArea className="flex-1 px-4">
              <div className="py-4 space-y-4">
                {cart.map((item) => (
                  <div key={`${item.productId} ${item.weightId}`} className="flex flex-col">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium line-clamp-2 pr-4">{item.name}</h3>
                      <span className="font-bold whitespace-nowrap">{item.price} ₽</span>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <div className="text-sm text-muted-foreground">{`${item.weight} Гр`}</div>

                      {/* Quantity Controls */}
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(item.productId, item.weightId, -1)}
                          className="h-8 w-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                          aria-label="Уменьшить количество"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="mx-3 min-w-[20px] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.weightId, 1)}
                          className="h-8 w-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                          aria-label="Увеличить количество"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>

                    <Separator className="mt-4" />
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Footer with Total and Checkout Button */}
            <div className="p-4 border-t mt-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Итого:</span>
                <span className="text-xl font-bold">{total} ₽</span>
              </div>
              <a
                href="/checkout"
                className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-4 rounded text-center transition-colors"
              >
                Оформить
              </a>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
