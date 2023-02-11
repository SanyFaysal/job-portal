import React from 'react';
import Job from '../../components/reuseable/Job';
import JobFilter from '../../components/jobs/JobFilter';
import JobHeader from '../../components/jobs/JobHeader';
import PathBanner from '../../components/reuseable/PathBanner';

const Jobs = () => {
  return (
    <div>
      <PathBanner />
      <div className="px-16 lg:px-6 grid grid-cols-12 pt-4">
        <div className="col-span-3 ">
          <JobFilter />
        </div>
        <div className=" col-span-9 px-8">
          <JobHeader />
          <div className="grid  gap-5">
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
