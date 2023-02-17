import React, { useEffect, useState } from 'react';
import { BsBag } from 'react-icons/bs';
import { GiClockwork, GiTimeBomb } from 'react-icons/gi';
import { MdMoney } from 'react-icons/md';
import { RxArrowLeft } from 'react-icons/rx';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import CompanyProfile from '../../components/jobDetails/CompanyProfile';
import JobDetailsBanner from '../../components/jobDetails/JobDetailsBanner';
import JobInfo from '../../components/jobDetails/JobInfo';
import JobOverView from '../../components/jobDetails/JobOverView';
import JobQusAns from '../../components/jobDetails/JobQusAns';
import Footer from '../../components/reuseable/Footer';
import Loading from '../../components/reuseable/Loading';
import { useJobByIdQuery } from '../../features/job/jobApi';


const JobDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { pathname } = useLocation()
  const { data, isLoading, isSuccess, isError, error } = useJobByIdQuery(id)
  console.log(pathname);
  const job = data?.data;

  const isDashboard = pathname === `/dashboard/jobsDetails/${id}`

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="">
      {
        isDashboard && <div>
          <Link to='/dashboard/manage-jobs' className='flex items-center gap-x-2 mt-2 mb-3 font-medium'><RxArrowLeft />Back to Manage Jobs</Link>
        </div>
      }
      <JobDetailsBanner job={job} />
      <div className={`grid lg:grid-cols-6 gap-7  px-6 mt-8 ${isDashboard ? 'lg:px-4' : 'lg:px-16'}`}>
        <div className="lg:col-span-4">
          <JobInfo job={job} />
          <div className='block lg:hidden'>
            <JobOverView job={job} />
            <div className="my-8"></div>
            <CompanyProfile job={job} />
          </div>
          <JobQusAns job={job} />

        </div>
        <div className="lg:col-span-2 lg:my-0 my-4">
          <div className='hidden lg:block'>
            <JobOverView job={job} />
            <div className="my-8"></div>
            <CompanyProfile job={job} />
          </div>

        </div>
      </div>
      {!isDashboard && <Footer />}
    </div>
  );
};

export default JobDetails;
