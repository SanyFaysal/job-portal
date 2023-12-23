import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import ReactQuill from "react-quill";
import { useUserRegisterMutation } from "../../features/auth/authApi";
import { useSelector } from "react-redux";

export default function EditProjectModal({ selectedProject }) {
  const [projectDetails, setProjectDetails] = useState();
  const [projectInfo, setProjectInfo] = useState({
    title: null,
    duration: {
      from: null,
      till: null,
    },
  });

  const handleUpdateProject = () => {
    const data = {
      details: projectDetails ?? selectedProject?.details,
      title: projectInfo?.title ?? selectedProject?.title,
      duration: {
        from: projectInfo?.duration?.from ?? selectedProject?.duration?.from,
        till: projectInfo?.duration?.till ?? selectedProject?.duration?.till,
      },
    };
  };

  return (
    <>
      <input type="checkbox" id="edit_project_modal" className="modal-toggle" />
      <div className="modal  ">
        <div className="modal-box w-2/3 pb-8  lg:ml-36 max-w-5xl">
          <div className="  rounded-xl px-3 ">
            <p className="flex justify-between items-center">
              <span className="text-2xl font-semibold">
                Update Project Data
              </span>
            </p>
            <div className=" grid grid-cols-2 gap-2 py-2">
              <div className="col-span-1">
                {" "}
                <label className="mb-1" htmlFor="bio">
                  Project Title
                </label>
                <input
                  type="text"
                  defaultValue={selectedProject?.title}
                  onChange={(e) =>
                    setProjectInfo({
                      ...projectInfo,
                      title: e.target.value,
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
                    defaultValue={selectedProject?.duration?.from}
                    onChange={(e) =>
                      setProjectInfo({
                        ...projectInfo,
                        duration: {
                          ...projectInfo?.duration,
                          from: e.target.value,
                        },
                      })
                    }
                    className={` w-full bg-white border    focus:outline-none focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                  />
                  Till{" "}
                  <input
                    type="text"
                    defaultValue={selectedProject?.duration?.till}
                    onChange={(e) =>
                      setProjectInfo({
                        ...projectInfo,
                        duration: {
                          ...projectInfo?.duration,
                          till: e.target.value,
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
                  className={` w-full bg-white  focus:outline-none  focus:ring-1 focus:ring-blue-500  rounded-lg`}
                  value={
                    projectDetails ? projectDetails : selectedProject?.details
                  }
                  onChange={setProjectDetails}
                />
              </div>
            </div>
          </div>

          <div className="modal-action">
            <div className="flex justify-end col-span-2 ">
              <button
                onClick={handleUpdateProject}
                className="btn bg-green-100  border-0 hover:bg-green-500 hover:text-white text-green-500 "
              >
                Update
              </button>
            </div>
            <label
              htmlFor="edit_project_modal"
              className="btn bg-red-100  border-0 hover:bg-red-500 hover:text-white text-red-500 "
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
