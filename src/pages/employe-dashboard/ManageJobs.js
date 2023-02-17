import React from 'react';
import Path from '../../components/reuseable/Path';
import photo from '../../assets/images/photo1.jpg';
import { IoMdEye } from 'react-icons/io';
import { BiPencil } from 'react-icons/bi';
import { MdDelete, MdDeleteOutline } from 'react-icons/md';
import ManageJobsTableRow from '../../components/employee-dashboard/ManageJobsTableRow';
import { useGetJobsQuery } from '../../features/job/jobApi';

const ManageJobs = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetJobsQuery()
  console.log(data?.data);
  return (
    <div>
      <Path from="dashboard" to="Manage Jobs" />
      <div className="bg-white  mt-5  py-5 rounded-lg">
        <h1 className="w-full text-2xl font-semibold mb-5 px-5">
          Manage All Jobs
        </h1>
        <div className="overflow-x-auto w-full px-2">
          <table className="table w-full ">
            <thead className="bg-blue-50">
              <tr className="bg-blue-50 mx-5">
                <th>Title</th>
                <th>Applicants</th>
                <th>Created at</th>
                <th>Status</th>
                {/* <th>Publish</th> */}
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {
                data?.data?.map(job => <ManageJobsTableRow job={job} key={job._id} />)
              }

            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ManageJobs;
