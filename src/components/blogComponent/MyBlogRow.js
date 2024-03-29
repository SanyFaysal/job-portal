import moment from "moment";
import React, { useEffect, useState } from "react";
import { BiPencil } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDeleteBlogMutation } from "../../features/blog/blogApi";
import { getToken } from "../../helpers/getToken";
import toast from "react-hot-toast";

export default function MyBlogRow({ blog }) {
  const navigate = useNavigate();
  const token = getToken();
  const postedOn = moment.utc(blog?.createdAt).format("DD/MM/YYYY");
  const [deleteBlog, { isSuccess }] = useDeleteBlogMutation();

  const handleDeleteBlog = (id) => {
    deleteBlog({ id, token });
  };

  useEffect(() => {
    if (isSuccess) toast.success("Deletion Successful", { id: 1 });
  }, [isSuccess]);
  return (
    <tr>
      <td className="">
        <div>
          <p className="font-semibold">
            {blog?.title?.length > 50
              ? `${blog?.title?.slice(0, 50)}... `
              : blog?.title}{" "}
          </p>
        </div>
      </td>

      <td className="text-sm">
        <div>
          <p className={``}>{postedOn}</p>
        </div>
      </td>
      <td>
        <span className="rounded-full bg-green-100 text-green-500 py-1 text-sm font-medium capitalize px-3  ">
          {blog?.status}
        </span>
      </td>
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
            onClick={() => navigate(`/dashboard/edit-blog/${blog?._id}`)}
            className="btn  btn-xs bg-blue-100 text-blue-500 border-none hover:bg-blue-500 hover:border-none hover:text-white duration-400"
          >
            <BiPencil className="text-xl " />
          </label>
        </div>
        <div className="tooltip " data-tip="Delete">
          <button
            onClick={() => handleDeleteBlog(blog?._id)}
            className="btn  btn-xs bg-red-100 text-red-500 border-none hover:bg-red-500 hover:border-none hover:text-white duration-400"
          >
            <MdDeleteOutline className="text-xl " />
          </button>
        </div>
      </th>
    </tr>
  );
}
