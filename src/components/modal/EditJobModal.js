import moment from 'moment';
import React, { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { BiMinus } from 'react-icons/bi';
import { CgCross } from 'react-icons/cg';
import { FiTrash } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { useUpdateJobMutation } from '../../features/job/jobApi';
import { setJob } from '../../features/job/jobSlice';

const EditJobModal = () => {
    const { job } = useSelector(state => state.currentJob);
    const { user: { _id, fullName, company: { companyName } } } = useSelector(state => state.auth);
    const [updateJob, { data, isLoading, isSuccess, isError, error }] = useUpdateJobMutation();
    const { handleSubmit, register, control, reset } = useForm({
        defaultValues: {
            skills: job?.skills,
            responsibilities: job?.responsibilities,
            requirements: job?.requirements
        }
    });
    console.log(job.skills);
    let defaultSkills = job.skills;
    let defaultResponsibilities = job.responsibilities;
    let defaultRequirements = job.requirements;

    const {
        fields: resFields,
        append: resAppend,
        remove: resRemove,
    } = useFieldArray({ control, name: 'responsibilities' });
    const {
        fields: skillFields,
        append: skillAppend,
        remove: skillRemove,
    } = useFieldArray({ control, name: 'skills' });
    const {
        fields: reqFields,
        append: reqAppend,
        remove: reqRemove,
    } = useFieldArray({ control, name: 'requirements' });

    const onSubmit = (data) => {
        data.companyName = companyName;
        const token = localStorage.getItem('accessToken')
        updateJob({ token, id: job._id, data });

    };
    const formateDateline = moment.utc(job.dateline).format('YYYY-MM-DD')
    useEffect(() => {

        reset({ skills: defaultSkills, responsibilities: defaultResponsibilities, requirements: defaultRequirements })
        if (isSuccess) {
            toast.success('Success', { id: 'postJob' })
            reset();
        }
        if (isError) {
            toast.error(error?.data?.error, { id: 'postJob' })
        }
    }, [data, isLoading, isSuccess, isError, error, reset, defaultSkills, defaultRequirements, defaultResponsibilities])
    const employmentTypes = [
        {
            label: 'On Site',
            value: 'on-site'
        },
        {
            label: 'Remote',
            value: 'remote'
        },
        {
            label: 'Hybrid',
            value: 'hybrid'
        },
    ]
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box w-11/12 modal-bottom rounded-md max-w-5xl">
                    <div className='flex justify-end' mr-2>
                        <label htmlFor='my-modal-5' className='cursor-pointer p-2 rounded-full bg-red-200 text-red-500  border-none'><RxCross1 className='font-bold' /></label>
                    </div>
                    <form
                        className="  lg:px-10 pb-4 w-full rounded-2xl mt-[-16px] gap-3 "
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h1 className="w-full text-2xl font-semibold mb-5 lg:pt-0 pt-2">
                            Post a New Job
                        </h1>

                        <div className="grid w-full lg:gap-x-10 gap-y-5 lg:grid-cols-2">
                            <div className="flex flex-col  col-span-1">
                                <label className="mb-2" htmlFor="position">
                                    Job Title
                                </label>
                                <input
                                    type="text"
                                    id="jobTitle"
                                    required
                                    defaultValue={job.jobTitle}
                                    placeholder="eg. Web Developer"
                                    {...register('jobTitle')}
                                    className="bg-slate-100 capitalize  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
                                />
                            </div>

                            <div className="flex flex-col col-span-1 ">
                                <label className="mb-2" htmlFor="companyName">
                                    Company Name
                                </label>
                                <input
                                    disabled
                                    className="bg-slate-100 w-full focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
                                    type="text"
                                    id="companyName"
                                    value={companyName}
                                    {...register('companyName')}
                                />
                            </div>

                            <div className="flex flex-col  ">
                                <label className="mb-2" htmlFor="experience">
                                    Experience
                                </label>
                                <input
                                    type="text"
                                    required
                                    defaultValue={job.experience}
                                    id="experience"
                                    placeholder="Enter experience"
                                    {...register('experience')}
                                    className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
                                />
                            </div>

                            <div className="flex flex-col  ">
                                <label className="mb-2" htmlFor="employmentType">
                                    Employment Type
                                </label>
                                <select
                                    type="text"
                                    id="employmentType"
                                    defaultValue={job.employmentType}
                                    {...register('employmentType')}
                                    className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
                                >
                                    {employmentTypes.map(emType => <option value={emType.value} selected={job.employmentType === emType.value}>{emType.label}</option>)}

                                </select>
                            </div>

                            <div className="flex flex-col  ">
                                <label className="mb-2" htmlFor="salaryRange">
                                    Salary Range
                                </label>
                                <input
                                    type="text"
                                    required
                                    defaultValue={job?.salaryRange}
                                    id="salaryRange"
                                    {...register('salaryRange')}
                                    className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
                                />
                            </div>

                            <div className="flex flex-col ">
                                <label className="mb-2" htmlFor="location">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    required
                                    defaultValue={job?.location}
                                    id="location"
                                    {...register('location')}
                                    className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col ">
                                <label className="mb-2" htmlFor="location">
                                    Dateline
                                </label>
                                <input
                                    type="date"
                                    required
                                    defaultValue={formateDateline}
                                    id="dateline"
                                    {...register('dateline')}
                                    className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
                                />
                            </div>

                            <div className="flex flex-col ">
                                <label className="mb-2" htmlFor="location">
                                    Working time
                                </label>
                                <input
                                    type="text"
                                    id="workingTime"
                                    required
                                    defaultValue={job?.workingTime}
                                    {...register('workingTime')}
                                    className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-2" htmlFor="location">
                                    Vacancy
                                </label>
                                <input
                                    required
                                    type="text"
                                    defaultValue={job?.vacancy}
                                    id="vacancy"
                                    {...register('vacancy')}
                                    className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
                                />
                            </div>

                            <div className="flex flex-col ">
                                <label className="mb-2" htmlFor="location">
                                    Applying Email
                                </label>
                                <input
                                    required
                                    type="text"
                                    defaultValue={job?.applyingEmail}
                                    id="applyingEmail"
                                    {...register('applyingEmail')}
                                    className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
                                />
                            </div>

                            <div className="flex flex-col ">
                                <label className="mb-2" htmlFor="location">
                                    Contact Number
                                </label>
                                <input
                                    required
                                    type="text"
                                    defaultValue={job?.contactNumber}
                                    id="contactNumber"
                                    {...register('contactNumber')}
                                    className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col  lg:col-span-2">
                                <label className="mb-2" htmlFor="jobDescription">
                                    Job Description
                                </label>
                                <textarea
                                    required
                                    rows={8}
                                    defaultValue={job?.jobDescription}
                                    {...register('jobDescription')}
                                    id="jobDescription"
                                    className=' bg-slate-100 rounded-lg  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"'
                                />
                            </div>
                            <div className="flex flex-col lg:col-span-2">
                                <label className="text-xl font-medium">Skills</label>
                                <hr className='mb-4 mt-1' />
                                <div>
                                    <div className="mb-3 grid lg:grid-cols-3 grid-cols-1 gap-x-8 gap-y-2">
                                        {skillFields.map((item, index) => {

                                            return (
                                                <div
                                                    key={item.key}
                                                    className="flex items-center gap-3 mb-3"
                                                >
                                                    <input
                                                        className="bg-slate-100 w-full focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 py-2 px-3 rounded-lg"
                                                        type="text"
                                                        required
                                                        defaultValue={item}
                                                        {...register(`skills[${index}]`)}
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => skillRemove(index)}
                                                        className="grid place-items-center rounded-full flex-shrink-0 bg-red-500/20   h-9 w-9 group transition-all hover:bg-red-500 "
                                                    >
                                                        <FiTrash
                                                            className="text-red-500 group-hover:text-white transition-all"
                                                            size="18"
                                                        />
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => skillAppend('')}
                                            className="btn   bg-blue-50 text-blue-500 border-none hover:border-none hover:bg-blue-500 hover:text-white duration-400 ease-in py-3 "
                                        >
                                            Add Skill
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col lg:col-span-2">
                                <label className="text-xl font-semibold">Responsibilities</label>
                                <hr className='mb-4 mt-1' />
                                <div>
                                    <div className="mb-3 grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-2">
                                        {resFields.map((item, index) => {
                                            return (
                                                <div
                                                    key={item.key}
                                                    className=" mb-3 flex items-center gap-3 w-full"
                                                >
                                                    <input
                                                        className="bg-slate-100 w-full focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 py-2 px-3 rounded-lg"
                                                        type="text"
                                                        required
                                                        {...register(`responsibilities[${index}]`)}
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => resRemove(index)}
                                                        className="grid place-items-center rounded-full flex-shrink-0 bg-red-500/20  h-9 w-9 group transition-all hover:bg-red-500"
                                                    >
                                                        <FiTrash
                                                            className="text-red-500 group-hover:text-white transition-all"
                                                            size="18"
                                                        />
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => resAppend('')}
                                            className="btn   bg-blue-50 text-blue-500 border-none hover:border-none hover:bg-blue-500 hover:text-white duration-400 ease-in py-3 "
                                        >
                                            Add Responsibility
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col lg:col-span-2 ">
                                <label className="text-xl font-medium">Requirements</label>
                                <hr className='mb-4 mt-1' />
                                <div>
                                    <div className="mb-3 grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-2">
                                        {reqFields.map((item, index) => {
                                            return (
                                                <div
                                                    key={item.key}
                                                    className=" mb-3 flex items-center gap-3 w-full"
                                                >
                                                    <input
                                                        className="bg-slate-100 w-full focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 py-2 px-3 rounded-lg"
                                                        type="text"
                                                        required
                                                        {...register(`requirements[${index}]`)}
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => reqRemove(index)}
                                                        className="grid place-items-center rounded-full flex-shrink-0 bg-red-500/20  h-9 w-9 group transition-all hover:bg-red-500"
                                                    >
                                                        <FiTrash
                                                            className="text-red-500 group-hover:text-white transition-all"
                                                            size="18"
                                                        />
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => reqAppend('')}
                                            className="btn   bg-blue-50 text-blue-500 border-none hover:border-none hover:bg-blue-500 hover:text-white duration-400 ease-in py-2 "
                                        >
                                            Add Requirement
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-x-4 justify-end items-center w-full mt-3">
                            <button
                                className="btn hover:bg-green-500 hover:text-white   bg-green-500 text-white border-none btn-sm"
                                type="submit"
                            >
                                Update Job
                            </button>
                            <label htmlFor='my-modal-5'
                                className="btn hover:bg-red-500 hover:text-white  bg-red-500 text-white border-none  btn-sm"
                                type="submit"
                            >
                                Close
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditJobModal;