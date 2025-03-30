import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import Image from "next/image";

const Cart = () => {
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
                        <div className='flex'>
                            <Image src="/75527.jpg" width={100} height={100} alt="Cart" />
                            <div className='ml-5'>
                                <p>Название</p>
                                <p>Описание</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <p className='mr-auto'>Стоимость</p>
                            <div className='flex'>
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}


export default Cart;