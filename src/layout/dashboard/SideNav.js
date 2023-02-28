import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineArrowBackIosNew, MdOutlineWorkOutline } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { IoMdSend } from 'react-icons/io';
import { AiOutlineFileText } from 'react-icons/ai';
import { BiBookmark, BiSliderAlt } from 'react-icons/bi';
import { RxDashboard } from 'react-icons/rx';
import { useSelector } from 'react-redux';

const SideNav = () => {
  const { pathname } = useLocation();
  const { user: { role } } = useSelector(state => state.auth);
  const isActive = (path) => pathname === `/dashboard${path}`;

  let candidateRoutes = role === 'candidate' ?
    <>


      <Link
        to="/dashboard"
        className={`p-3 inline-block rounded-lg mt-1 hover:bg-blue-50 flex items-center  ease-in ${isActive('') && 'bg-blue-100'
          }`}
      >
        <RxDashboard className="inline mr-2 text-xl" />
        <span className=""> Dashboard</span>
      </Link>
      <Link
        to="/dashboard/candidate-profile"
        className={`p-3 inline-block rounded-lg mt-1 hover:bg-blue-50 flex items-center  ease-in ${isActive('/candidate-profile') && 'bg-blue-100'
          }`}
      >
        <CgProfile className="inline mr-2 text-xl" />
        <span className=""> Profile</span>
      </Link>
      <Link
        to="/dashboard/applied-jobs"
        className={`p-3 inline-block rounded-lg mt-1 hover:bg-blue-50 flex items-center  ease-in ${isActive('/applied-jobs') && 'bg-blue-100'
          }`}
      >
        <BiSliderAlt className="inline mr-2 text-xl" />
        <span className=""> Applied Jobs</span>
      </Link>

    </> : role === 'employee' ? <>

      <Link
        to="/dashboard"
        className={`p-3 inline-block rounded-lg mt-1 hover:bg-blue-50 flex items-center  ease-in ${isActive('') && 'bg-blue-100'
          }`}
      >
        <RxDashboard className="inline mr-2 text-xl" />
        <span className=""> Dashboard</span>
      </Link>

      <Link
        to="/dashboard/employee-profile"
        className={`p-3 inline-block rounded-lg mt-1 hover:bg-blue-50 flex items-center  ease-in ${isActive('/employee-profile') && 'bg-blue-100'
          }`}
      >
        <CgProfile className="inline mr-2 text-xl" />
        <span className=""> Profile</span>
      </Link>
      <Link
        to="/dashboard/post-job"
        className={`p-3 inline-block rounded-lg mt-1 hover:bg-blue-50 flex items-center  ease-in ${isActive('/post-job') && 'bg-blue-100'
          }`}
      >
        <IoMdSend className="inline mr-2 text-xl" />
        Post A Job
      </Link>
      <Link
        to="/dashboard/manage-jobs"
        className={`p-3 inline-block rounded-lg mt-1 hover:bg-blue-50 flex items-center  ease-in ${isActive('/manage-jobs') && 'bg-blue-100'
          }`}
      >
        <MdOutlineWorkOutline className="inline mr-2 text-xl" />
        Manage Jobs
      </Link>

      <Link
        to="/dashboard/all-applicants"
        className={`p-3 inline-block rounded-lg mt-1 hover:bg-blue-50 flex items-center  ease-in ${isActive('/all-applicants') && 'bg-blue-100'
          }`}
      >
        <AiOutlineFileText className="inline mr-2 text-xl" />
        All Applicants
      </Link>
      <Link
        to="/dashboard/shortlisted-resumes"
        className={`p-3 inline-block rounded-lg mt-1 hover:bg-blue-50 flex items-center  ease-in ${isActive('/shortlisted-resumes') && 'bg-blue-100'
          }`}
      >
        <BiBookmark className="inline mr-2 text-xl" />
        Shortlisted Resumes
      </Link>

    </> : <Link to='/' className="p-3 inline-block rounded-lg mt-3 mb-6 font-semibold hover:translate-x-[-5px] flex items-center duration-500 hover:text-blue-500 ease-in-out">Register your account</Link>
  return (
    <ul className=" p-4  flex flex-col  h-full">
      <Link
        to="/"
        className="p-3 inline-block rounded-lg mt-3 mb-6 font-semibold hover:translate-x-[-5px] flex items-center duration-500 hover:text-blue-500 ease-in-out"
      >
        <MdOutlineArrowBackIosNew className="inline mr-2 " /> Back to Home
      </Link>
      {
        candidateRoutes
      }
    </ul>
  );
};

export default SideNav;
