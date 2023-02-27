import React from 'react';

const JobHeader = ({ sort, setSort, total, totalFound, setLimit, filter }) => {
  return (
    <div className="flex flex-col lg:flex-row  lg:gap-8 gap-2  justify-between py-4 items-center mb-4 sticky top-14 bg-white shadow-md px-5 rounded-lg mb-3">
      <h3 className=" font-semibold w-full lg:text-start text-center">Total jobs : {total}</h3>

      <div className='w-full'>
        {
          filter.jobTitle || filter.jobType || filter.experience ? <h3 className=" font-semibold ">Found Jobs : {totalFound}</h3> : ''
        }
      </div>
      <div className=" flex lg:gap-4 lg:justify-none justify-center gap-2 w-full">
        <select defaultValue={sort} onChange={(e) => setSort(e.target.value)} className="select select-bordered select-sm w-fit max-w-xs">
          <option value='' selected>Sort by (default)</option>
          <option value='newToOld' >Newest to oldest</option>
          <option value='oldToNew'>Oldest to newest</option>
        </select>
        <select onChange={(e) => setLimit(e.target.value)} className="select select-bordered select-sm w-fit ml-3 max-w-xs">
          <option value={5} selected>5 per page</option>
          <option value={10}>10 per page</option>
          <option value={15}>15 per page</option>
        </select>
      </div>
    </div>
  );
};

export default JobHeader;
