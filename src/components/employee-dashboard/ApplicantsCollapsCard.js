import React, { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { BsFillCameraVideoFill, BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';
import { CgUnavailable } from 'react-icons/cg';
import ApplicantsCard from './ApplicantsCard';

const ApplicantsCollapsCard = ({ job }) => {
    const { applicants } = job;
    const [open, setOpen] = useState(false)
    return (
        <div className=' bg-white  my-auto p-1 rounded-lg px-6 py-3'>
            <div className="">
                <div className=" rounded-lg   py-2 ">
                    <div className=' grid grid-cols-3  '>
                        <h2 className='text-lg font-semibold capitalize'> <span className='text-sky-500'>{job?.jobTitle}</span></h2>
                        <h2 className='text- font- capitalize ml-auto'>Total Applicants : {applicants.length}</h2>
                        {applicants.length ?
                            <p className='ml-auto hover:cursor-pointer font-' onClick={() => setOpen(!open)}>{
                                !open
                                    ?
                                    <span>See all <BiChevronDown className='inline text-xl my-auto ml-1' /> </span>
                                    :
                                    <span>Close <BiChevronUp className='inline text-xl my-auto ml-1' /> </span>}
                            </p> : <p className='ml-auto hover:cursor-pointer '>None</p>}
                    </div>
                </div>
                <div className={`rounded-lg nt  mt-2 peer-checked:text-blue-500 duration-700 ease-in-out ${open ? 'block ' : 'hidden'}`}>
                    {
                        applicants?.map(candidate => <ApplicantsCard candidate={candidate} key={candidate?._id} />)
                    }

                </div>
            </div>


        </div>
    );
};

export default ApplicantsCollapsCard;
