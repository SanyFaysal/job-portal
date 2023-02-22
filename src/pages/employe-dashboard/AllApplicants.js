import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/reuseable/Loading';
import Path from '../../components/reuseable/Path';
import { useJobByIdQuery } from '../../features/job/jobApi';

const AllApplicants = () => {
  const { id } = useParams();
  const { data: job, isLoading: loading, } = useJobByIdQuery(id);
  console.log(job);
  const applicants = job?.data?.applicants || []
  if (loading) {
    return <Loading />
  }
  console.log('applicants', applicants);
  return (
    <div>
      <Path from="dashboard" to="All Applicants" />
      {
        applicants?.map(candidate => <p>{candidate?.fullName}</p>)
      }
    </div>
  );
};

export default AllApplicants;
