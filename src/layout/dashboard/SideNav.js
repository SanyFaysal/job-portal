import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBackIosNew, MdOutlineWorkOutline } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { IoMdSend } from 'react-icons/io';
import { AiOutlineFileText } from 'react-icons/ai';
import { BiBookmark } from 'react-icons/bi';

const SideNav = () => {
  return (
    <ul className=" p-4  flex flex-col  h-full">
      <Link
        to="/"
        className="p-3 inline-block rounded-lg mt-3 mb-6 font-semibold hover:translate-x-[-5px] flex items-center duration-500 hover:text-blue-500 ease-in-out"
      >
        <MdOutlineArrowBackIosNew className="inline mr-2 " /> Back to Home
      </Link>

      <Link
        to="/dashboard/profile"
        className="p-3 inline-block rounded-lg mt-1 hover:bg-blue-50 flex items-center  ease-in"
      >
        <CgProfile className="inline mr-2 text-xl" />
        <span className=""> Profile</span>
      </Link>
      <Link
        to="/dashboard/post-job"
        className="p-3 inline-block rounded-lg mt-1  hover:bg-blue-50  flex items-center  ease-in"
      >
        <IoMdSend className="inline mr-2 text-xl" />
        Post A Job
      </Link>
      <Link
        to="/dashboard/manage-jobs"
        className="p-3 inline-block rounded-lg mt-1 hover:bg-blue-50 flex items-center  ease-in"
      >
        <MdOutlineWorkOutline className="inline mr-2 text-xl" />
        Manage Jobs
      </Link>

      <Link
        to="/dashboard/all-applicants"
        className="p-3 inline-block rounded-lg mt-1 hover:bg-blue-50 flex items-center  ease-in"
      >
        <AiOutlineFileText className="inline mr-2 text-xl" />
        All Applicants
      </Link>
      <Link
        to="/dashboard/shortlisted-resumes"
        className="p-3 inline-block rounded-lg mt-1 hover:bg-blue-50 flex items-center   ease-in"
      >
        <BiBookmark className="inline mr-2 text-xl" />
        Shortlisted Resumes
      </Link>
    </ul>
  );
};

export default SideNav;
