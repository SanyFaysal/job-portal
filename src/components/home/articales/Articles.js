import React from "react";
import ArticleCard from "./ArticleCard";
import { useGetAllBlogsQuery } from "../../../features/blog/blogApi";

const Articles = () => {
  const { data } = useGetAllBlogsQuery();
  return (
    <div className="lg:px-16 px-6 py-16 bg-gray-50">
      <div>
        <h1 className="text-3xl font-semibold text-center ">
          Recent News Articles
        </h1>
        <p className="text-center font-semibold">
          Fresh job related news content posted each day.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7 my-12">
        {data?.data?.map((blog) => (
          <ArticleCard blog={blog} key={blog?._id} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
