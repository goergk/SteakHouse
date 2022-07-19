import React from 'react';
import '../scss/style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Slide } from '../components/slider/index';

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      autoplay={{ disableOnInteraction: false }}
      pagination={{ clickable: true }}
      style={{ width: '100%' }}
    >
      {[1, 2, 3].map((index) => (
        <SwiperSlide key={index}>
          <Slide index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider;