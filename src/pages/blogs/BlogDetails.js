import React from "react";
import PathBanner from "../../components/reuseable/PathBanner";
import { useParams } from "react-router-dom";
import { useSingleBlogQuery } from "../../features/blog/blogApi";
import { FaHeart, FaRegHeart, FaRegThumbsUp } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";

const BlogDetails = () => {
  const { blogId } = useParams();
  const { data } = useSingleBlogQuery(blogId);
  console.log({ data });
  return (
    <div className="px-16 py-10 bg-sky-50">
      <div className="mb-5 ">
        <h3>
          <em>Author : </em>
          <span className="capitalize font-semibold">
            {data?.data?.author?.fullName}
          </span>
        </h3>
        <h3>
          {" "}
          <em> Posted on: </em>
          <span className="capitalize font-semibold">
            {new Date(data?.data?.createdAt).toDateString()}
          </span>{" "}
        </h3>
      </div>
      <h3 className="mt-5 mb-10 font-semibold text-5xl">{data?.data?.title}</h3>

      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: data?.data?.blog }}
      />
      <div className="flex items-center gap-28 mt-10 mb-20">
        <p className="flex items-center gap-3">
          <FaRegHeart className="text-2xl inline" />
          <FaHeart className="text-2xl inline" />
          <span className="text-xl mt-1"> 0</span>
        </p>
        <p></p>

        <p className="flex items-center gap-3">
          <BiMessageRoundedDetail className="text-3xl" />

          <span className="text-xl mt-1"> 0</span>
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
