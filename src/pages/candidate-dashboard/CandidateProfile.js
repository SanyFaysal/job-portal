import React from 'react';
import Path from '../../components/reuseable/Path';
import moment from 'moment';
import human1 from '../../assets/images/photo1.jpg';


import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const CandidateProfile = () => {
  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth);
  const date = moment.utc(user?.dob).format('MM/DD/YYYY')
  return (
    <div>
      <Path from="dashboard" to="Profile" />
      <div className="bg-white  mt-4 px-10 py-5 rounded-lg">
        <div className='flex justify-between items-center'>
          <h1 className="w-full text-2xl font-semibold ">Profile</h1>
          <button onClick={() => navigate('/dashboard/edit-candidate-profile')} className="btn btn-sm  border-none hover:border-none rounded hover:bg-blue-500 hover:text-white duration-400 ease-in px-4 bg-blue-100 text-blue-500">
            <span className="mr-2">Edit</span> 🖊{' '}
          </button>
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
                {user?.bio}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
