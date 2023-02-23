import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ApplicantsCard from '../../components/employee-dashboard/ApplicantsCard';
import Loading from '../../components/reuseable/Loading';
import Path from '../../components/reuseable/Path';
import { useJobByIdQuery } from '../../features/job/jobApi';

const Applicants = () => {
    const { id } = useParams();
    const [open, setOpen] = useState(false)
    const { data: job, isLoading: loading, } = useJobByIdQuery(id);
    console.log(job);
    const applicants = job?.data?.applicants || []
    if (loading) {
        return <Loading />
    }
    return (
        <div className=''>
            <p onClick={() => setOpen(!open)}>click</p>
            <Path from="dashboard" to="All Applicants" />
            <div className='bg-white px-6 py-6 rounded-lg'>
                <div className="">

                    <div className=" rounded-lg  border  ">
                        <div className=' flex justify-between py-4 px-6 '>
                            <h2 className='text-xl font-semibold capitalize'>Job : <span className='text-sky-500'>{job?.data?.jobTitle}</span></h2>

                            <h2 className='text- font-semibold capitalize'>Total Applicants : {applicants.length}</h2>
                            {/* {!open ? <span className='flex' onClick={() => setOpen(false)}> See All  <BiCaretDown className='my-auto' /></span> :
                <span className='flex' onClick={() => setOpen(true)}>Close All  <BiCaretUp className='my-auto' /></span>
              } */}


                        </div>
                    </div>
                    <div className="  rounded-lg nt  mt-2 ">
                        {
                            applicants?.map(candidate => <ApplicantsCard candidate={candidate} key={candidate?._id} />)
                        }

                    </div>
                </div>
                {/* <div className='mb-4 flex justify-between'>
          <h2 className='text-xl font-semibold capitalize'>Job : <span className='text-sky-500'>{job?.data?.jobTitle}</span></h2>
          <h2 className='text-xl font-semibold capitalize'>Total Applicants : {applicants.length}</h2>
        </div> */}

            </div>
        </div>
    );
};

export default Applicants;