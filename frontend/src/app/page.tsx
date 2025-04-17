// import Image from "next/image";
import MainSwiper from '../components/swiper/MainSwiper';
import PopularProductSwiper from '@/components/swiper/PopularProductsSlider';
import ProductCard from '@/components/custom/product/Product';
import Link from 'next/link';
import { slugify } from '@/lib/utils';
// import LeafletMap from "@/components/leaflet/Leaflet";

interface Category {
  id: number;
  name: string;
  products: [];
}

interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  weightOptions: [];
}
export default async function Home() {
  // Запрос к вашему API Nest.js
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories/with-products`, {
    next: { revalidate: 600 }, // ISR: обновление данных каждые 60 секунд
  });
  const categories: Category[] = await res.json();
  console.log('🟢 Категории с товарами:', categories);
  return (
    <div className="my-container ">
      <section className="mb-16"></section>
      {/* <section className="mb-16 ">
        <h2 className="text-2xl font-bold">Часто заказывают</h2>
        <PopularProductSwiper />
      </section> */}
      <section>
        {categories.map((category) => (
          <div key={category.id} className="mb-8 ">
            <h3 id={slugify(category.name)} className="text-xl font-semibold mb-4 scroll-mt-24">
              {category.name}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products.map((product: Product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  slug={product.slug}
                  name={product.name}
                  description={product.description}
                  weightOptions={product.weightOptions}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
      <section>
        <div className="flex">
          <h2 className="basis-6/12">Доставка и оплата в Москве</h2>
          <div className="basis-6/12 h-96">{/* <LeafletMap /> */}</div>
        </div>
      </section>
    </div>
  );
}
