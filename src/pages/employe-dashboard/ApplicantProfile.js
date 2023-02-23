import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import human1 from '../../assets/images/photo1.jpg';
import { useGetApplicantQuery } from '../../features/auth/authApi';
const ApplicantProfile = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, isLoading, error } = useGetApplicantQuery(id);
    const user = data?.data || {};
    const date = moment.utc(user?.dob).format('MM/DD/YYYY')
    return (
        <div className="bg-white  mt-4 px-10 py-5 rounded-lg">
            <div className='flex justify-between items-center'>
                <h1 className="w-full text-2xl font-semibold ">Applicant Profile</h1>

            </div>

            <div className="  mx-auto  py-5 mt-4  rounded ">

                <div className="avatar  w-full ">
                    <div className="w-24 h-24 mx-auto rounded-full border border-blue-200">
                        <img src={human1} alt="" />
                    </div>
                </div>
                <div className=" my-auto text-center">
                    <h1 className="font-bold text-2xl capitalize ">{user?.fullName}</h1>
                    <h1 className="font-semibold text-sm">{user?.designation}</h1>
                    <h1 className=' badge badge-sm bg-slate-200 border-none font-semibold text-sky-500'>{user?.email}</h1>
                </div>
                <div className=' lg:w-3/4 mt-4 mx-auto'>
                    <div className='grid lg:grid-cols-6 lg:gap-5 mt-3'>
                        <div className='col-span-2'>
                            <h1 className='font-semibold'>Contact Number</h1>
                        </div>
                        <p className='col-span-4 text-end '>
                            {user?.contactNumber}
                        </p>
                    </div>
                    <hr className='my-2' />
                    <div className='grid lg:grid-cols-6 lg:gap-5 mt-3'>
                        <div className='col-span-2'>
                            <h1 className='font-semibold '>Address</h1>
                        </div>
                        <p className='col-span-4 text-end '>
                            {user?.address}
                        </p>
                    </div>
                    <hr className='my-2' />
                    <div className='grid lg:grid-cols-6 lg:gap-5 mt-3'>
                        <div className='col-span-2'>
                            <h1 className='font-semibold '>City</h1>
                        </div>
                        <p className='col-span-4 text-end '>
                            {user?.city}
                        </p>
                    </div>
                    <hr className='my-2 ' />
                    <div className='grid lg:grid-cols-6 lg:gap-5 mt-3'>

                        <h1 className='font-semibold col-span-2'>Date of Birth</h1>

                        <p className='col-span-4 text-end text-ellipsis'>
                            {date}
                        </p>
                    </div>
                    <hr className='my-2' />
                    <div className='grid lg:grid-cols-6 lg:gap-5 mt-3'>
                        <div className='col-span-2'>
                            <h1 className='font-semibold '>About you</h1>
                        </div>
                        <p className='col-span-4 text-justify'>
                            {user?.bio} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias eos repellat nisi quas incidunt debitis officiis? Iure provident error dolore est velit, necessitatibus aperiam impedit doloribus cumque illum officiis. Perspiciatis quas corrupti ullam. Asperiores saepe distinctio, temporibus officia beatae repellat perferendis explicabo maiores consequuntur quam quasi libero quae eligendi fugiat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicantProfile;