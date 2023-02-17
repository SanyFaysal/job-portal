import moment from 'moment';
import React from 'react';
import { BiPencil } from 'react-icons/bi';
import { IoMdEye } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import photo from '../../assets/images/photo1.jpg';
import { setJob } from '../../features/job/jobSlice';
import { useJobPostedDate } from '../../hook/useJobPostedDate';
const ManageJobsTableRow = ({ job }) => {
  const dispatch = useDispatch();
  const { jobTitle, applicants, status, employmentType, createdAt } = job;
  const navigate = useNavigate()
  const postedOn = moment.utc(createdAt).format('DD/MM/YYYY')
  const { postedDate } = useJobPostedDate(job)
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          {/* <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div> */}
          <div>
            <div className="font-bold capitalize" >{jobTitle}</div>
            <div className="text-sm capitalize">{employmentType}</div>
          </div>
        </div>
      </td>
      <td className="text-blue-500 capitalize ">{applicants.length} applied</td>
      <td className="text-sm"><div>
        <p className={``}>{postedDate}</p>
        <p className='text-xs '>{postedOn}</p>
      </div></td>
      <td className=" ">{status}</td>
      {/* <td>
        {' '}
        <div className="form-control ">
          <input
            type="checkbox"
            className="toggle toggle-xs toggle-success"
            defaultChecked
          />
        </div>
      </td> */}
      <th>
        <div className="tooltip " data-tip="View">

          {/* <label htmlFor="my-modal-5" className="btn"></label> */}


          <button htmlFor="my-modal-5" onClick={() => navigate(`/dashboard/jobsDetails/${job?._id}`)} className="btn  btn-xs bg-blue-100 text-blue-500 border-none hover:bg-blue-500 hover:border-none hover:text-white duration-400">
            <IoMdEye className="text-xl " />
          </button>
        </div>
        <div className="tooltip mx-2" data-tip="Edit">
          <label htmlFor="my-modal-5" onClick={() => navigate(`/dashboard/edit-job/${job?._id}`)} className="btn  btn-xs bg-blue-100 text-blue-500 border-none hover:bg-blue-500 hover:border-none hover:text-white duration-400">
            <BiPencil className="text-xl " />
          </label>
        </div>
        <div className="tooltip " data-tip="Delete">
          <button className="btn  btn-xs bg-red-100 text-red-500 border-none hover:bg-red-500 hover:border-none hover:text-white duration-400">
            <MdDeleteOutline className="text-xl " />
          </button>
        </div>
      </th>
    </tr >
  );
};

export default ManageJobsTableRow;
