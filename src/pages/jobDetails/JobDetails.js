import React, { useState } from 'react';
import { BsBag } from 'react-icons/bs';
import { GiClockwork, GiTimeBomb } from 'react-icons/gi';
import { MdMoney } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import CompanyProfile from '../../components/jobDetails/CompanyProfile';
import JobDetailsBanner from '../../components/jobDetails/JobDetailsBanner';
import JobInfo from '../../components/jobDetails/JobInfo';
import JobOverView from '../../components/jobDetails/JobOverView';
import JobQusAns from '../../components/jobDetails/JobQusAns';
import Footer from '../../components/reuseable/Footer';
import { useJobByIdQuery } from '../../features/job/jobApi';

const JobDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isSuccess, isError, error } = useJobByIdQuery(id)
  console.log(data?.data);
  const job = data?.data;
  return (
    <div className="">
      <JobDetailsBanner job={job} />
      <div className="grid lg:grid-cols-6 gap-7 lg:px-16 px-6 mt-8">
        <div className="col-span-4">
          <JobInfo job={job} />
          <JobQusAns job={job} />
        </div>
        <div className="col-span-2">
          <JobOverView job={job} />
          <div className="my-8"></div>
          <CompanyProfile job={job} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobDetails;
