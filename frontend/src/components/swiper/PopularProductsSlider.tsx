'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const PopularProductSwiper = () => {
  return (
    <Swiper
      className="h-60"
      spaceBetween={20}
      breakpoints={{
        // Когда ширина окна меньше 640px
        0: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
        // Когда ширина окна больше или равна 640px
        768: {
          slidesPerView: 3,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="bg-slate-500 "></SwiperSlide>
      <SwiperSlide className="bg-red-800 "></SwiperSlide>
      <SwiperSlide className="bg-emerald-700 "></SwiperSlide>
      <SwiperSlide className="bg-emerald-700 "></SwiperSlide>
      <SwiperSlide className="bg-emerald-700 "></SwiperSlide>
      <SwiperSlide className="bg-emerald-700 "></SwiperSlide>
    </Swiper>
  );
};

export default PopularProductSwiper;
