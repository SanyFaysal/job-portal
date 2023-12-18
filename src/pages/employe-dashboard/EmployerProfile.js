import React from "react";

import Path from "../../components/reuseable/Path";
import human1 from "../../assets/images/photo1.jpg";
import { useNavigate } from "react-router-dom";
import { useGetMeQuery } from "../../features/auth/authApi";
import { CgMail, CgSmartphone } from "react-icons/cg";

const EmployerProfile = () => {
  const token = localStorage.getItem("accessToken");
  // const { user } = useSelector(state => state.auth);
  const {
    data: { data: user },
  } = useGetMeQuery(token);
  const navigate = useNavigate();

  return (
    <div>
      <Path from="dashboard" to="Profile" />
      <div className="bg-white  mt-4 px-10 pt-5 pb-16 rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="w-full text-2xl font-semibold ">Profile</h1>
          <button
            onClick={() => navigate("/dashboard/edit-employer-profile")}
            className="btn btn-sm  border-none hover:border-none rounded hover:bg-blue-500 hover:text-white duration-400 ease-in px-4 bg-blue-100 text-blue-500"
          >
            <span className="mr-2">Edit</span> 🖊{" "}
          </button>
        </div>

        <div className="  grid lg:grid-cols-6 gap-4 py-5 mt-4  rounded ">
          <div>
            <div className="avatar w-full">
              <img src={human1} alt="" className="rounded w-20 h-20" />
            </div>
          </div>
          <div className="   col-span-2">
            <h1 className="font-bold text-3xl capitalize ">{user?.fullName}</h1>
            <h1 className="font-semibold ">
              {user?.company?.roleInCompany}
            </h1>{" "}
            <h1 className="col-span-4  ">
              {" "}
              at{" "}
              <span className="font-semibold">
                {user?.company?.companyName}
              </span>
            </h1>
            <h1 className=" flex items-center gap-1  text-black">
              <CgMail className="text-xl mt-1" />

              {user?.email}
            </h1>
            <h1 className=" flex items-center gap-1  text-black">
              <CgSmartphone className="text-xl" />
              {user?.contactNumber}
            </h1>
          </div>
        </div>
        <h2 className="text-2xl font-semibold  mt-5 mb-3">Company Details </h2>

        <div className="lg:grid lg:grid-cols-4">
          <div className="  ">
            <div className="  ">
              <h1 className="font-semibold ">Name</h1>
            </div>
            <p className="col-span-4  ">{user?.company?.companyName}</p>
          </div>

          <div className="  ">
            <div className="  ">
              <h1 className="font-semibold "> Location</h1>
            </div>
            <p className="col-span-4  ">{user?.company?.companyLocation}</p>
          </div>

          <div className="  ">
            <div className="   my-auto">
              <h1 className="font-semibold "> Company Type</h1>
            </div>

            <p className=" col-span-4  my-auto">
              {user?.company?.companyCategory}
            </p>
          </div>

          <div className="  ">
            <div className="   my-auto">
              <h1 className="font-semibold ">Employee Range</h1>
            </div>

            <p className=" col-span-4  my-auto">
              {user?.company?.employeeRange}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerProfile;
