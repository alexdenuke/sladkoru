"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useCart } from '@/context/cartContext'

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    userphone: z.string().min(2, {
        message: "Userphone must be at least 2 characters.",
    }),
    promocode: z.string().min(0, {
        message: "Promocode must be at least 2 characters.",
    }),
    address: z.string().min(2, {
        message: "Address must be at least 2 characters.",
    }),
})

export function Checkout() {

    const { cart } = useCart()
    console.log("Корзина", cart)

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            userphone: "",
            promocode: "",
            address: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div className="my-container">
            <div className="flex flex-col md:flex-row pt-10 pb-10 gap-10">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:pr-5 bg-white rounded-lg p-5 shadow-sm border">
                        <FormField

                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem className="mw-96 md:w-96 pt-5 md:pt-0">
                                    <FormLabel>Имя</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Введите ваше имя" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Обязательное поле
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                        <FormField
                            control={form.control}
                            name="userphone"
                            render={({ field }) => (
                                <FormItem className="mw-96 md:w-96">
                                    <FormLabel>Телефон</FormLabel>
                                    <FormControl>
                                        <Input placeholder="введите ваш номер" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Обязательное поле
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem className="mw-96 md:w-96">
                                    <FormLabel>Адрес доставки</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Введите ваш адрес доставки" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="promocode"
                            render={({ field }) => (
                                <FormItem className="mw-96 md:w-96">
                                    <FormLabel>Промокод</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Введите промокод" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>

                <div className="bg-white rounded-lg p-5 shadow-sm border -order-1 md:order-1 md:ml-auto ">
                    <h2 className="text-lg font-medium">Состав Заказа:</h2>

                    <div className="space-y-4">
                        {cart.map((item) => (
                            <div key={`${item.productId} ${item.weightId}`} className="pb-3 border-b border-gray-100 last:border-0">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-medium line-clamp-2 pr-4">{item.name}</h3>
                                    <span className="whitespace-nowrap">{item.price * item.quantity} ₽</span>
                                </div>

                                <div className="text-sm text-gray-500 mt-1">
                                    {item.weight} Гр • Количество: {item.quantity}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between   items-center pt-4 mt-2">
                        <span className="font-semibold text-lg">Итого:</span>
                        <span className="text-lg font-bold">{total} ₽</span>
                    </div>
                </div>

                {/* <div className="md:ml-auto -order-1 md:order-1">
                    <p>Состав Заказа:</p>
                    {cart.map((item) => (
                        <div key={`${item.productId}-${item.weightId}`} className="flex justify-between">
                            <div>
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm text-gray-600">{item.weight} г</p>
                                <p className="text-sm text-gray-700">Количество: {item.quantity}</p>
                            </div>
                            <div className="text-right font-bold">
                                {item.price * item.quantity} ₽
                            </div>
                        </div>
                    ))}
                    <p>Итого: {total}</p>
                </div> */}
            </div>

        </div>

    )
}


export default Checkout;