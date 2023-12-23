import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

const ApplicantsCard = ({ candidate }) => {
  const formattedDOB = moment.utc(candidate.dob).format("DD-MM-YYYY");

  return (
    <div className="py-2 bg-slate-50  w-full rounded-lg mb-3  ">
      <div>
        <div className="flex justify-between  px-6">
          <h1>
            <span className="text-xl capitalize font-bold my-0">
              {candidate.fullName}
            </span>
          </h1>

          <div className="flex gap-2">
            <Link
              to={`/dashboard/applicant-profile/${candidate?._id}`}
              className="btn btn-sm bg-green-100  border-none text-green-500  hover:bg-green-500 hover:text-white duration-400 ease-in-out"
            >
              Short Listed
            </Link>
            <Link
              to={`/dashboard/applicant-profile/${candidate?._id}`}
              className="btn btn-sm bg-blue-200 text-blue-500 border-none hover:bg-blue-500 hover:text-white duration-400 ease-in-out"
            >
              Details
            </Link>
          </div>
        </div>
        <hr className="mt-1" />
        <div className="grid grid-cols-7 gap-y-8 mt-1 text-md font-medium w-full  px-6">
          <h1 className=" col-span-2">Designation</h1>
          <h1 className=" ">Contact</h1>
          <h1 className=" ">Gender</h1>
          <h1 className=" ">Country</h1>
          <h1 className=" ">Date fo Birth</h1>
          <h1 className=" ">Projects</h1>
        </div>
        <div className="grid grid-cols-7 gap-x-4  text-sm w-full  px-6">
          <h1 className="capitalize col-span-2 ">{candidate?.designation}</h1>
          <h1 className="capitalize ">{candidate?.contactNumber}</h1>
          <h1 className="capitalize ">{candidate?.gender}</h1>
          <h1 className=" ">{candidate?.country}</h1>
          <h1 className=" ">{formattedDOB}</h1>
          <h1 className=" ">{candidate?.projects?.length}</h1>
        </div>
      </div>
    </div>
  );
};

export default ApplicantsCard;
