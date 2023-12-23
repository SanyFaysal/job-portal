import React, { useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";

import { useLocation } from "react-router-dom";
import { CiPaperplane } from "react-icons/ci";

import EditProjectModal from "../modal/EditProjectModal";

export default function CandidateProjectShow({ project, setSelectedProject }) {
  const location = useLocation();

  const isEditProjectsPage = location.pathname.includes(
    "edit-candidate-projects"
  );

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
                onClick={() => {}}
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
