import React from "react";
import Category from "./CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

// import required modules

const JobCategories = () => {
  const businessCategory = [
    "Automotive",
    "Business Support & Supplies",
    "Computers & Electronics",
    "Construction & Contractors",
    "Design Agency",
    "Education",
    "Entertainment",
    "Food & Dining",
    "Health & Medicine",
    "Home & Garden",
    "IT Farm",
    "Legal & Financial",
    "Manufacturing, Wholesale",
    "Merchants (Retail)",
    "Miscellaneous",
    "Personal Care & Services",
    "Real Estate",
    "Travel & Transportation",
    "Travel & Transportation",
    "Travel & Transportation",
  ];
  return (
    <div className="lg:px-16 px-6 py-16 ">
      <h1 className="text-3xl font-semibold text-center  ">
        Popular Job Categories
      </h1>
      <p className="text-center font-semibold">
        Total :{businessCategory?.length}{" "}
      </p>
      <div className="lg:grid grid-cols-4 gap-4 mt-8">
        {businessCategory.map((category) => (
          <Category category={category} />
        ))}
      </div>

      {/* <div className='flex justify-center mt-8'> <button className='btn  px-5 bg-blue-200 hover:bg-blue-500 text-blue-500 hover:text-white border-none hover:border-none '>See all Categories</button></div> */}
    </div>
  );
};

export default JobCategories;
