import React, { useEffect } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";

import { useLocation } from "react-router-dom";
import { useDeleteProjectMutation } from "../../features/auth/authApi";
import toast from "react-hot-toast";
import { getToken } from "../../helpers/getToken";

export default function CandidateProjectShow({ project, setSelectedProject }) {
  const location = useLocation();
  const token = getToken();
  const isEditProjectsPage = location.pathname.includes(
    "edit-candidate-projects"
  );

  const [deleteProject, { isSuccess, isLoading, isError, error }] =
    useDeleteProjectMutation();

  const handleDeleteProject = (projectId) => {
    deleteProject({ projectId, token });
  };

  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading...", { id: "delete" });
    }
    if (isSuccess) {
      toast.success("Deletion successful", { id: "delete" });
    }
    if (isError) {
      toast.error(error?.data?.error, { id: "delete" });
    }
  }, [isSuccess, isError, error]);

  return (
    <div>
      <div className=" grid grid-cols-1 rounded-xl  mb-4 border p-3">
        <div className="w-full flex justify-between items-start">
          <div className="">
            <h1 className="text-2xl text-blue-500 font-semibold">
              {project?.title}
            </h1>
            <em className="">
              {project?.duration?.from} - {project?.duration?.till}
            </em>
          </div>
          {isEditProjectsPage && (
            <div className="gap-3 flex">
              <div
                className="px-2 border-green-500 rounded bg-green-50 border"
                onClick={() => setSelectedProject(project)}
              >
                <label htmlFor="edit_project_modal" className=" ">
                  <BsPencil className="inline text-green-500" />
                </label>
              </div>

              <button
                onClick={() => handleDeleteProject(project?._id)}
                className="border-red-500 rounded bg-red-50 border px-2"
              >
                {" "}
                <BsTrash className="inline text-red-500" />
              </button>
            </div>
          )}
        </div>

        <div className=" grid grid-cols-2 gap-2">
          <div className="col-span-1"></div>

          <div className="col-span-2 mt-2">
            <label className="mb-1 font-semibold" htmlFor="bio">
              Project Details
            </label>

            <div
              dangerouslySetInnerHTML={{
                __html: project?.details,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
