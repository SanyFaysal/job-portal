import React from 'react';

const JobHeader = () => {
  return (
    <div className="flex justify-between py-4 items-center mb-4 sticky top-16 bg-white shadow-md px-5 rounded-lg mb-3">
      <h3 className=" font-semibold ">Total jobs: 1120</h3>
      <div className="flex">
        <select className="select select-bordered select-sm w-fit max-w-xs">
          <option selected>Sort by (default)</option>
          <option>Newest to oldest</option>
          <option>Oldest to newest</option>
        </select>
        <select className="select select-bordered select-sm w-fit ml-3 max-w-xs">
          <option selected>All</option>
          <option>10 per page</option>
          <option>20 per page</option>
          <option>30 per page</option>
        </select>
      </div>
    </div>
  );
};

export default JobHeader;
