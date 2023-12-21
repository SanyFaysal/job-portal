import React from "react";
import { Link } from "react-router-dom";
import { useGetJobsQuery } from "../../features/job/jobApi";
import Job from "../reuseable/Job";

const HomeJobSearchModal = ({ jobTitle }) => {
  const { data } = useGetJobsQuery({
    sort: "",
    page: 1,
    limit: 10,
    filter: {
      jobTitle: jobTitle,
      jobType: "",
      experience: "",
    },
  });

  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box lg:w-11/12 lg:max-w-5xl">
          <div className="my-5 text-xl text-center font-semibold">
            Total Job Found: {data?.totalFound}
          </div>
          <div className="grid grid-cols-1 gap-y-3">
            {data?.data.map((job) => (
              <Job job={job} />
            ))}
          </div>
          <div className="modal-action">
            <Link
              to="/jobs"
              className="bg-green-500 py-2 mr-2 px-4 rounded-lg text-white "
            >
              Load More Jobs
            </Link>
            <label
              htmlFor="my-modal-6"
              className="bg-red-500 py-2 px-4 rounded-lg text-white"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeJobSearchModal;
