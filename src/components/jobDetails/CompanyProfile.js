import React from 'react';

import companyPic from '../../assets/images/banner-img-1.png';
const CompanyProfile = ({ job }) => {
  console.log(job);
  const { postedBy: { id: { company } } } = job;
  const { companyName, companyCategory, companyLocation, employeeRange } = company;
  return (
    <div className="bg-slate-100 rounded-lg">
      <div className="px-6 py-8">
        <h1 className="font-semibold text-xl  mb-3">Company Profile</h1>
        <div className="flex gap-3 mt-5 ">
          <img src={companyPic} className="w-20 h-20" alt="" />
          <div className="my-auto">
            <h3 className="font-semibold">
              {companyName}
            </h3>
            <p className="text-sm text-blue-500 font-semibold">{companyCategory}</p>
          </div>
        </div>
        <div className="flex gap-3 mt-5 justify-between">
          <h3 className="font-semibold">Company size</h3>
          <div>
            <p className="font-semibold text-sm text-end">{employeeRange}</p>
          </div>
        </div>


        <div className="flex gap-3 mt-5 justify-between">
          <h3 className="font-semibold">Location</h3>
          <div>
            <p className="font-semibold text-end text-sm">{companyLocation}</p>
          </div>
        </div>

        <div className="flex gap-3 justify-center w-full mt-8 ">
          <button className="btn w-full bg-blue-200 text-blue-500 border-none hover:bg-blue-500 hover:text-white duration-500 ease-in-out">
            { }
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
