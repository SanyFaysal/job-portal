import React, { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import Path from "../../components/reuseable/Path";
import { FiTrash } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useCreateJobMutation } from "../../features/job/jobApi";
import { toast } from "react-hot-toast";

const PostJob = () => {
  const { user } = useSelector((state) => state.auth);
  const [postJob, { data, isLoading, isSuccess, isError, error }] =
    useCreateJobMutation();
  const { handleSubmit, register, control, reset } = useForm();

  const {
    fields: resFields,
    append: resAppend,
    remove: resRemove,
  } = useFieldArray({ control, name: "responsibilities" });
  const {
    fields: skillFields,
    append: skillAppend,
    remove: skillRemove,
  } = useFieldArray({ control, name: "skills" });
  const {
    fields: reqFields,
    append: reqAppend,
    remove: reqRemove,
  } = useFieldArray({ control, name: "requirements" });

  const onSubmit = (data) => {
    data.companyName = user?.company?.companyName;
    const token = localStorage.getItem("accessToken");
    postJob({ token, data });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Success", { id: "postJob" });
      reset();
    }
    if (isError) {
      toast.error(error?.data?.error, { id: "postJob" });
    }
  }, [data, isLoading, isSuccess, isError, error, reset]);
  console.log({ data, isLoading, isSuccess, isError, error });
  return (
    <div className="">
      <Path from="dashboard" to="Post Job" />

      <form
        className=" shadow-lg lg:p-10 p-4 rounded-2xl lg:mt-5 gap-3 bg-white "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="w-full text-2xl font-semibold mb-5 lg:pt-0 pt-2">
          Post a New Job
        </h1>

        <div className="grid w-full lg:gap-x-10 gap-y-5 lg:grid-cols-2">
          <div className="flex flex-col  col-span-1">
            <label className="mb-2" htmlFor="position">
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              required
              placeholder="eg. Web Developer"
              {...register("jobTitle")}
              className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
            />
          </div>

          <div className="flex flex-col col-span-1 ">
            <label className="mb-2" htmlFor="companyName">
              Company Name
            </label>
            <input
              disabled
              className="bg-slate-100 w-full focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
              type="text"
              id="companyName"
              value={user?.company?.companyName}
              {...register("companyName")}
            />
          </div>

          <div className="flex flex-col  ">
            <label className="mb-2" htmlFor="employmentType">
              Job Type
            </label>
            <select
              type="text"
              id="employmentType"
              {...register("jobType")}
              className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
            >
              <option value="fullTime">Full Time</option>
              <option value="partTime">Part Time</option>
              <option value="freelance">Freelance</option>
            </select>
          </div>
          <div className="flex flex-col  ">
            <label className="mb-2" htmlFor="employmentType">
              Employment Type
            </label>
            <select
              type="text"
              id="employmentType"
              {...register("employmentType")}
              className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
            >
              <option value="on-site">On site </option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
          <div className="flex flex-col  ">
            <label className="mb-2" htmlFor="experience">
              Experience
            </label>
            <select
              type="text"
              id="experience"
              {...register("experience")}
              className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
            >
              <option value="fresher">Fresher </option>
              <option value="1 year experience">1 year experience</option>
              <option value="2 - 3 years experience">
                2 - 3 years experience
              </option>
              <option value="3 - 5 years experience">
                3 - 5 years experience
              </option>
              <option value="5 years + experience">5 years + experience</option>
            </select>
          </div>
          <div className="flex flex-col  ">
            <label className="mb-2" htmlFor="salaryRange">
              Salary Range
            </label>
            <input
              type="text"
              required
              id="salaryRange"
              {...register("salaryRange")}
              className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
            />
          </div>

          <div className="flex flex-col ">
            <label className="mb-2" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              required
              id="location"
              {...register("location")}
              className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col ">
            <label className="mb-2" htmlFor="location">
              Dateline
            </label>
            <input
              type="date"
              required
              id="dateline"
              {...register("dateline")}
              className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
            />
          </div>

          <div className="flex flex-col ">
            <label className="mb-2" htmlFor="location">
              Working time
            </label>
            <input
              type="text"
              id="workingTime"
              required
              {...register("workingTime")}
              className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2" htmlFor="location">
              Vacancy
            </label>
            <input
              required
              type="text"
              id="vacancy"
              {...register("vacancy")}
              className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
            />
          </div>

          <div className="flex flex-col ">
            <label className="mb-2" htmlFor="location">
              Applying Email
            </label>
            <input
              required
              type="text"
              id="applyingEmail"
              {...register("applyingEmail")}
              className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
            />
          </div>

          <div className="flex flex-col ">
            <label className="mb-2" htmlFor="location">
              Contact Number
            </label>
            <input
              required
              type="text"
              id="contactNumber"
              {...register("contactNumber")}
              className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col  lg:col-span-2">
            <label className="mb-2" htmlFor="jobDescription">
              Job Description
            </label>
            <textarea
              required
              rows={8}
              {...register("jobDescription")}
              id="jobDescription"
              className=' bg-slate-100 rounded-lg  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"'
            />
          </div>
          <div className="flex flex-col lg:col-span-2">
            <label className="mb-2">Skills</label>
            <div>
              <div className="grid lg:grid-cols-3 gird-cols-1 gap-5">
                {skillFields.map((item, index) => {
                  return (
                    <div
                      key={item.key}
                      className="flex items-center gap-3 mb-5"
                    >
                      <input
                        className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
                        type="text"
                        required
                        {...register(`skills[${index}]`)}
                      />
                      <button
                        type="button"
                        onClick={() => skillRemove(index)}
                        className="grid place-items-center  rounded-full flex-shrink-0 bg-red-500/20   h-11 w-11 group transition-all hover:bg-red-500"
                      >
                        <FiTrash
                          className="text-red-500 group-hover:text-white transition-all"
                          size="20"
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => skillAppend("")}
                  className="btn   bg-blue-50 text-blue-500 border-none hover:border-none hover:bg-blue-500 hover:text-white duration-400 ease-in py-3 "
                >
                  Add Skill
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:col-span-2">
            <label className="mb-2">Responsibilities</label>
            <div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-5 gap-x-16">
                {resFields.map((item, index) => {
                  return (
                    <div
                      key={item.key}
                      className=" mb-5 flex items-center gap-3 w-full"
                    >
                      <input
                        className="bg-slate-100 w-full focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
                        type="text"
                        required
                        {...register(`responsibilities[${index}]`)}
                      />
                      <button
                        type="button"
                        onClick={() => resRemove(index)}
                        className="grid place-items-center rounded-full flex-shrink-0 bg-red-500/20   h-11 w-11 group transition-all hover:bg-red-500"
                      >
                        <FiTrash
                          className="text-red-500 group-hover:text-white transition-all"
                          size="20"
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => resAppend("")}
                  className="btn   bg-blue-50 text-blue-500 border-none hover:border-none hover:bg-blue-500 hover:text-white duration-400 ease-in py-3 "
                >
                  Add Responsibility
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:col-span-2">
            <label className="mb-2">Requirements</label>
            <div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-5 ">
                {reqFields.map((item, index) => {
                  return (
                    <div
                      key={item.key}
                      className=" mb-5 flex items-center gap-3 w-full"
                    >
                      <input
                        className="bg-slate-100 w-full focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
                        type="text"
                        required
                        {...register(`requirements[${index}]`)}
                      />
                      <button
                        type="button"
                        onClick={() => reqRemove(index)}
                        className="grid place-items-center rounded-full flex-shrink-0 bg-red-500/20   h-10 w-10 group transition-all hover:bg-red-500"
                      >
                        <FiTrash
                          className="text-red-500 group-hover:text-white transition-all"
                          size="20"
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => reqAppend("")}
                  className="btn   bg-blue-50 text-blue-500 border-none hover:border-none hover:bg-blue-500 hover:text-white duration-400 ease-in py-3 "
                >
                  Add Requirement
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center w-full mt-3">
          <button
            className="btn   bg-green-50 text-green-500 border-none hover:border-none hover:bg-green-500 hover:text-white duration-400 ease-in py-3"
            type="submit"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJob;
