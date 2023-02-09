import React from 'react';
import { BiPencil } from 'react-icons/bi';
import { IoMdEye } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';
import photo from '../../assets/images/photo1.jpg';
const ManageJobsTableRow = () => {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td className="text-blue-500">30+ Applied</td>
      <td>30 January, 2023</td>
      <td>Active</td>
      <td>
        {' '}
        <div className="form-control ">
          <input type="checkbox" className="toggle toggle-xs toggle-success" />
        </div>
      </td>
      <th>
        <div className="tooltip " data-tip="View">
          <button className="btn  btn-xs bg-blue-100 text-blue-500 border-none hover:bg-blue-500 hover:border-none hover:text-white duration-400">
            <IoMdEye className="text-xl " />
          </button>
        </div>
        <div className="tooltip mx-2" data-tip="Edit">
          <button className="btn  btn-xs bg-blue-100 text-blue-500 border-none hover:bg-blue-500 hover:border-none hover:text-white duration-400">
            <BiPencil className="text-xl " />
          </button>
        </div>
        <div className="tooltip " data-tip="Delete">
          <button className="btn  btn-xs bg-red-100 text-red-500 border-none hover:bg-red-500 hover:border-none hover:text-white duration-400">
            <MdDeleteOutline className="text-xl " />
          </button>
        </div>
      </th>
    </tr>
  );
};

export default ManageJobsTableRow;
