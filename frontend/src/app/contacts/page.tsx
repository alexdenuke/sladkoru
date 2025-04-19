import Image from 'next/image';
import {
  Phone,
  Clock,
  MapPin,
  Coffee,
  Package,
  Gift,
  FileText,
  Leaf,
  ShoppingBag,
} from 'lucide-react';

export default function ContactsPage() {
  return (
    <main className="min-h-screen">
      {/* Store Introduction Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-amber-900 text-center">
            Контакты
          </h1>
          <p className="text-lg text-amber-800 leading-relaxed mb-8">
            Наш магазин находится по адресу{' '}
            <span className="font-semibold">ул. Пушкина, д. 10, Москва</span>. В магазине вы можете
            приобрести весь представленный ассортимент с сайта и многое другое:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start space-x-3">
              <div className="bg-amber-100 p-2 rounded-full">
                <Coffee className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <p className="text-amber-800">Медная посуда</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-amber-100 p-2 rounded-full">
                <Package className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <p className="text-amber-800">Посуда для чайной церемонии</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-amber-100 p-2 rounded-full">
                <Gift className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <p className="text-amber-800">Подарочные упаковки</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-amber-100 p-2 rounded-full">
                <FileText className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <p className="text-amber-800">Подарочная бумага</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-amber-100 p-2 rounded-full">
                <Leaf className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <p className="text-amber-800">Более 50 сортов чая</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-amber-100 p-2 rounded-full">
                <ShoppingBag className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <p className="text-amber-800">
                  Возможность красиво упаковать вашу покупку в подарок
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Block */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-amber-900 text-center">
            Как с нами связаться
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-amber-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-amber-100 p-4 rounded-full mb-4">
                <Phone className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-900">Телефон</h3>
              <p className="text-amber-800">+7 (495) 123-45-67</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-amber-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-amber-100 p-4 rounded-full mb-4">
                <Clock className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-900">Время работы</h3>
              <p className="text-amber-800">Ежедневно с 10:00 до 20:00</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-amber-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-amber-100 p-4 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-900">Адрес</h3>
              <p className="text-amber-800">ул. Пушкина, д. 10, Москва</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Image Placeholder */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-amber-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-amber-900 text-center">
            Как нас найти
          </h2>
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=500&width=1200"
              alt="Карта расположения магазина"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <p className="text-amber-900 font-semibold">Здесь будет карта магазина</p>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-amber-800">
              Мы находимся в центре города, в 5 минутах ходьбы от станции метро "Пушкинская". Вход
              со стороны главной улицы, рядом с кафе "Восток".
            </p>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-amber-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Приходите к нам в гости!
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Мы всегда рады видеть вас в нашем магазине. У нас вы можете не только приобрести наши
            товары, но и попробовать настоящий турецкий кофе или чай, приготовленный по традиционным
            рецептам. Наши консультанты помогут вам выбрать подарок для любого случая и ответят на
            все ваши вопросы.
          </p>
        </div>
      </section>
    </main>
  );
}
