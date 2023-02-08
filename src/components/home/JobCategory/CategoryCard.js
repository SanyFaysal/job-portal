import React, { useState } from 'react';
import { GiClockwork } from 'react-icons/gi';

const CategoryCard = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`border flex justify-between items-center px-5 py-5 rounded-lg
      bg-gradient-to-r from-blue-50  via-white to-green-50
      
      ${hover && 'shadow-lg transition duration-400 '}`}
    >
      <GiClockwork
        className={`text-5xl  p-2 rounded-lg transition duration-400 ease-in ${
          hover
            ? 'bg-blue-500 text-white scale-110'
            : 'bg-blue-100  text-blue-500'
        }`}
      />
      <div>
        <h1 className="text-lg font-semibold">Development</h1>
        <p className="text-sm">Open position : 12</p>
      </div>
    </div>
  );
};

export default CategoryCard;
