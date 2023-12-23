import React from "react";
import { BsDot } from "react-icons/bs";
const JobInfo = ({ job }) => {
  const { jobDescription, responsibilities, requirements, skills } = job;
  return (
    <div>
      <div>
        <h1 className="mb-1 text-xl font-semibold">Job Details</h1>
        <hr />
        <p className="text-justify mt-3 capitalize">{jobDescription}</p>
      </div>
      <div className="my-4">
        <h1 className="mb-2 mt-5 text-xl font-semibold">Skills </h1>
        <hr />
        <div className="flex flex-wrap gap-4 mt-4">
          {skills.map((skill, i) => (
            <p key={i} className=" bg-slate-50 px-3 py-1 rounded ">
              {skill}
            </p>
          ))}
        </div>
      </div>
      <div className="my-4">
        <h1 className="mb-2 mt-5 text-xl font-semibold">Key Requirements</h1>
        <hr />

        {requirements.map((res, i) => (
          <p key={i} className="mt-3">
            <BsDot className="inline mr-2 text-2xl" />
            {res}
          </p>
        ))}
      </div>
      <div className="my-4">
        <h1 className="mb-2 mt-5 text-xl font-semibold">
          Key Responsibilities
        </h1>
        <hr />

        {responsibilities.map((res, i) => (
          <p key={i} className="mt-3">
            <BsDot className="inline mr-2 text-2xl" />
            {res}
          </p>
        ))}
      </div>
    </div>
  );
};

export default JobInfo;
