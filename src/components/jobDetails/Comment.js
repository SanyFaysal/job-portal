import React from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';
import photo from '../../assets/images/photo1.jpg';
import user from '../../assets/images/human.jpg';
const Comment = ({ query }) => {
  console.log(query);
  return (
    <div className="flex gap-3">
      <img src={photo} className="w-12 h-12 rounded-full" alt="" />
      <div>
        <h2 className="font-medium text-lg  capitalize">{query?.question?.quesBy?.fullName} - <span className='text-xs'>{query?.question?.quesBy?.role}</span></h2>
        <p className=" text-lg ">{query?.question?.qus}</p>
        <div className="my-3">
          <p className="mb-2">

          </p>

          {/* <div className="ml-5">
            <p className="">
              {' '}
              <BsArrowReturnRight className="inline" /> 2 reply
            </p>
            <div className="mt-3 flex gap-3 items-center">
              <img src={user} className="w-10 h-10 rounded-full" alt="" />
              <div>
                <p className="font-medium">Admin</p>
                <p> Yes</p>
              </div>
            </div>
            <div className="mt-3 flex gap-3 items-center">
              <img src={user} className="w-10 h-10 rounded-full" alt="" />
              <div>
                <p className="font-medium">Admin</p>
                <p> You can drop your cv by email</p>
              </div>
            </div>
          </div> */}
          <button className="text-blue-500 mt-1">Reply</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
