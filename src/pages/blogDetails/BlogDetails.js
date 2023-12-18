import React from "react";
import PathBanner from "../../components/reuseable/PathBanner";
import { useParams } from "react-router-dom";
import { useSingleBlogQuery } from "../../features/blog/blogApi";

const BlogDetails = () => {
  const { blogId } = useParams();
  const { data } = useSingleBlogQuery(blogId);
  console.log({ data });
  return (
    <div className="px-16 py-10 bg-sky-50">
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: data?.data?.blog }}
      />
    </div>
  );
};

export default BlogDetails;
