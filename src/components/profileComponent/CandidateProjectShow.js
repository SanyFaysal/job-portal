import React from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import EditClientProjectModal from "../modal/EditClientProjectModal";

export default function CandidateProjectShow({
  project,
  index,
  setProjects,
  projects,
  projectData,
  setProjectData,
}) {
  const deleteProject = (index) => {
    const updatedProjects = projects.splice(index, 1);
    console.log({ index });
    console.log({ updatedProjects });
    // setProjects(updatedProjects);
  };

  return (
    <div>
      <div className="  rounded-xl  mb-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-lg font-semibold">{project?.title}</h1>
            <em>
              {project?.duration?.from} - {project?.duration?.till}
            </em>
          </div>
          <div className="gap-3 flex">
            <button className="border-green-500 rounded bg-green-50 border px-2">
              {" "}
              <BsPencil className="inline text-green-500" />
            </button>
            <button
              onClick={() => deleteProject(index)}
              className="border-red-500 rounded bg-red-50 border px-2"
            >
              {" "}
              <BsTrash className="inline text-red-500" />
            </button>
          </div>
        </div>

        <div className=" grid grid-cols-2 gap-2 ">
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
      <EditClientProjectModal
        project={project}
        index={index}
        setProjects={setProjects}
        projects={projects}
        projectData={projectData}
        setProjectData={setProjectData}
      />
    </div>
  );
}
