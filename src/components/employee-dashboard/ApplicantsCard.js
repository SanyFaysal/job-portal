import moment from 'moment';
import React from 'react';

const ApplicantsCard = ({ candidate }) => {
    const formattedDOB = moment.utc(candidate.dob).format('DD-MM-YYYY')
    return (
        <div className='py-2 bg-blue-50  w-full rounded-lg mb-3  '>

            <div>
                <div className='flex justify-between  px-6'>

                    <h1 className='text-xl capitalize font-bold my-0'> {candidate.fullName}</h1>

                    <h1 className='text-sm capitalize  text-orange-500 px-2 rounded-full my-auto'> {candidate.email}</h1>
                    <h1 className='btn btn-sm'>More</h1>
                </div>
                <hr className='mt-1' />
                <div className='grid grid-cols-8 gap-x-4 mt-1 text-md font-medium w-full  px-6'>
                    <h1 className=' col-span-2'>Designation</h1>
                    <h1 className=' '>Contact</h1>
                    <h1 className=' '>Gender</h1>
                    <h1 className=' '>Country</h1>
                    <h1 className=' '>Date fo Birth</h1>
                </div>
                <div className='grid grid-cols-8 gap-x-4  text-sm w-full  px-6'>
                    <h1 className='capitalize col-span-2 '>{candidate?.designation}</h1>
                    <h1 className='capitalize '>{candidate?.contactNumber}</h1>
                    <h1 className='capitalize '>{candidate?.gender}</h1>
                    <h1 className=' '>{candidate?.country}</h1>
                    <h1 className=' '>{formattedDOB}</h1>
                </div>
            </div>

        </div>
    );
};

export default ApplicantsCard;