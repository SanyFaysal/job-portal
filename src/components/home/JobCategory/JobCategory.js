import React from 'react';
import Category from './CategoryCard';

const JobCategories = () => {
  return (
    <div className="lg:px-16 px-6 py-16 ">
      <h1 className="text-3xl font-semibold text-center ">
        Popular Job Categories
      </h1>
      <p className="text-center font-semibold">Total jobs : 2255 </p>

      <div className="grid grid-cols-4 gap-5  mt-12">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default JobCategories;
