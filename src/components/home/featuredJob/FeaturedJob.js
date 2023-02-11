import React from 'react';
import Job from '../../reuseable/Job';
import Category from '../JobCategory/CategoryCard';

const FeaturedJob = () => {
  return (
    <div className="lg:px-16 px-6  py-12  bg-gradient-to-t from-green-50  via-white to-purple-50">
      <h1 className="text-3xl font-semibold text-center ">Featured Jobs</h1>
      <p className="text-center text-sm font-semibold">
        Know your worth and find the job that qualify your life
      </p>

      <div className="grid lg:grid-cols-2 gap-5  mt-16">
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
      </div>
      <div className="my-12 flex justify-center ">
        <button className="btn  px-5 bg-blue-500 hover:bg-blue-500 border-none hover:border-none ">
          Load more jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJob;
