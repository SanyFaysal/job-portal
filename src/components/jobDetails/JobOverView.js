import React from 'react';
import { GiSandsOfTime, GiTimeTrap } from 'react-icons/gi';
import { SlCalender } from 'react-icons/sl';
import { CiLocationOn } from 'react-icons/ci';
import { BsClock, BsClockFill, BsFillPersonFill } from 'react-icons/bs';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
const JobOverView = () => {
  return (
    <div className="bg-gray-50 rounded-lg">
      <div className="px-6 py-8">
        <h1 className="font-semibold text-xl  mb-3">Job Overview</h1>
        <div className="flex gap-3 mt-5">
          <SlCalender className="text-xl mt-2" />
          <div>
            <h3 className="font-semibold">Dated Post</h3>
            <p className="text-sm">31 January, 2023</p>
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <GiSandsOfTime className="text-xl mt-2" />
          <div>
            <h3 className="font-semibold">Expired Date</h3>
            <p className="text-sm">11 February, 2023</p>
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <CiLocationOn className="text-xl mt-2" />
          <div>
            <h3 className="font-semibold">Location</h3>
            <p className="text-sm">London, UK</p>
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <BsFillPersonFill className="text-xl mt-2" />
          <div>
            <h3 className="font-semibold">Job Title</h3>
            <p className="text-sm">Web Developer</p>
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <BsClockFill className="text-xl mt-2" />
          <div>
            <h3 className="font-semibold">Working Hours</h3>
            <p className="text-sm">5-6 hours/day</p>
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <FaRegMoneyBillAlt className="text-xl mt-2" />
          <div>
            <h3 className="font-semibold">Salary</h3>
            <p className="text-sm">$33k - $35k</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOverView;
