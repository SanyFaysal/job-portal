import React, { useState } from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';
import { IoSend } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import photo from '../../assets/images/photo1.jpg';
import { useAnswerOnJobMutation } from '../../features/job/jobApi';
import { useJobPostedDate } from '../../hook/useJobPostedDate';

const Comment = ({ query, user }) => {
  const { id } = useParams();
  const token = localStorage.getItem('accessToken')
  const { postedDate } = useJobPostedDate(query?.question)
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState('')
  const { user: { _id: userId } } = useSelector(state => state.auth)
  const [reply, isLoading, isSuccess, isError, error] = useAnswerOnJobMutation()
  const handleReply = (questionId) => {
    const data = {
      questionId,
      ans: answer,
      ansBy: userId
    }

    reply({ id, data, token })
  }
  console.log(query);
  console.log({ isLoading, isSuccess, isError, error });
  return (
    <div className="flex gap-3 px-4 py-2 my-2  rounded-lg">
      <img src={photo} className="w-12 h-12 rounded-full" alt="" />
      <div>
        <h2 className="font-medium text-md  capitalize">{query?.question?.quesBy?.fullName} - <span className='text-xs'>{query?.question?.quesBy?.role}</span></h2>
        <h2 className="0 text-xs font-thin  capitalize mt-[-2px]">{postedDate} </h2>
        <p className=" text-lg mt-1">{query?.question?.qus}</p>
        <div className="my-3">
          <div className="ml-5">
            <p className="">
              {' '}
              <BsArrowReturnRight className="inline" /> 2 reply
            </p>


            {query?.answer?.map(ans => <div className="mt-3 flex gap-3 items-center">
              <img src={user} className="w-10 h-10 rounded-full" alt="" />
              <div>
                <p className="font-medium">{ans.ans}</p>
                <p> Yes</p>
              </div>
            </div>
            )}</div>


          <div className={`flex gap-x-3 ${open ? 'block' : 'hidden'}`}>
            <input onChange={(e) => setAnswer(e.target.value)} type="text" className={` border px-2 py-1 rounded-lg`} />
            <div onClick={() => handleReply(query?._id)} className='bg-gray-200 pl-1 hover:bg-gray-600 hover:text-white duration-400 ease-in-out  py-1 rounded'>
              <IoSend className="text-2xl mx-2 my-auto " />
            </div>

          </div>
          <button className="text-blue-500 mt-1" onClick={() => setOpen(true)}>Reply</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
