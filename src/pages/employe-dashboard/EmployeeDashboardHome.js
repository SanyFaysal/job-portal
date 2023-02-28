import React from 'react';

import { Link } from 'react-router-dom';


const EmployeeDashboardHome = () => {

    return (
        <div className='mx-4 '>
            {/* <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-3 items-center justify-between my-8 '>
                <div className='bg-white  border-b-[#4485ff] border-b-4 text-[#4485ff]  p-7 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className=' rounded-lg bg-blue-100 p-2'>
                            <span className=''>  <CgWorkAlt className='text-5xl ' /></span>
                        </p>
                    </div>
                    <div className=''>
                        <h1 className='text-xl font-semibold'>Total Job Posts</h1>
                        <p className='text-5xl text-end font-bold'>11</p>
                    </div>
                </div>
                <div className='bg-white  border-b-[#6f6ff3] border-b-4 text-[#6f6ff3] p-7 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='border bg-[#e8e8ff] rounded-lg p-3'>
                            <span className=''>  <IoIosPaper className='text-4xl ' /></span>
                        </p>
                    </div>
                    <div className=''>
                        <h1 className='text-xl font-semibold'>Applications sent</h1>
                        <p className='text-5xl text-end font-bold'>50</p>
                    </div>
                </div>
                <div className='bg-white text-[#b952f4f8]  border-b-4 border-b-[#b952f4f8] p-7 flex justify-between items-center  rounded-lg'>
                    <div>
                        <p className='bg-[#f5e8fcf8] rounded-lg p-3'>
                            <span className=''>  <BiBookmark className='text-4xl ' /></span>
                        </p>
                    </div>
                    <div className=''>
                        <h1 className='text-xl font-semibold'>Shortlisted Resumes</h1>
                        <p className='text-5xl text-end font-bold'>22</p>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-5'>
                <div className=' bg-white  px-6 py-6  rounded-lg'>
                    <img className='rounded-full w-28 h-28 mx-auto' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                    <div className='text-center mt-2'>
                        <h1 className='text-xl font-semibold'>Abu Sani Faysal</h1>
                        <h1 className='text-sm font-semibold'>Hr</h1>
                    </div>
                    <div className='grid grid-cols-2 mt-3 font-semibold'>
                        <h1>Total Posted Job: </h1>
                        <span className='text-end'>11</span>
                    </div>
                </div>
                <div className='bg-white  px-6 py-6  rounded-lg'>
                    <img className='rounded-full w-28 h-28 mx-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEr6EfJbZcCbHczicDoZQbAemgpliZlBH6ZQ&usqp=CAU" alt="" />
                    <div className='text-center mt-2'>
                        <h1 className='text-xl font-semibold'>Brain Quest Consultancy And Training</h1>
                        <h1 className='text-sm font-semibold'>It Company</h1>
                    </div>
                    <div className='grid grid-cols-2 mt-3 font-semibold'>
                        <h1>Location: </h1>
                        <span className='text-end'>United Aram Emirates</span>
                    </div>
                </div>
            </div> */}
            <div className='mt-2'>
                <h1>Some features of Dashboard home are under development </h1>
                <h1>These will coming soon ...</h1>
                <p className='mt-5'>You can go to your Profile </p>
                <Link to='/dashboard/employee-profile' className='text-blue-500 underline cursor-pointer'>Go to Profile</Link>
            </div>
        </div>
    );
};

export default EmployeeDashboardHome;