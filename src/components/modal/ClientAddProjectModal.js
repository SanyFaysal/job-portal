import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import ReactQuill from "react-quill";
import {
  useAddProjectMutation,
  useUserRegisterMutation,
} from "../../features/auth/authApi";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { getToken } from "../../helpers/getToken";

export default function ClientAddProject() {
  const token = getToken();
  const { user } = useSelector((state) => state.auth);
  const [projectInfo, setProjectInfo] = useState({
    title: "",
    duration: {
      from: "",
      till: "",
    },
  });
  const [projectDetails, setProjectDetails] = useState();

  const [addProject, { data: updated, isSuccess, isError, error }] =
    useAddProjectMutation();

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!projectDetails) {
      return toast.error("Please add project details", { id: "register" });
    }
    const data = {
      ...projectInfo,
      details: projectDetails,
    };
    addProject({ id: user?._id, data, token });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Update successful", { id: "register" });
    }
    if (isError) {
      toast.error(error?.data?.error, { id: "register" });
    }
  }, [isSuccess, isError, error]);

  return (
    <>
      <input type="checkbox" id="client_add_project" className="modal-toggle" />
      <form onSubmit={handleAddProject} className="modal  ">
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
                  required
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
                    required
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
                    required
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
                  value={projectDetails}
                  onChange={setProjectDetails}
                />
              </div>
            </div>
          </div>

          <div className="modal-action">
            <div className="flex justify-end col-span-2 ">
              <button
                type="submit"
                className="btn bg-green-100  border-0 hover:bg-green-500 hover:text-white text-green-500 "
              >
                Done
              </button>
            </div>
            <label
              htmlFor="client_add_project"
              className="btn bg-red-100  border-0 hover:bg-red-500 hover:text-white text-red-500 "
            >
              Close
            </label>
          </div>
        </div>
      </form>
    </>
  );
}
