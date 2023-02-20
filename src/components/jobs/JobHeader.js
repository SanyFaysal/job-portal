import React from 'react';

const JobHeader = ({ sort, setSort, total, setLimit }) => {
  return (
    <div className="flex flex-col lg:flex-row  gap-4  justify-between py-4 items-center mb-4 sticky top-14 bg-white shadow-md px-5 rounded-lg mb-3">
      <h3 className=" font-semibold ">Total jobs : {total}</h3>
      <div className="lg:flex-row flex-col gap-4">
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
