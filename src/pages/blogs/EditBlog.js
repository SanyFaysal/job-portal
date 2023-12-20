import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

import Path from "../../components/reuseable/Path";
import ReactQuill from "react-quill";
import { useSelector } from "react-redux";
import { useCreateBlogMutation } from "../../features/blog/blogApi";
import { getToken } from "../../helpers/getToken";
import toast from "react-hot-toast";

export default function EditBlog() {
  const [blogTitle, setBlogTitle] = useState();
  const [blogData, setBlogData] = useState();
  const token = getToken();
  const { user } = useSelector((state) => state.auth);

  const [] = 

  const [createBlog, { isLoading, isSuccess }] = useCreateBlogMutation();

  const handleCrateBlog = () => {
    if (!blogTitle || !blogData) {
      return toast.error("Please fill up all input");
    }
    if (!user) {
      return toast.error("Please login first");
    }
    const data = {
      title: blogTitle,
      blog: blogData,
      author: user?._id,
    };
    createBlog({ token, data });
  };

  useEffect(() => {
    if (isSuccess) toast.success("Created Successful", { id: 1 });
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
            defaultValue={}
            className="input input-bordered "
            onChange={(e) => setBlogTitle(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <label>Blog Details</label>
          <ReactQuill theme="snow" value={blogData} onChange={setBlogData} />
        </div>

        <div className="text-end mt-5">
          <button className="btn btn-success " onClick={handleCrateBlog}>
            Post Blog
          </button>
        </div>
      </div>
    </div>
  );
}
