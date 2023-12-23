import moment from "moment";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import {
  useGetMeQuery,
  useUserRegisterMutation,
} from "../../features/auth/authApi";
import { useLocation, useParams, useRoutes } from "react-router-dom";
import ReactQuill from "react-quill";
import { BsTrash } from "react-icons/bs";
import ClientAddProject from "../../components/modal/ClientAddProjectModal";
import { BiPlus } from "react-icons/bi";
import CandidateProjectShow from "../../components/profileComponent/CandidateProjectShow";
import useLoadCountry from "../../hook/useLoadCountry";
import EditProjectModal from "../modal/EditProjectModal";

const EditCandidateProjects = () => {
  const [selectedProject, setSelectedProject] = useState();

  const token = localStorage.getItem("accessToken");
  const { data } = useGetMeQuery(token);

  return (
    <>
      <div className="bg-white  px-5 py-4 rounded-lg ">
        <div className="grid lg:grid-cols-1 grid-cols-1 gap-5">
          <div className="flex justify-between   items-center">
            <h1 className=" text-2xl  font-semibold ">Projects</h1>

            <label
              htmlFor="client_add_project"
              className="flex items-center gap-1  px-3 py-2 rounded bg-blue-50 text-blue-500"
            >
              <BiPlus className="text-xl" /> Add Project
            </label>
          </div>
          {/* previous Project */}
          <div className="grid grid-cols-1">
            {data?.data?.projects?.map((project, index) => (
              <CandidateProjectShow
                project={project}
                key={index}
                setSelectedProject={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </div>
      <ClientAddProject />
      <EditProjectModal selectedProject={selectedProject} />
    </>
  );
};

export default EditCandidateProjects;
