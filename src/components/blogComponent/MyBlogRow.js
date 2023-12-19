import moment from "moment";
import React from "react";
import { BiPencil } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function MyBlogRow({ blog }) {
  const navigate = useNavigate();
  const postedOn = moment.utc(blog?.createdAt).format("DD/MM/YYYY");
  const handleDeletePost = () => {};
  return (
    <tr>
      <td>
        <div className="">
          {/* <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={photo} alt="Avatar Tailwind CSS Component" />
          </div>
        </div> */}
          <div className="max-w-min">
            <div className="font-bold capitalize">{blog?.title}</div>
          </div>
        </div>
      </td>

      <td className="text-sm">
        <div>
          <p className={``}>{postedOn}</p>
        </div>
      </td>
      <td className=" ">{blog?.status}</td>
      {/* <td>
      {' '}
      <div className="form-control ">
        <input
          type="checkbox"
          className="toggle toggle-xs toggle-success"
          defaultChecked
        />
      </div>
    </td> */}
      <th>
        <div className="tooltip " data-tip="View">
          {/* <label htmlFor="my-modal-5" className="btn"></label> */}

          <button
            htmlFor="my-modal-5"
            onClick={() => navigate(`/blogDetails/${blog?._id}`)}
            className="btn  btn-xs bg-blue-100 text-blue-500 border-none hover:bg-blue-500 hover:border-none hover:text-white duration-400"
          >
            <IoMdEye className="text-xl " />
          </button>
        </div>
        <div className="tooltip mx-2" data-tip="Edit">
          <label
            htmlFor="my-modal-5"
            onClick={() => navigate(`/dashboard/edit-job/${blog?._id}`)}
            className="btn  btn-xs bg-blue-100 text-blue-500 border-none hover:bg-blue-500 hover:border-none hover:text-white duration-400"
          >
            <BiPencil className="text-xl " />
          </label>
        </div>
        <div className="tooltip " data-tip="Delete">
          <button
            onClick={() => handleDeletePost()}
            className="btn  btn-xs bg-red-100 text-red-500 border-none hover:bg-red-500 hover:border-none hover:text-white duration-400"
          >
            <MdDeleteOutline className="text-xl " />
          </button>
        </div>
      </th>
    </tr>
  );
}
