// import Image from "next/image";
import MainSwiper from "../components/swiper/MainSwiper";
import PopularProductSwiper from "@/components/swiper/PopularProductsSlider";
import ProductCard from "@/components/custom/productCard/ProductCard";
import LeafletMap from "@/components/leaflet/Leaflet";

interface Category {
  id: number;
  name: string;
  products: [];
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  weight: number;
}
export default async function Home() {
  // Запрос к вашему API Nest.js
  const res = await fetch(
    "http://localhost:5000/api/categories/with-products",
    {
      next: { revalidate: 60 }, // ISR: обновление данных каждые 60 секунд
    }
  );
  const categories: Category[] = await res.json();
  console.log(categories[0].products);
  return (
    <div className="my-container ">
      <section className="mb-16">
        <MainSwiper />
      </section>

      <section className="mb-16 ">
        <h2 className="text-2xl font-bold">Часто заказывают</h2>
        <PopularProductSwiper />
      </section>
      <section>
        {categories.map((category) => (
          <div key={category.id} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{category.name}</h3>

            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {category.products.map((product: Product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  weight={product.weight}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
      <section>
        <div className="flex">
          <h2 className="basis-6/12">Доставка и оплата в Москве</h2>
          <div className="basis-6/12 h-96">
            <LeafletMap />
          </div>
        </div>
      </section>
    </div>
  );
}
