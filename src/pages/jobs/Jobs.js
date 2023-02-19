import React from 'react';
import Job from '../../components/reuseable/Job';
import JobFilter from '../../components/jobs/JobFilter';
import JobHeader from '../../components/jobs/JobHeader';
import PathBanner from '../../components/reuseable/PathBanner';
import Footer from '../../components/reuseable/Footer';
import { useGetJobsQuery } from '../../features/job/jobApi';
import Loading from '../../components/reuseable/Loading';
import { useSelector } from 'react-redux';

const Jobs = () => {
  const { data, isLoading, isSuccess } = useGetJobsQuery();

  const jobs = data?.data;

  if (isLoading) {
    return <Loading />
  }


  return (
    <div>
      <PathBanner />
      <div className="lg:px-16 px-4 grid lg:grid-cols-12 pt-4 mb-5">
        <div className="lg:col-span-3  ">
          <JobFilter />
        </div>
        <div className=" lg:col-span-9 lg:px-8 ">
          <JobHeader jobs={jobs} />
          <div className="grid  gap-5">
            {
              jobs?.map(job => <Job key={job?._id} job={job} />)
            }
            {
              jobs?.map(job => <Job key={job?._id} job={job} />)
            }
            {
              jobs?.map(job => <Job key={job?._id} job={job} />)
            }
            {
              jobs?.map(job => <Job key={job?._id} job={job} />)
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
