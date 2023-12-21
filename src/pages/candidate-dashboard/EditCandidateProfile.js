import moment from "moment";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

import {
  useGetMeQuery,
  useUserRegisterMutation,
} from "../../features/auth/authApi";
import { useLocation, useParams, useRoutes } from "react-router-dom";
import ReactQuill from "react-quill";
import { BsTrash } from "react-icons/bs";

const EditCandidateProfile = () => {
  const location = useLocation();
  const [projectData, setProjectData] = useState({
    title: "",
    duration: {
      from: "",
      till: "",
    },
    details: "",
  });
  const [projectDetails, setProjectDetails] = useState();
  const [projects, setProjects] = useState([]);
  const token = localStorage.getItem("accessToken");
  const [countries, setCountries] = useState([]);

  const [updateUser, { data: updated, isSuccess, isError, error }] =
    useUserRegisterMutation();
  const {
    data: { data: user },
  } = useGetMeQuery(token);

  const {
    address,
    bio,
    city,
    contactNumber,
    designation,
    dob,
    email,
    fullName,
    _id,
    gender,
    country,
  } = user;
  const [editGender, setEditGender] = useState(gender);
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      email: email,
      country: country,
      gender: gender,
    },
  });

  const dispatch = useDispatch();

  const dobFormat = moment.utc(dob).format("YYYY-MM-DD");
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const onSubmit = (data) => {
    data.gender = editGender;
    console.log({ update: data });
    updateUser({ id: _id, user: data });
  };
  const addProjectData = () => {
    const projectData = {
      title: "",
    };
    setProjects();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Update successful", { id: "register" });
    }
    if (isError) {
      toast.error(error?.data?.error, { id: "register" });
    }
  }, [isSuccess, isError, error, reset, dispatch, user]);
  const updateProfilePage = location.pathname?.includes(
    "edit-candidate-profile"
  );

  useEffect(() => {
    setProjectData({ details: projectDetails, ...projectData });
  }, [projectDetails]);
  console.log(projects);
  return (
    <div className="">
      <div className="flex justify-center items-center overflow-auto ">
        <div className=" p-2 rounded-2xl">
          <form
            className=" shadow-2lg lg:p-8 p-4 bg-white border rounded-2xl  gap-3  justify-between"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="w-full text-2xl  mb-5 font-semibold ">
              {!updateProfilePage
                ? " Register as Candidate"
                : "Personal Information"}
            </h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1" htmlFor="firstName">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  defaultValue={fullName}
                  {...register("fullName")}
                  className={` w-full bg-slate-50  border capitalize   focus:outline-none  focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>

              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  disabled
                  {...register("email")}
                  className={` w-full bg-slate-50 border cursor-not-allowed	   focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>

              <div className="flex flex-col w-full max-w-xs mt-3">
                <h1 className="mb-2">Gender</h1>
                <div className="flex gap-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="male"
                      required
                      defaultChecked={editGender === "male" ? true : false}
                      {...register("gender")}
                      value="male"
                      onChange={() => setEditGender("male")}
                      className="radio radio-sm "
                    />
                    <label className="ml-2 text-lg" for="male">
                      Male
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="female"
                      defaultChecked={editGender === "female" ? true : false}
                      {...register("gender")}
                      value="female"
                      onChange={() => setEditGender("female")}
                      className="radio radio-sm "
                    />
                    <label className="ml-1 text-lg" for="female">
                      Female
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="other"
                      {...register("gender")}
                      onChange={() => setEditGender("other")}
                      defaultChecked={editGender === "other" ? true : false}
                      value="other"
                      className="radio radio-sm "
                    />
                    <label className="ml-2 text-lg " for="other">
                      Other
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1" htmlFor="address">
                  Date of Birth
                </label>
                <input
                  required
                  defaultValue={dobFormat}
                  type="date"
                  {...register("dob")}
                  id="address"
                  className={` w-full bg-slate-50 border   focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1" htmlFor="address">
                  Designation
                </label>
                <input
                  type="text"
                  required
                  defaultValue={designation}
                  {...register("designation")}
                  id="designation"
                  className={` w-full bg-slate-50 border capitalize  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1" htmlFor="address">
                  Contact Number
                </label>
                <input
                  type="text"
                  required
                  defaultValue={contactNumber}
                  {...register("contactNumber")}
                  id="contactNumber"
                  className={` w-full bg-slate-50 border   focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-2">
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1" for="country">
                  Country
                </label>
                <select
                  required
                  {...register("country")}
                  id="country"
                  defaultValue={country}
                  className={` w-full bg-slate-50 border   focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                >
                  {countries
                    .sort((a, b) =>
                      a?.name?.common?.localeCompare(b?.name?.common)
                    )
                    .map(({ name }) => (
                      <option
                        value={name.common}
                        selected={country === name.common}
                      >
                        {name.common}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  required
                  defaultValue={address}
                  {...register("address")}
                  id="address"
                  className={` w-full bg-slate-50 border   focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1" htmlFor="city">
                  City
                </label>
                <input
                  required
                  type="text"
                  defaultValue={city}
                  {...register("city")}
                  id="city"
                  className={` w-full bg-slate-50 border   focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>
            </div>
            <div className="flex flex-col w-full mt-2 ">
              <label className="mb-1" htmlFor="bio">
                About You
              </label>
              <textarea
                rows={3}
                required
                type="text"
                {...register("bio")}
                defaultValue={bio}
                id="bio"
                className={` w-full bg-slate-50 border   focus:outline-none focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
              />
            </div>
            {updateProfilePage && (
              <div>
                <div className="flex justify-between  mt-8 mb-3 items-center">
                  <h1 className="w-full text-2xl  font-semibold ">Projects</h1>
                  <button className="btn bg-green-100  border-0 hover:bg-green-500 hover:text-white text-green-500 btn-sm">
                    New Project
                  </button>
                </div>

                <div className="bg-slate-50  rounded-xl px-5 pt-3">
                  <p className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Project Data</span>
                    <BsTrash className="inline text-red-500" />
                  </p>
                  <div className=" grid grid-cols-2 gap-2 py-2">
                    <div className="col-span-1">
                      {" "}
                      <label className="mb-1" htmlFor="bio">
                        Project Title
                      </label>
                      <input
                        type="text"
                        onChange={(e) =>
                          setProjectData({
                            title: e.target.value,
                            ...projectData,
                          })
                        }
                        className={` w-full bg-white mb-2 border   focus:outline-none  focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                      />
                    </div>
                    <div className="col-span-1 ">
                      {" "}
                      <label className="mb-1" htmlFor="bio">
                        Project duration
                      </label>
                      <div className="flex items-center gap-2">
                        From
                        <input
                          type="text"
                          onChange={(e) =>
                            setProjectData({
                              duration: {
                                from: e.target.value,
                                ...projectData?.duration,
                              },
                              ...projectData,
                            })
                          }
                          className={` w-full bg-white border    focus:outline-none focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                        />
                        Till{" "}
                        <input
                          type="text"
                          onChange={(e) =>
                            setProjectData({
                              ...projectData,
                              duration: {
                                till: e.target.value,
                                ...projectData?.duration,
                              },
                            })
                          }
                          className={` w-full bg-white border   focus:outline-none  focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                        />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <label className="mb-1" htmlFor="bio">
                        Project Details
                      </label>
                      <ReactQuill
                        theme="snow"
                        className={` w-full bg-white  focus:outline-none  focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                        value={projectDetails}
                        onChange={setProjectDetails}
                      />
                    </div>
                    <div className="flex justify-end col-span-2 mb-4 mt-2">
                      <button
                        onClick={() =>
                          setProjects([...projects, projectDetails])
                        }
                        className="btn bg-green-100  border-0 hover:bg-green-500 hover:text-white text-green-500 btn-sm"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="grid lg:grid-cols-1 grid-cols-1 gap-5 ">
              <div className="flex lg:justify-end justify-center items-center w-full my-auto ">
                <button
                  className="btn inline-block lg:mt-20   bg-blue-200 text-blue-500 border-none hover:border-none hover:bg-slate-500  hover:text-white"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCandidateProfile;
