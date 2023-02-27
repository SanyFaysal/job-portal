import React from 'react';
import Category from './CategoryCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

// import required modules

const JobCategories = () => {

  const businessCategory = [
    'Automotive',
    'Business Support & Supplies',
    'Computers & Electronics',
    'Construction & Contractors',
    'Design Agency',
    'Education',
    'Entertainment',
    'Food & Dining',
    'Health & Medicine',
    'Home & Garden',
    'IT Farm',
    'Legal & Financial',
    'Manufacturing, Wholesale, Distribution',
    'Merchants (Retail)',
    'Miscellaneous',
    'Personal Care & Services',
    'Real Estate',
    'Travel & Transportation',
  ];
  return (
    <div className="lg:px-16 px-6 py-16 ">
      <h1 className="text-3xl font-semibold text-center ">
        Popular Job Categories
      </h1>
      <p className="text-center font-semibold">Total  :{businessCategory?.length} </p>
      <div className='lg:block hidden'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {businessCategory.map(category =>

            <SwiperSlide>
              <div className='my-12'>
                <Category category={category} />
              </div>
            </SwiperSlide>

          )}


        </Swiper>
      </div>
      <div className='lg:hidden block'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {businessCategory.map(category =>

            <SwiperSlide>
              <div className='my-12'>
                <Category category={category} />
              </div>
            </SwiperSlide>

          )}


        </Swiper>
      </div>



      {/* <div className='flex justify-center mt-8'> <button className='btn  px-5 bg-blue-200 hover:bg-blue-500 text-blue-500 hover:text-white border-none hover:border-none '>See all Categories</button></div> */}
    </div>
  );
};

export default JobCategories;
