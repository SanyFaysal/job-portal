import React from 'react';
import { Link } from 'react-router-dom';
import { useGetJobsQuery } from '../../../features/job/jobApi';
import Job from '../../reuseable/Job';
import Loading from '../../reuseable/Loading';


const FeaturedJob = () => {
  const { data, isSuccess, isLoading, isError, error } = useGetJobsQuery({
    sort: '',
    page: 1,
    limit: 4,
    filter: {
      experience: "",
      jobTitle: "",
      jobType: '',
    }
  });
  console.log(data);
  if (isLoading) {
    return <Loading />
  }
  const jobs = data?.data;
  console.log({ data, isSuccess, isLoading, isError, error });
  return (
    <div className="lg:px-16 px-6  py-12  bg-sky-50">
      <h1 className="text-3xl font-semibold text-center ">Featured Jobs</h1>
      <p className="text-center text-sm font-semibold">
        Know your worth and find the job that qualify your life
      </p>

      <div className="grid lg:grid-cols-2 gap-5  mt-16">
        {
          jobs?.slice(0, 6)?.map(job => <Job key={job?._id} job={job} />)
        }
      </div>
      <div className="my-12 flex justify-center ">
        <Link to='/jobs' className="btn  px-5 bg-blue-200 hover:bg-blue-500 text-blue-500 hover:text-white border-none hover:border-none ">
          Load more jobs
        </Link>
      </div>
    </div>
  );
};

export default FeaturedJob;
