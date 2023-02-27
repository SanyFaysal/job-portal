import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import { IoSend } from 'react-icons/io5';
import { useSelect } from '@mui/base';
import { useSelector } from 'react-redux';
import { useCommentOnJobMutation } from '../../features/job/jobApi';
import { toast } from 'react-hot-toast';
const JobQusAns = ({ job }) => {
  const { queries, _id } = job;
  const token = localStorage.getItem('accessToken')
  const [question, setQuestion] = useState('');
  const { user } = useSelector(state => state.auth);

  const [postComment, isLoading, isSuccess, isError, error] = useCommentOnJobMutation()
  const handleQuestion = (_id) => {
    const data = {
      question: {
        qus: question,
        quesBy: user?._id
      }
    }

    postComment({ id: _id, data, token })
    setQuestion('')
  }

  useEffect(() => {
    // if (isLoading === true) {
    //   toast.loading('Loading...', { id: 'comment' })
    // }
    if (isError) {
      toast.error('Something went wrong', { id: 'comment' })
    }



  }, [isLoading, isError])

  return (
    <div>
      <h1 className="mb-2 mt-5 text-xl font-semibold my-5">All Comments : <span className='text-blue-500'>{queries.length}</span></h1>
      <div className="flex gap-4 my-5">
        <input
          placeholder="Write your comment here..."
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="input input-bordered w-full c"
        />
        <div>
          <button onClick={() => handleQuestion(_id)} className="btn rounded py-2  bg-blue-100 border-none text-blue-500  hover:bg-blue-500 hover:text-white duration-500 ease-in-out ">
            <IoSend className="text-2xl" />
          </button>
        </div>
      </div>
      <div>
        {
          queries?.map(query => <Comment query={query} user={user} />)
        }

      </div>
    </div>
  );
};

export default JobQusAns;
