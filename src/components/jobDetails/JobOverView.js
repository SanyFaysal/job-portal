import React from 'react';
import { GiSandsOfTime, GiTimeTrap } from 'react-icons/gi';
import { SlCalender } from 'react-icons/sl';
import { CiLocationOn } from 'react-icons/ci';
import { BsClock, BsClockFill, BsFillPersonFill } from 'react-icons/bs';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { useJobPostedDate } from '../../hook/useJobPostedDate';
import moment from 'moment';
import { useJobPostDateLine } from '../../hook/useJobPostDateline';
import { useLocation } from 'react-router-dom';

const JobOverView = ({ job }) => {
  const { pathname } = useLocation()
  const { dateline, location, jobTitle, workingTime, salaryRange } = job;
  const { postedDate } = useJobPostedDate(job);
  const isDashboard = pathname === `/dashboard/jobsDetails/${job?._id}`
  const datelineFormative = moment.utc(dateline).format('MM/DD/YYYY');
  const { msg: datelineFormat, color } = useJobPostDateLine(job)
  return (
    <div className={`${!isDashboard ? 'bg-amber-50' : 'bg-white'} rounded  bg-`}>
      <div className="pl-6 pr-2 py-8">
        <h1 className="font-semibold text-xl  mb-3">Job Overview</h1>
        <div className="flex gap-3 mt-5">
          <SlCalender className="text-xl mt-2" />
          <div>
            <h3 className="font-semibold">Dated Post</h3>
            <p className="text-sm">{postedDate}</p>
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <GiSandsOfTime className="text-xl mt-2" />
          <div>
            <h3 className="font-semibold">Expired Date</h3>
            <p className="text-sm">{datelineFormative} - <span className={`${color} px-3 rounded `}>{datelineFormat}</span></p>
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <CiLocationOn className="text-xl mt-2" />
          <div>
            <h3 className="font-semibold">Job Location</h3>
            <p className="text-sm capitalize">{location}</p>
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <BsFillPersonFill className="text-xl mt-2" />
          <div>
            <h3 className="font-semibold">Job Title</h3>
            <p className="text-sm capitalize">{jobTitle}</p>
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <BsClockFill className="text-xl mt-2" />
          <div>
            <h3 className="font-semibold">Working Hours</h3>
            <p className="text-sm capitalize ">{workingTime}</p>
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <FaRegMoneyBillAlt className="text-xl mt-2" />
          <div>
            <h3 className="font-semibold">Salary</h3>
            <p className="text-sm workingTime">{salaryRange}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOverView;
