import React from 'react';
import Path from '../../components/reuseable/Path';
import photo1 from '../../assets/images/photo1.jpg';
import human from '../../assets/images/human.jpg';
import { BiEdit } from 'react-icons/bi';
const Profile = () => {
  return (
    <div>
      <Path form="dashboard" to="Profile" />
      <div className="bg-white  mt-8 px-10 py-10 rounded-lg">
        <h1 className="w-full text-2xl font-semibold mb-8">Profile</h1>
        <div className=" mt-2  flex items-center justify-between">
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
    </div>
  );
};

export default Profile;
