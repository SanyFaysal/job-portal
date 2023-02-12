import React from 'react';
import { BsClockFill, BsFillPersonFill } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { GiSandsOfTime } from 'react-icons/gi';
import company from '../../assets/images/banner-img-1.png';
const CompanyProfile = () => {
  return (
    <div className="bg-slate-100 rounded-lg">
      <div className="px-6 py-8">
        <h1 className="font-semibold text-xl  mb-3">Company Profile</h1>
        <div className="flex gap-3 mt-5 ">
          <img src={company} className="w-20 h-20" alt="" />
          <div className="my-auto">
            <h3 className="font-semibold">
              Brain Quest Consultancy and Training
            </h3>
            <p className="text-sm text-blue-500 font-semibold">IT Firm</p>
          </div>
        </div>
        <div className="flex gap-3 mt-5 justify-between">
          <h3 className="font-semibold">Company size</h3>
          <div>
            <p className="font-semibold text-sm text-end">100 - 500</p>
          </div>
        </div>
        <div className="flex gap-3 mt-5 justify-between">
          <h3 className="font-semibold">Email</h3>
          <div>
            <p className="font-semibold text-sm text-end">
              brainquest@gmail.com
            </p>
          </div>
        </div>
        <div className="flex gap-3 mt-5 justify-between">
          <h3 className="font-semibold">Contact Number</h3>
          <div>
            <p className="font-semibold text-end text-sm"> + 98525454514</p>
          </div>
        </div>
        <div className="flex gap-3 mt-5 justify-between">
          <h3 className="font-semibold">Location</h3>
          <div>
            <p className="font-semibold text-end text-sm">London, UK</p>
          </div>
        </div>

        <div className="flex gap-3 justify-center w-full mt-8 ">
          <button className="btn w-full bg-blue-200 text-blue-500 border-none hover:bg-blue-500 hover:text-white duration-500 ease-in-out">
            View Company Website
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
