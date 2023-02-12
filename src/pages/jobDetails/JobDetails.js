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

const JobDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  return (
    <div className="">
      <JobDetailsBanner />
      <div className="grid lg:grid-cols-6 gap-7 lg:px-16 px-6 mt-8">
        <div className="col-span-4">
          <JobInfo />
          <JobQusAns />
        </div>
        <div className="col-span-2">
          <JobOverView />
          <div className="my-8"></div>
          <CompanyProfile />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobDetails;
