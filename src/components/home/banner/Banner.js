import React, { useState } from "react";
import banner from "../../../assets/images/banner-img-1.png";
import "./banner.css";
import { MdHomeWork, MdWorkspaces } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { GiClockwork } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import HomeJobSearchModal from "../../modal/HomeJobSearchModal";
import {
  useGetJobHomeSearchMutation,
  useGetJobsQuery,
} from "../../../features/job/jobApi";

const Banner = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [hover, setHover] = useState(false);

  const [getSearchJobs, { isLoading, isSuccess, data }] =
    useGetJobHomeSearchMutation();

  const handleSearch = () => {
    console.log({ aichee: true });
    getSearchJobs(jobTitle);
  };
  return (
    <div className="bannerBg lg:px-16 px-3 mt-[-100px] pt-[100px]">
      <div className="flex lg:flex-row-reverse flex-col items-center">
        <div className="lg:w-3/5 w-full  grid">
          <div className="flex justify-between lg:w-full mt-8">
            <div className="featureCard1 lg:w-[150px] lg:h-[10vh] px-3 py-2 lg:mr-10 mr-5  rounded-xl flex justify-between items-center bg-white">
              <p className="ml-auto mr-5 textColor">
                <MdHomeWork className="text-3xl " />
              </p>
              <p className="text-sm font-bold text-end textColor">
                Work from home{" "}
              </p>
            </div>
            <div className="featureCard2 lg:w-[150px]  h-[10vh] px-3 py-2 lg:ml-10 mr-5 rounded-xl flex justify-between items-center bg-white">
              <p className="ml-auto mr-5 textColor">
                <IoIosPeople className="text-3xl " />
              </p>
              <p className="text-sm font-bold text-end textColor">
                10k + Candidates
              </p>
            </div>
          </div>
          <img
            src={banner}
            className="w-full lg:mx-5 mt-[-25px]"
            alt="banner"
          />
          <div className="flex justify-between mt-[-180px] ">
            <div className="featureCard2 w-[150px] h-[10vh] px-3 py-3 mr-5 lg:mr-26   rounded-xl flex justify-between items-center bg-white">
              <p className="ml-auto mr-5 textColor">
                <GiClockwork className="text-3xl " />
              </p>
              <p className="text-sm font-bold text-end textColor">
                Start your journey from today
              </p>
            </div>
            <div className="featureCard1 w-[150px] h-[10vh] px-3 py-2 ml-5 lg:ml-16  rounded-xl flex justify-between items-center bg-white">
              <p className="ml-auto mr-5 textColor">
                <MdWorkspaces className="text-3xl " />
              </p>
              <p className="text-sm font-bold text-end textColor">
                10+ New job in everyday
              </p>
            </div>
          </div>
        </div>
        <div className="lg:mr-5 mt-5 ">
          <h1 className="lg:text-5xl text-3xl font-bold">
            The <span className="textColor mx-2 ">Easiest Way</span>
            to Get Your New Job
          </h1>
          <p className="py-6 text-xl font-semibold">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
          <div>
            <p className="my-3">Find Jobs, Employment & Career Opportunities</p>

            <div
              className="grid lg:grid-cols-8 gap-5 lg:w-3/4 mt-4"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className=" col-span-5 mt-[-20px]">
                <p className={`text-xs mb-1 `}>
                  {!jobTitle && hover ? (
                    <span className="text-red-500  rounded-lg ">
                      Write something
                    </span>
                  ) : (
                    <span className="block h-4"></span>
                  )}{" "}
                </p>
                <input
                  type="text"
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder={`Job title, keywords or company `}
                  className={`text-sm w-full  px-5 py-4  input input-bordered ${
                    !jobTitle && hover && "border border-red-500"
                  }`}
                />
              </div>
              <div className="lg:col-span-3 ">
                <label
                  htmlFor="my-modal-6"
                  onClick={handleSearch}
                  className={`btn w-full   btn-xl flex ${
                    !jobTitle && "btn-disabled cursor-not-allowed"
                  } `}
                >
                  {/* <label htmlFor="my-modal-6" className="btn">open modal</label> */}
                  <BsSearch className="mx-2 inline-block" />{" "}
                  <span>Search Jobs</span>
                </label>
              </div>
            </div>
            <p className="my-4  text-xs">
              <span className="font-bold">Popular Searches : </span> Frontend
              Developer, Full stack developer, Backend Developer, Web Designer
            </p>
          </div>
        </div>
      </div>
      <HomeJobSearchModal data={data} />
    </div>
  );
};

export default Banner;
