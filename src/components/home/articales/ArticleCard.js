import React from "react";
import { MdComment, MdKeyboardArrowRight, MdTimer } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import article1 from "../../../assets/images/article-1.jpg";

const ArticleCard = ({ blog }) => {
  const navigate = useNavigate();
  return (
    <div
      className=" p-4
      rounded-lg grid lg:grid-cols-2 gap-4 shadow hover:shadow-lg h-full"
    >
      <img
        src={article1}
        alt=""
        className={`rounded-lg h-[25vh]
          }`}
      />
      <div>
        <div className="flex text-sm mt-2">
          {" "}
          <p className="flex items-center">
            {" "}
            <MdTimer className="inline" />
            <small className="mx-1">{blog?.createdAt}</small>
          </p>
          <p className="flex items-center ml-3">
            <MdComment className="inline" />
            <small className="mx-1">{blog?.comments?.length}</small>
          </p>
        </div>

        <h3 className="mt-3 font-semibold">{blog?.title}</h3>

        <div className="flex justify-end items-en h-full">
          <button
            onClick={() => navigate(`/blogDetails/${blog?._id}`)}
            className="inline-block  text-blue-500 text- my-auto duration-500 font-semibold mt-3 bg-blue-100 hover:bg-blue-500 hover:text-white text-blue-500 rounded-full px-3  py-1"
          >
            See more <MdKeyboardArrowRight className="ml-2 inline" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
