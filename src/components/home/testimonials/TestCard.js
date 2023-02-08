import React from 'react';
import { BsBag } from 'react-icons/bs';
import { GiClockwork, GiTimeBomb } from 'react-icons/gi';
import { MdMoney } from 'react-icons/md';
const TestCard = () => {
  return (
    <div
      className={`border  px-6 py-4 rounded-lg 
         shadow-lg transition duration-400 
      }`}
    >
      <div className="flex justify-around">
        <div className="mr-4">
          <GiClockwork
            className={`text-6xl  p-2 rounded-lg
      `}
          />
        </div>
        <div>
          <h1 className="text-xl">Software Engineer (Android), Libraries</h1>

          <div className="text-sm flex items-center ">
            <p className="flex items-center mr-3">
              <BsBag className="inline mr-1 my-auto" />
              <span className="my-auto"> Segment</span>
            </p>
            <p className="flex items-center mr-3">
              <MdMoney className="inline" />
              <span>$ 30k - $ 35k / year</span>
            </p>
            <p className="flex items-center mr-3">
              <GiTimeBomb className="inline" />
              <span>11 years ago</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
