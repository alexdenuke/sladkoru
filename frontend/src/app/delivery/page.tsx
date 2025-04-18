'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Truck, MapPin, Home, Phone, User, MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  phone: string;
  comment?: string;
};

export default function DeliveryPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    reset();

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <main className="min-h-screen">
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-amber-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-amber-900">
            Доставка
          </h1>
          <p className="text-lg text-amber-800 leading-relaxed">
            Наша компания осуществляет доставку курьером по городу, а также в другие города через
            сторонние службы доставки. Также доступен самовывоз.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-amber-900 text-center">
            Способы доставки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-amber-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Truck className="w-16 h-16 text-amber-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-amber-900">
                Курьерская доставка по городу
              </h3>
              <p className="text-amber-800">
                Доставка осуществляется в день заказа или на следующий день. Наши курьеры доставят
                ваш заказ прямо к вашей двери.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-amber-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="w-16 h-16 text-amber-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-amber-900">
                Доставка в другие города
              </h3>
              <p className="text-amber-800">
                Мы отправляем заказы в другие города через надежные службы доставки. Сроки доставки
                зависят от вашего местоположения.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-amber-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Home className="w-16 h-16 text-amber-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-amber-900">Самовывоз</h3>
              <p className="text-amber-800">
                Вы можете забрать свой заказ самостоятельно из нашего магазина. Это позволит вам
                сэкономить на доставке.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-amber-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Оператор"
              width={200}
              height={200}
              className="rounded-full bg-white p-4"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-amber-900">
              Наши операторы
            </h2>
            <p className="text-lg text-amber-800 leading-relaxed">
              Наши операторы принимают заказ и созваниваются с клиентом в день обращения, чтобы
              уточнить детали и подтвердить заказ. Мы гарантируем вежливое и профессиональное
              обслуживание, а также оперативное решение любых вопросов, связанных с вашим заказом.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-amber-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Оставьте заявку, и мы вам перезвоним
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Заполните форму ниже, и наш менеджер свяжется с вами в ближайшее время для уточнения
            деталей заказа и ответа на все ваши вопросы. Мы ценим ваше время и стремимся обеспечить
            максимально удобный процесс заказа.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-amber-900 flex items-center"
              >
                <User className="w-4 h-4 mr-2" />
                Имя *
              </label>
              <input
                id="name"
                type="text"
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                  errors.name ? 'border-red-500' : 'border-amber-300'
                }`}
                placeholder="Введите ваше имя"
                {...register('name', { required: 'Имя обязательно для заполнения' })}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-amber-900 flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Телефон *
              </label>
              <input
                id="phone"
                type="tel"
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                  errors.phone ? 'border-red-500' : 'border-amber-300'
                }`}
                placeholder="+7 (___) ___-__-__"
                {...register('phone', {
                  required: 'Телефон обязателен для заполнения',
                  pattern: {
                    value: /^(\+7|8)[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
                    message: 'Пожалуйста, введите корректный номер телефона',
                  },
                })}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="comment"
                className="text-sm font-medium text-amber-900 flex items-center"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Комментарий
              </label>
              <textarea
                id="comment"
                rows={4}
                className="w-full px-4 py-2 border border-amber-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Дополнительная информация по заказу"
                {...register('comment')}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Отправить заявку
            </button>

            {isSubmitted && (
              <div className="p-4 bg-green-100 text-green-800 rounded-md">
                Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
