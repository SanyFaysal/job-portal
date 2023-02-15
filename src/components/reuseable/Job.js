import moment from 'moment';
import React, { useState } from 'react';
import { BsBag } from 'react-icons/bs';
import { GiClockwork, GiTimeBomb } from 'react-icons/gi';
import { MdMoney } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useJobPostDateLine } from '../../hook/useJobPostDateline';
import { useJobPostedDate } from '../../hook/useJobPostedDate';

const Job = ({ job }) => {
  const { jobTitle, employmentType, salaryRange, dateline } = job;
  const datelineFormat = moment.utc(dateline).format('MM/DD/YYYY')
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const { postedDate } = useJobPostedDate(job)
  const { msg, color } = useJobPostDateLine(job)
  console.log(msg);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`border bg-white px-6 py-4 rounded-lg  
      ${hover && 'shadow-lg transition duration-400 '}`}
    >
      <div className="flex justify-around">
        <div className="mr-4">
          <GiClockwork
            className={`text-6xl  p-2 rounded-lg
          `}
          />
        </div>
        <div>
          <h1 className="text-xl capitalize">{jobTitle}</h1>

          <div className="text-sm flex items-center ">
            <p className="flex items-center mr-3">
              <BsBag className="inline mr-1 my-auto" />
              <span className="my-auto capitalize"> {employmentType}</span>
            </p>
            <p className="flex items-center mr-3">
              <MdMoney className="inline" />
              <span className='ml-1'>{salaryRange}</span>
            </p>
            <p className="flex items-center mr-3">
              <GiTimeBomb className="inline" />
              <span className='ml-1'>Posted on <span className='text-sky-500'> {postedDate}</span></span>
            </p>
          </div>

          <div className="flex gap-3 mt-2">
            {/* <div className="m-1">
              <p className=" px-2 py-[0.5px] rounded-full bg-green-100 text-green-500 text-xs  ">
                {' '}
                Full Time
              </p>
            </div>
            <div className="m-1">
              <p className=" px-2 py-[0.5px] rounded-full bg-slate-100 text-slate-500 text-xs  ">
                {' '}
                Full Time
              </p>
            </div> 
            <div className="m-1">
              <p className=" px-2 py-[0.5px] rounded-full bg-[rgb(240,254,232)] text-black text-xs  ">
                {' '}
                Dateline : {datelineFormat}
              </p>
            </div> */}
            <div className="m-1">
              <p className={`px-2 py-[0.5px] rounded-full   text-xs  ${color}`}>
                {' '}
                {msg}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end h-full mt-auto ml-auto">
          <button
            onClick={() => navigate(`/jobsDetails/${job?._id}`)}
            className=" btn btn-sm rounded-lg bg-blue-100 text-blue-500 border-none hover:bg-blue-500 hover:text-white hover:border-none "
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
