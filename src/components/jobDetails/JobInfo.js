import React from 'react';
import { BsRecord2 } from 'react-icons/bs';
const JobInfo = ({ job }) => {
  const { jobDescription, responsibilities, skills } = job;
  return (
    <div>
      <div>
        <h1 className="mb-1 text-xl font-semibold">Job Details</h1>
        <hr />
        <p className="text-justify mt-3 capitalize">
          {jobDescription}
        </p>
      </div>
      <div className="my-4">
        <h1 className="mb-2 mt-5 text-xl font-semibold">
          Key Responsibilities
        </h1>
        <hr />

        {
          responsibilities.map((res, i) => <p key={i} className="mt-3">
            <BsRecord2 className="inline mr-2 text-2xl" />
            {res}
          </p>)
        }


      </div>
      <div className="my-4">
        <h1 className="mb-2 mt-5 text-xl font-semibold">Skill </h1>
        <hr />
        {
          skills.map((skill, i) => <p key={i} className="my-2">
            <BsRecord2 className="inline mr-2 text-2xl" />
            {skill}
          </p>)
        }

      </div>
    </div>
  );
};

export default JobInfo;
