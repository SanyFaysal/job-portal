import React from 'react';
import { useSelector } from 'react-redux';
import Job from '../../components/reuseable/Job';
import Loading from '../../components/reuseable/Loading';
import { useApplyJobMutation } from '../../features/job/jobApi';

const AppliedJob = () => {
    const { user, isLoading } = useSelector(state => state.auth);
    if (isLoading) {
        return <Loading />
    }
    const applications = user?.applications;

    return (
        <div>
            {
                applications.map(job => <Job job={job} />)
            }
        </div>
    );
};

export default AppliedJob;