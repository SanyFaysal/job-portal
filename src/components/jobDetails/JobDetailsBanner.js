import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { CgOpenCollective } from 'react-icons/cg';
import { GiComputerFan, GiTimeBomb } from 'react-icons/gi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { MdMoney, MdWork } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import photo from '../../assets/images/photo1.jpg';
import { useGetMeQuery } from '../../features/auth/authApi';
import { useApplyJobMutation } from '../../features/job/jobApi';
import { useJobPostDateLine } from '../../hook/useJobPostDateline';
import { useJobPostedDate } from '../../hook/useJobPostedDate';
const JobDetailsBanner = ({ job }) => {
  const token = localStorage.getItem('accessToken')
  const [loading, setLoading] = useState(false)
  const { pathname } = useLocation()
  const { postedDate } = useJobPostedDate(job)
  const { status } = useJobPostDateLine(job)
  const { data } = useGetMeQuery(token);
  const [applyJob, { isSuccess, isError, error }] = useApplyJobMutation();
  const user = data?.data;
  const role = user?.role;
  const isDashboard = pathname === `/dashboard/jobsDetails/${job?._id}`
  const { company: { companyName }, fullName } = job.postedBy.id;

  let isApplied = user?.applications?.find(apply => apply._id === job._id)
  const { _id: id } = job;

  const handleApply = (token, id) => {
    console.log({ token, id })
    applyJob({ token, id })
  }

  useEffect(() => {

    if (isSuccess) {
      toast.success('Apply success', { id: 'jobApply' });
      setLoading(true)
    }
    if (isError) {
      toast.error(error?.data.error, { id: 'jobApply' })
    }

  }, [isSuccess, isError, error, isApplied, job, user])
  return (
    <div
      className={`${isDashboard ? 'bg-white lg:px-8 py-12' : 'bg-indigo-50 lg:px-16 lg:py-20'} mt-4 px-4  py-5 rounded-lg  transition duration-400 `}
    >
      <div className="lg:flex justify-around items-center">
        {/*  <div className="mr-4">
        <img
            src={photo}
            alt=""
            className={`text-6xl  p-2 w-24 h-24  rounded-xl
        `}
          /> 
        </div>*/}
        <div>
          <h1 className="text-2xl font-semibold capitalize">
            {job?.jobTitle} ({job?.employmentType})

          </h1>
          <h1 className="text-lg font-medium capitalize flex items-center italic">
            <HiOutlineOfficeBuilding className='inline mr-2' /> {companyName}
          </h1>

          <div className="text-sm flex items-center mt-1">

            <p className="flex items-center mr-3">
              <MdMoney className="inline" />
              <span className='ml-2'> {job?.salaryRange}</span>
            </p>
            <p className="flex items-center mr-3">
              <GiTimeBomb className="inline" />
              <span className='ml-1'>{postedDate}</span>
            </p>
          </div>
          <p className='capitalize text-sm mt-1'>Posted By : <span className='font-semibold'>{fullName}</span> </p>

          {/* <div className="grid grid-cols-4 mt-2">
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
          </div> */}
        </div>
        <div className="flex lg:justify-end justify-start my-3 h-full lg:my-auto ml-auto">
          <button
            disabled={role === 'employee' || !status || isApplied || !user?.email ? true : false}
            onClick={() => handleApply(token, id)}
            className=" py-3 px-10 font-semibold text-md rounded-md disabled:hover:cursor-not-allowed disabled:bg-blue-200 disabled:text-slate-100 bg-blue-300 text-blue-600 duration-500 ease-in-out border-none hover:bg-blue-500 hover:text-white hover:border-none "
          >
            {isApplied ? 'Already Applied' : 'Apply Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsBanner;