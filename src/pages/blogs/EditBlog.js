import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

import Path from "../../components/reuseable/Path";
import ReactQuill from "react-quill";
import { useSelector } from "react-redux";
import {
  useCreateBlogMutation,
  useEditBlogMutation,
  useSingleBlogQuery,
} from "../../features/blog/blogApi";
import { getToken } from "../../helpers/getToken";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function EditBlog() {
  const { blogId } = useParams();
  const [blogTitle, setBlogTitle] = useState();
  const [blogData, setBlogData] = useState();
  const token = getToken();
  const { user } = useSelector((state) => state.auth);
  const { data } = useSingleBlogQuery(blogId);

  const [editBlog, { isLoading, isSuccess }] = useEditBlogMutation();

  const handleEditBlog = () => {
    const data = {
      title: blogTitle,
      blog: blogData,
      author: user?._id,
    };
    editBlog({ token, id: blogId, data });
  };

  useEffect(() => {
    if (isSuccess) toast.success("Updated Successful", { id: 1 });
  }, [isSuccess]);
  return (
    <div>
      <Path from="dashboard" to="Create Blog" />
      <div className="bg-white  mt-5  px-10 pt-5 pb-10 rounded-lg">
        <h1 className="text-xl font-semibold">Create a new Blog</h1>
        <div className="flex flex-col mt-3">
          <label>Blog Title</label>

          <input
            type="text"
            defaultValue={data?.data?.title}
            className="input input-bordered "
            onChange={(e) => setBlogTitle(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <label>Blog Details</label>
          <ReactQuill
            theme="snow"
            value={blogData ? blogData : data?.data?.blog}
            onChange={setBlogData}
          />
        </div>

        <div className="text-end mt-5">
          <button className="btn btn-success " onClick={handleEditBlog}>
            Update Blog
          </button>
        </div>
      </div>
    </div>
  );
}
