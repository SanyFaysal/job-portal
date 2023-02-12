import React from 'react';
import { BsBag } from 'react-icons/bs';
import { GiClockwork, GiTimeBomb } from 'react-icons/gi';
import { MdMoney } from 'react-icons/md';
import { Navigate } from 'react-router-dom';
import photo from '../../assets/images/photo1.jpg';
const JobDetailsBanner = () => {
  return (
    <div
      className={` bg-indigo-50 px-16 py-20 rounded-lg  transition duration-400 `}
    >
      <div className="flex justify-around items-center">
        <div className="mr-4">
          <img
            src={photo}
            alt=""
            className={`text-6xl  p-2 w-24 h-24  rounded-xl
        `}
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">
            Software Engineer (Android), Libraries
          </h1>

          <div className="text-sm flex items-center mt-1">
            <p className="flex items-center mr-3">
              <BsBag className="inline mr-1 my-auto" />
              <span className="my-auto"> Segment</span>
            </p>
            <p className="flex items-center mr-3">
              <MdMoney className="inline" />
              <span>$ 30k - $ 35k / year</span>
            </p>
            <p className="flex items-center mr-3">
              <GiTimeBomb className="inline" />
              <span>11 years ago</span>
            </p>
          </div>

          <div className="grid grid-cols-4 mt-2">
            <div className="m-1">
              <p className="  py-[0.5px] rounded-full bg-green-100 text-green-500 text-xs text-center ">
                {' '}
                Full Time
              </p>
            </div>
            <div className="m-1">
              <p className=" px-2 py-[0.5px] rounded-full bg-orange-200 text-yellow-500 text-xs text-center ">
                {' '}
                Full Time
              </p>
            </div>
            <div className="m-1">
              <p className=" px-2 py-[0.5px] rounded-full bg-pink-100 text-pink-500 text-xs text-center">
                {' '}
                Full Time
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end h-full my-auto ml-auto">
          <button
            onClick={() => Navigate('/jobsDetails/1')}
            className=" py-3 px-10 font-semibold text-md rounded-md bg-blue-300 text-blue-600 duration-500 ease-in-out border-none hover:bg-blue-500 hover:text-white hover:border-none "
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsBanner;
