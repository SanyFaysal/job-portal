import moment from "moment";
import React from "react";

import { useParams } from "react-router-dom";
import human1 from "../../assets/images/photo1.jpg";
import { useGetApplicantQuery } from "../../features/auth/authApi";
import { CgMail, CgSmartphone } from "react-icons/cg";
const ApplicantProfile = () => {
  const { id } = useParams();
  const { data } = useGetApplicantQuery(id);
  const user = data?.data || {};
  const date = moment.utc(user?.dob).format("MM/DD/YYYY");
  return (
    <div>
      <div className="bg-white  mt-4 px-10 pt-5 pb-16 rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="w-full text-2xl font-semibold ">Applicant Profile</h1>
        </div>

        <div className="  grid lg:grid-cols-6 gap-4 py-5 mt-4  rounded ">
          <div>
            <div className="avatar w-full">
              <img src={human1} alt="" className="rounded w-20 h-20" />
            </div>
          </div>
          <div className="   col-span-2">
            <h1 className="font-bold text-3xl capitalize ">{user?.fullName}</h1>
            <h1 className="font-semibold ">{user?.designation}</h1>{" "}
            <h1 className=" flex items-center gap-1 mt-2 text-black">
              <CgMail className="text-xl mt-1" />

              {user?.email}
            </h1>
            <h1 className="mt-1 flex items-center gap-1  text-black">
              <CgSmartphone className="text-xl" />
              {user?.contactNumber}
            </h1>
          </div>
        </div>

        <h1 className="text-xl font-semibold my-5">More Info</h1>
        <div className="grid lg:grid-cols-6 ">
          <div className="col-span-2">
            <h3 className="font-semibold">Address</h3>
            <h3>{user?.address}</h3>
          </div>
          <div>
            <h3 className="font-semibold">City</h3>
            <h3>{user?.city}</h3>
          </div>
          <div>
            <h3 className="font-semibold">Country</h3>
            <h3>{user?.country}</h3>
          </div>
          <div>
            <h3 className="font-semibold">Gender</h3>
            <h3>{user?.gender}</h3>
          </div>

          <div>
            <h3 className="font-semibold">Date of Birth</h3>
            <h3>{new Date(user?.dob).toLocaleDateString()}</h3>
          </div>
        </div>
        <h1 className="text-xl font-semibold mt-5">Biodata</h1>
        <p>{user?.bio}</p>
      </div>
    </div>
  );
};

export default ApplicantProfile;
