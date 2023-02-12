import React from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';
import photo from '../../assets/images/photo1.jpg';
import user from '../../assets/images/human.jpg';
const Comment = () => {
  return (
    <div className="flex gap-3">
      <img src={photo} className="w-12 h-12 rounded-full" alt="" />
      <div>
        <h2 className="font-medium text-md">Is it available now ?</h2>
        <p className="text-sm text-gray-400 ">21 january, 2023 </p>
        <div className="my-3">
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            totam quae, architecto atque cum quos distinctio ipsam vel, iste
            magni deleniti sint ea exercitationem velit!
          </p>

          <div className="ml-5">
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
          </div>
          <button className="text-blue-500 mt-2">Reply</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
