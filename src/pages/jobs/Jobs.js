import React, { useState } from 'react';
import Job from '../../components/reuseable/Job';
import JobFilter from '../../components/jobs/JobFilter';
import JobHeader from '../../components/jobs/JobHeader';
import PathBanner from '../../components/reuseable/PathBanner';
import Footer from '../../components/reuseable/Footer';
import { useGetAllJobsQuery, useGetJobsQuery } from '../../features/job/jobApi';
import Loading from '../../components/reuseable/Loading';

import Pagination from '../../components/reuseable/Pagination';

const Jobs = () => {
  const [sort, setSort] = useState('')
  const [pagination, setPagination] = useState(1)
  const [limit, setLimit] = useState(5)
  const [filter, setFilter] = useState({
    jobTitle: '',
    jobType: '',
    experience: '',
  })
  const { data: allJobs } = useGetAllJobsQuery();
  const { data, isLoading } = useGetJobsQuery({
    sort: sort,
    page: pagination,
    limit: limit,
    filter: filter
  });
  console.log(allJobs);
  const { data: jobs, total, pageFound, totalFound } = data || {}

  if (isLoading) {
    return <Loading />
  }
  console.log(jobs);
  return (
    <div>
      <PathBanner to='Jobs' />
      <div className="lg:px-16 px-4 grid lg:grid-cols-12 pt-4 mb-5">
        <div className="lg:col-span-3  ">
          <JobFilter setFilter={setFilter} />
        </div>
        <div className=" lg:col-span-9 lg:px-8 ">
          <JobHeader sort={sort} total={total} totalFound={totalFound} setLimit={setLimit} setSort={setSort} filter={filter} />
          <div className="grid  gap-5">
            {
              jobs?.map(job => <Job key={job?._id} job={job} />)
            }
          </div>
          <div className='flex my-10 justify-end'>
            <Pagination pageFound={pageFound} setPagination={setPagination} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
