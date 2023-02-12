import React from 'react';
import Comment from './Comment';
import { IoSend } from 'react-icons/io5';
const JobQusAns = () => {
  return (
    <div>
      <h1 className="mb-2 mt-5 text-xl font-semibold my-5">All Comments</h1>
      <div className="flex gap-4 my-5">
        <input
          placeholder="Write your comment here..."
          type="text"
          className="input input-bordered w-full c"
        />
        <div>
          <button className="btn rounded py-2  bg-blue-100 border-none text-blue-500  hover:bg-blue-500 hover:text-white duration-500 ease-in-out ">
            <IoSend className="text-2xl" />
          </button>
        </div>
      </div>
      <div>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default JobQusAns;
