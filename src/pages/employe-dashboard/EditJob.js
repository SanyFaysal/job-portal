import moment from 'moment';
import React, { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FiTrash } from 'react-icons/fi';
import { RxArrowLeft, RxCross1 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../components/reuseable/Loading';
import Path from '../../components/reuseable/Path';
import { useJobByIdQuery, useUpdateJobMutation } from '../../features/job/jobApi';

const EditJob = () => {

    const { id } = useParams();
    // isLoading: loadLoading, isSuccess: loadSuccess, isError: loadErr, error: loadErrMsg
    const { data: loadJob, isLoading: loading, } = useJobByIdQuery(id);
    const job = loadJob?.data || {};
    const { user: { _id, fullName, company: { companyName } } } = useSelector(state => state.auth);
    const [updateJob, { data, isLoading, isSuccess, isError, error }] = useUpdateJobMutation();
    const { handleSubmit, register, control, reset } = useForm({
        defaultValues: {
            skills: job?.skills,
            responsibilities: job?.responsibilities,
            requirements: job?.requirements
        }
    });
    console.log(job);
    let defaultSkills = job?.skills;
    let defaultResponsibilities = job?.responsibilities;
    let defaultRequirements = job?.requirements;

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
        if (isSuccess && data?.data?.modifiedCount > 0) {
            toast.success('Success', { id: 'postJob' })
        }
        if (isError) {
            toast.error(error?.data?.error, { id: 'postJob' })
        }
    }, [data, isLoading, isSuccess, isError, error, reset, defaultSkills, defaultRequirements, defaultResponsibilities])
    console.log(isSuccess, data);
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
    if (loading) {
        return <Loading />
    }
    return (


        <div className=" ">
            {/* <Path from="dashboard" to="Edit Job" /> */}
            <div>
                <Link to='/dashboard/manage-jobs' className='flex items-center gap-x-2 mt-2 mb-3 font-medium'><RxArrowLeft />Back to Manage Jobs</Link>
            </div>
            <form
                className="bg-white  lg:px-10 pb-4 w-full rounded-2xl py-8 gap-3 "
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className="w-full text-2xl font-semibold mb-5 lg:pt-0 pt-2">
                    Edit Job
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
                        <label className="mb-2" htmlFor="employmentType">
                            Job Type
                        </label>
                        <select
                            type="text"
                            id="jobType"
                            defaultValue={job?.jobType}
                            {...register('jobType')}
                            className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
                        >
                            <option value="fullTime" selected={job?.jobType === 'fullTime'}>Full Time</option>
                            <option value="partTime" selected={job?.jobType === 'partTime'}>Part Time</option>
                            <option value="freelance" selected={job?.jobType === 'freelance'}>Freelance</option>
                        </select>
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
                        <label className="mb-2" htmlFor="experience">
                            Experience
                        </label>
                        <select
                            type="text"
                            id="experience"
                            {...register('experience')}
                            defaultValue={job?.experience}
                            className="bg-slate-100  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg"
                        >
                            <option value="1 year experience" selected={job?.experience === '1 year experience'}>1 year experience </option>
                            <option value="2 - 3 years experience" selected={job?.experience === '2 - 3 years experience'}>2 - 3 years experience</option>
                            <option value="3- 5 years experience" selected={job?.experience === '3 - 5 years experience'}>3- 5 years experience</option>
                            <option value="5 years + experience" selected={job?.experience === '5 years + experience'}>5 years + experience</option>
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
                    <Link to='/dashboard/manage-jobs'
                        className="btn hover:bg-red-500 hover:text-white  bg-red-500 text-white border-none  btn-sm"
                        type="submit"

                    >
                        Back
                    </Link>
                </div>
            </form>
        </div>

    );
};

export default EditJob;