import React, { useState } from "react";
import { GiClockwork } from "react-icons/gi";

const CategoryCard = ({ category }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`  p-4 cursor-pointer
      bg-slate-50 h-fit  border-sky-100 border-2  rounded-lg
      
      `}
    >
      {/* <GiClockwork
        className={`text-5xl  p-2 rounded-lg transition duration-400 ease-in col-span-1 my-auto ${hover
          ? 'bg-blue-500 text-white '
          : 'bg-blue-100  text-blue-500'
          }`}
      /> */}
      <div className="col-span-3  text-center">
        <h1 className="text-md font-semibold">{category}</h1>
      </div>
    </div>
  );
};

export default CategoryCard;
