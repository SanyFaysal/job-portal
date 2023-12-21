import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import ReactQuill from "react-quill";

export default function ClientAddProject({
  projects,
  setProjects,
  setProjectData,
  projectData,
}) {
  const [projectDetails, setProjectDetails] = useState();

  useEffect(() => {
    setProjectData({ ...projectData, details: projectDetails });
  }, [projectDetails]);
  console.log({ projects });
  return (
    <>
      <input type="checkbox" id="client_add_project" className="modal-toggle" />
      <div className="modal  ">
        <div className="modal-box w-2/3 lg:ml-36 max-w-5xl">
          <div className="  rounded-xl px-5 pt-3">
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
                      ...projectData,
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
                    onChange={(e) =>
                      setProjectData({
                        ...projectData,
                        duration: {
                          ...projectData?.duration,
                          from: e.target.value,
                        },
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
                          ...projectData?.duration,
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
                  value={projectDetails}
                  onChange={setProjectDetails}
                />
              </div>
            </div>
          </div>

          <div className="modal-action">
            <div className="flex justify-end col-span-2 ">
              <button
                onClick={() => setProjects([...projects, projectData])}
                className="btn bg-green-100  border-0 hover:bg-green-500 hover:text-white text-green-500 "
              >
                Done
              </button>
            </div>
            <label htmlFor="client_add_project" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
