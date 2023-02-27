import React, { useState } from 'react';
import { GiClockwork } from 'react-icons/gi';

const CategoryCard = ({ category }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`hover:scale-105 border grid grid-cols-4 px-5 py-5 rounded-lg duration-400 ease-in-out
      bg-gradient-to-r from-blue-50  via-white to-blue-50
      
      ${hover && 'shadow-lg transition duration-400 '}`}
    >
      <GiClockwork
        className={`text-5xl  p-2 rounded-lg transition duration-400 ease-in col-span-1 my-auto ${hover
          ? 'bg-blue-500 text-white '
          : 'bg-blue-100  text-blue-500'
          }`}
      />
      <div className='col-span-3 text-end'>
        <h1 className="text-md font-semibold">{category}</h1>

      </div>
    </div>
  );
};

export default CategoryCard;
