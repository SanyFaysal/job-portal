import React from "react";
import { useSelector } from "react-redux";
import { useGetMyBlogsQuery } from "../../features/blog/blogApi";
import Path from "../../components/reuseable/Path";
import MyBlogRow from "../../components/blogComponent/MyBlogRow";

export default function MyBlogs() {
  const { user } = useSelector((state) => state.auth);
  const { data } = useGetMyBlogsQuery(user?._id);
  console.log({ data });
  return (
    <div>
      <Path from="dashboard" to="My Blogs" />
      <div className="bg-white  mt-5  py-5 rounded-lg">
        <h1 className="w-full text-2xl font-semibold mb-5 px-5">My Blogs</h1>
        <div className="overflow-x-auto w-full px-2">
          <table className="table w-full ">
            <thead className="bg-blue-50">
              <tr className="bg-blue-50 mx-5">
                <th>Title</th>
                <th>Status</th>
                <th>Created at</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data?.data?.map((blog) => (
                <MyBlogRow blog={blog} key={blog._id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
