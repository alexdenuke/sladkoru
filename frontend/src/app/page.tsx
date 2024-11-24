// import Image from "next/image";
import React from "react";
import MainSwiper from "../components/swiper/MainSwiper";
import PopularProductSwiper from "@/components/swiper/PopularProductsSlider";
import ProductInfo from "@/components/custom/productInfo/ProductInfo";

export default function Home() {
  return (
    <div className="my-container ">
      <section className="mb-16">
        <MainSwiper />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold">Часто заказывают</h2>
        <PopularProductSwiper />
      </section>
      <section>
        <h2>Пахлава</h2>
        <ProductInfo />
      </section>
    </div>
  );
}
