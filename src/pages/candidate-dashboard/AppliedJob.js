import React from 'react';

import Job from '../../components/reuseable/Job';

import Path from '../../components/reuseable/Path';
import { useGetMeQuery } from '../../features/auth/authApi';


const AppliedJob = () => {
    const token = localStorage.getItem('accessToken')
    const { data, isSuccess, isError, error } = useGetMeQuery(token)

    console.log({ data, isSuccess, isError, error });
    const applications = data?.data?.applications || [];

    return (

        <div>
            <div>
                <Path from='dashboard' to='Applied Job' />
            </div>
            <div className='grid gap-y-2'>
                {
                    applications.map(job => <Job job={job} />)
                }
            </div>
        </div>
    );
};

export default AppliedJob;