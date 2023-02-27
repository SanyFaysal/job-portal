import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import ArticleCard from '../articales/ArticleCard';

import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";


const Testimonials = () => {
  return (
    <div className="lg:px-16  px-6 mt-16">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Pagination]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
      >
        <SwiperSlide>
          <ArticleCard />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard />
        </SwiperSlide>


      </Swiper>
    </div>
  );
};

export default Testimonials;
