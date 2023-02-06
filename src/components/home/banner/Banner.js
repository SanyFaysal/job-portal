import React from 'react';
import banner from '../../../assets/images/banner-img-1.png';
import './banner.css';
import { MdHomeWork, MdWorkspaces } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { GiClockwork } from 'react-icons/gi';

const Banner = () => {
  return (
    <div className="bannerBg lg:px-16 px-3 ">
      <div className="flex lg:flex-row-reverse flex-col">
        <div className="w-2/4 m-5 grid">
          <div className="flex justify-between w-full mt-8">
            <div className="featureCard1 lg:w-[150px] h-[10vh] px-3 py-2 mr-5  rounded-xl flex justify-between items-center bg-white">
              <p className="ml-auto mr-5 textColor">
                <MdHomeWork className="text-3xl " />
              </p>
              <p className="text-sm font-bold text-end textColor">
                Work from home{' '}
              </p>
            </div>
            <div className="featureCard2 lg:w-[150px]  h-[10vh] px-3 py-2 ml-5 rounded-xl flex justify-between items-center bg-white">
              <p className="ml-auto mr-5 textColor">
                <IoIosPeople className="text-3xl " />
              </p>
              <p className="text-sm font-bold text-end textColor">
                10k + Candidates
              </p>
            </div>
          </div>
          <img src={banner} className="w-full" alt="banner" />
          <div className="flex justify-between mt-[-180px] ">
            <div className="featureCard2 w-[150px] h-[10vh] px-3 py-3 mr-5   rounded-xl flex justify-between items-center bg-white">
              <p className="ml-auto mr-5 textColor">
                <GiClockwork className="text-3xl " />
              </p>
              <p className="text-sm font-bold text-end textColor">
                Start your journey from today
              </p>
            </div>
            <div className="featureCard1 w-[150px] h-[10vh] px-3 py-2 ml-5  rounded-xl flex justify-between items-center bg-white">
              <p className="ml-auto mr-5 textColor">
                <MdWorkspaces className="text-3xl " />
              </p>
              <p className="text-sm font-bold text-end textColor">
                10+ New job in everyday
              </p>
            </div>
          </div>
        </div>
        <div className="my-auto lg:mr-5 ">
          <h1 className="text-5xl font-bold">
            The <span className="textColor mx-2 ">Easiest Way</span>
            to Get Your New Job
          </h1>
          <p className="py-6 text-lg">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
