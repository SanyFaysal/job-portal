import React from 'react';

import Loading from '../../components/reuseable/Loading';
import Path from '../../components/reuseable/Path';
import { useGetEmployeeJobsQuery } from '../../features/job/jobApi';

import ApplicantsCollapsCard from '../../components/employee-dashboard/ApplicantsCollapsCard';
const AllApplicants = () => {
  const token = localStorage.getItem('accessToken')
  const { data, isLoading } = useGetEmployeeJobsQuery(token)
  const jobs = data?.data || [];

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className=''>

      <Path from="dashboard" to="All Applicants" />
      <div className=' grid grid-cols-1 gap-y-2'>
        {
          jobs?.map((job) => <ApplicantsCollapsCard job={job} key={job?._id} />)
        }
      </div>
    </div>
  );
};

export default AllApplicants;
