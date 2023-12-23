import React from "react";
import { BiBookmark } from "react-icons/bi";
import { CgWorkAlt } from "react-icons/cg";
import { IoIosPaper } from "react-icons/io";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { useGetMyBlogsQuery } from "../../features/blog/blogApi";

const CandidateDashboardHome = () => {
  const { user } = useSelector((state) => state.auth);
  const { data } = useGetMyBlogsQuery(user?._id);
  return (
    <div className="mt-5 ml-4 ">
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-3 items-center justify-between my-8 ">
        <div className="bg-white  border-b-[#4485ff] border-b-4 text-[#4485ff]  p-7 flex justify-between items-center rounded-lg">
          <div>
            <p className=" rounded-lg bg-blue-100 p-2">
              <span className="">
                {" "}
                <CgWorkAlt className="text-5xl " />
              </span>
            </p>
          </div>
          <div className="">
            <h1 className="text-xl font-semibold">Total Applied Jobs</h1>
            <p className="text-5xl text-end font-bold">
              {user?.applications?.length}
            </p>
          </div>
        </div>
        {/* <div className="bg-white  border-b-[#6f6ff3] border-b-4 text-[#6f6ff3] p-7 flex justify-between items-center rounded-lg">
          <div>
            <p className="border bg-[#e8e8ff] rounded-lg p-3">
              <span className="">
                {" "}
                <IoIosPaper className="text-4xl " />
              </span>
            </p>
          </div>
          <div className="">
            <h1 className="text-xl font-semibold">Applications sent</h1>
            <p className="text-5xl text-end font-bold">50</p>
          </div>
        </div> */}
        <div className="bg-white text-[#b952f4f8]  border-b-4 border-b-[#b952f4f8] p-7 flex justify-between items-center  rounded-lg">
          <div>
            <p className="bg-[#f5e8fcf8] rounded-lg p-3">
              <span className="">
                {" "}
                <BiBookmark className="text-4xl " />
              </span>
            </p>
          </div>
          <div className="">
            <h1 className="text-xl font-semibold">Total Blogs</h1>
            <p className="text-5xl text-end font-bold">{data?.data?.length}</p>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <h1>Some features of Dashboard home are under development </h1>
        <h1>These will coming soon ...</h1>
        <p className="mt-5">You can go to your Profile </p>

        <Link
          to="/dashboard/candidate-profile"
          className="text-blue-500 underline cursor-pointer"
        >
          Go to Profile
        </Link>
      </div>
    </div>
  );
};

export default CandidateDashboardHome;
