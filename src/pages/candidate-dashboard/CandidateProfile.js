import React, { useEffect } from "react";
import Path from "../../components/reuseable/Path";
import moment from "moment";
import human1 from "../../assets/images/photo1.jpg";
import { CgMail, CgSmartphone } from "react-icons/cg";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../features/auth/authSlice";
import CandidateProjectShow from "../../components/profileComponent/CandidateProjectShow";
const CandidateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const token = localStorage.getItem("accessToken");
  useEffect(() => {
    dispatch(fetchUser(token));
  }, [token, dispatch]);
  return (
    <div>
      <Path from="dashboard" to="Profile" />
      <div className="bg-white  mt-4 px-10 pt-5 pb-16 rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="w-full text-2xl font-semibold ">Profile</h1>
          <button
            onClick={() => navigate("/dashboard/edit-candidate-profile")}
            className="btn btn-sm  border-none hover:border-none rounded hover:bg-blue-500 hover:text-white duration-400 ease-in px-4 bg-blue-100 text-blue-500"
          >
            <span className="mr-2">Update</span> 🖊{" "}
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

        <h1 className="text-xl font-semibold mt-5 mb-3">Projects</h1>
        {user?.projects?.map((project, index) => (
          <CandidateProjectShow
            project={project}
            key={index}
            index={index}
            setProjects={[]}
            projects={[1, 2]}
            projectData={{ title: "" }}
            setProjectData={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default CandidateProfile;
