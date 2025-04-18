'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { slides } from '@/data/mainSwiperData';

// Import Swiper styles
import 'swiper/css';

const MainSwiper = () => {
  slides.map((slide) => console.log(slide.bgc));
  return (
    <Swiper
      className="h-60"
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide className="h-full" key={slide.id}>
          <div key={slide.id} className={`${slide.bgi} h-full w-full rounded-xl`}></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSwiper;
