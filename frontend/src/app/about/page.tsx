"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Coffee, Leaf, Package, Clock } from "lucide-react"

export default function AboutUs() {
    const animatedImageRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(animatedImageRef, { once: true, amount: 0.3 })

    return (
        <main className="min-h-screen">
            {/* Company Introduction Block */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-amber-50 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-amber-900">О нас</h1>
                    <p className="text-lg text-amber-800 leading-relaxed">
                        Добро пожаловать в мир настоящих турецких сладостей! Наша компания sladkoru специализируется на производстве
                        аутентичной пахлавы, локума и других восточных десертов. Мы привозим лучшие ингредиенты прямо из Турции,
                        чтобы создавать для вас неповторимые вкусовые ощущения. Наши мастера обучались искусству приготовления
                        сладостей у лучших кондитеров Стамбула и теперь делятся с вами результатами своего мастерства.
                    </p>
                </div>
            </section>

            {/* Company Advantages Block */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-amber-900 text-center">
                        Наши преимущества
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center p-6 bg-amber-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Leaf className="w-12 h-12 text-green-600 mb-4" />
                            <p className="text-amber-800">Используем только натуральные ингредиенты для нашей пахлавы.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-amber-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Coffee className="w-12 h-12 text-amber-700 mb-4" />
                            <p className="text-amber-800">
                                Готовим по старинным турецким рецептам, передающимся из поколения в поколение.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-amber-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Package className="w-12 h-12 text-amber-600 mb-4" />
                            <p className="text-amber-800">Сотрудничаем с лучшими поставщиками кофе прямо из Турции.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-amber-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Clock className="w-12 h-12 text-amber-800 mb-4" />
                            <p className="text-amber-800">У нас свежайший чай и подарочные наборы, которые удивят любого.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Delivery Information Block */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-amber-100">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/3 flex justify-center">
                        <Image
                            src="/logo-icon.svg"
                            alt="Доставка"
                            width={200}
                            height={200}
                            className="rounded-full bg-white p-4"
                        />
                    </div>
                    <div className="md:w-2/3">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-amber-900">Доставка</h2>
                        <p className="text-lg text-amber-800 leading-relaxed">
                            Мы осуществляем доставку в кратчайшие сроки, а наши операторы реагируют моментально. Наша курьерская
                            служба работает по всему городу и гарантирует, что ваш заказ прибудет в идеальном состоянии и точно в
                            срок. Мы бережно упаковываем каждый продукт, чтобы сохранить его свежесть и вкусовые качества.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Block */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-amber-700 text-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">Почему sladkoru?</h2>
                    <p className="text-lg leading-relaxed text-center">
                        Мы на рынке с 2010 года и знаем лучших поваров турецких сладостей. За эти годы мы завоевали доверие тысяч
                        клиентов благодаря неизменно высокому качеству нашей продукции, внимательному обслуживанию и индивидуальному
                        подходу к каждому заказу. Наша миссия — познакомить вас с богатством и разнообразием турецкой кулинарной
                        традиции.
                    </p>
                </div>
            </section>

            {/* Animated Image Block */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden" ref={animatedImageRef}>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-amber-900">
                            Наши сладости — ваше наслаждение
                        </h2>
                        <p className="text-lg text-amber-800 leading-relaxed">
                            Каждый кусочек нашей пахлавы, каждая чашка ароматного турецкого кофе — это маленькое путешествие в Турцию.
                            Мы гордимся тем, что можем предложить вам аутентичные вкусы и ароматы, которые перенесут вас на улочки
                            Стамбула и побережье Босфора. Попробуйте наши сладости однажды, и вы станете нашим постоянным клиентом!
                        </p>
                    </div>
                    <motion.div
                        className="md:w-1/2"
                        initial={{ x: 200, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Image
                            src="/pistachio.jpg"
                            alt="Турецкие сладости"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
