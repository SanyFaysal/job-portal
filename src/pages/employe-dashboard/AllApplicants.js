import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ApplicantsCard from '../../components/employee-dashboard/ApplicantsCard';
import Loading from '../../components/reuseable/Loading';
import Path from '../../components/reuseable/Path';
import { useJobByIdQuery } from '../../features/job/jobApi';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi'
const AllApplicants = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false)
  const { data: job, isLoading: loading, } = useJobByIdQuery(id);
  console.log(job);
  const applicants = job?.data?.applicants || []
  if (loading) {
    return <Loading />
  }
  console.log(open);
  return (
    <div className=''>
      <p onClick={() => setOpen(!open)}>click</p>
      <Path from="dashboard" to="All Applicants" />
      <div className='bg-white px-6 py-6 rounded-lg'>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title rounded-lg  border  ">
            <div className=' flex justify-between '>
              <h2 className='text-xl font-semibold capitalize'>Job : <span className='text-sky-500'>{job?.data?.jobTitle}</span></h2>
              <p>click for open</p>
              <h2 className='text- font-semibold capitalize'>Total Applicants : {applicants.length}</h2>
              {/* {!open ? <span className='flex' onClick={() => setOpen(false)}> See All  <BiCaretDown className='my-auto' /></span> :
                <span className='flex' onClick={() => setOpen(true)}>Close All  <BiCaretUp className='my-auto' /></span>
              } */}


            </div>
          </div>
          <div className="collapse-content  rounded-lg text-primary-content  mt-2 peer-checked:text-blue-500">
            {
              applicants?.map(candidate => <ApplicantsCard candidate={candidate} key={candidate?._id} />)
            }
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

export default AllApplicants;
