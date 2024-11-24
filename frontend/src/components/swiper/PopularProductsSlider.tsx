"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const PopularProductSwiper = () => {
  return (
    <Swiper
      className="h-60"
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="bg-slate-500 "></SwiperSlide>
      <SwiperSlide className="bg-red-800 ">2</SwiperSlide>
      <SwiperSlide className="bg-emerald-700 ">3</SwiperSlide>
      <SwiperSlide className="bg-emerald-700 ">3</SwiperSlide>
      <SwiperSlide className="bg-emerald-700 ">3</SwiperSlide>
      <SwiperSlide className="bg-emerald-700 ">3</SwiperSlide>
    </Swiper>
  );
};

export default PopularProductSwiper;
