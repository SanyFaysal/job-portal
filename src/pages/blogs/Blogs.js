import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import ArticleCard from "../../components/home/articales/ArticleCard";
import Footer from "../../components/reuseable/Footer";
import PathBanner from "../../components/reuseable/PathBanner";
import { useGetAllBlogsQuery } from "../../features/blog/blogApi";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState();
  const { data } = useGetAllBlogsQuery(searchTerm);

  const categories = [
    "education",
    "information",
    "interview",
    "job seeking",
    "jobs",
    "learn",
    "skill",
    "travel",
  ];
  return (
    <div>
      <PathBanner to="Blogs" />
      <div className="grid grid-cols-4 gap-6 lg:px-16 px-6 ">
        <div className="col-span-3">
          <div className=" grid grid-cols-1  gap-4 my-6">
            {data?.data?.map((blog) => (
              <ArticleCard key={blog?._id} blog={blog} />
            ))}
          </div>
        </div>
        <div className="col-span-1 pl-7 py-8 ">
          <div className="lg:sticky top-20">
            <div className="flex justify-between ">
              <input
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="search here... "
                className="border w-full bg-blue-50  focus:outline-none  focus:ring-1 focus:ring-blue-500 px-4 py-2 rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold mt-6 mb-4">Categories</h2>
              {categories.map((category) => (
                <p className="capitalize mb-3">
                  <BsDot className="inline mr-2 text-xl" />
                  {category}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
