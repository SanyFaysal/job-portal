import React from 'react';
import Path from '../../components/reuseable/Path';
import photo1 from '../../assets/images/photo1.jpg';
import human from '../../assets/images/human.jpg';
import { BiEdit } from 'react-icons/bi';
const Profile = () => {
  return (
    <div>
      <Path form="dashboard" to="Profile" />
      <div className="mt-12 lg:px-16 px-6  flex items-center justify-between ">
        <div className="flex">
          <div className="avatar">
            <div className="w-24  rounded">
              <img src={human} alt="" />
            </div>
          </div>
          <div className="ml-6 my-auto ">
            <h1 className="font-bold text-2xl">Tamanna Khan</h1>
            <h1 className="font-semibold text-sm">Web Developer</h1>
          </div>
        </div>
        <div>
          <button className="btn btn-sm btn-danger border-none hover:border-none hover:bg-blue-500 hover:text-white duration-400 ease-in px-4 bg-blue-200 text-blue-500">
            <span className="mr-2">Edit</span> 🖊{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
