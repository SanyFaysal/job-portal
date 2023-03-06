import React from 'react';

const PathBanner = ({ to }) => {
  return (
    <div className="w-full h-[25vh]  bg-slate-100   my-auto">
      <div className="flex-col flex justify-center h-full items-center ">
        <h1 className="text-3xl font-semibold capitalize">{to}</h1>
        <p>Home / <span className='capitalize'>{to}</span></p>
      </div>
    </div>
  );
};

export default PathBanner;
