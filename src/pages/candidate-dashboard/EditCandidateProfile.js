import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import { useGetMeQuery, useUserRegisterMutation } from '../../features/auth/authApi';


const EditCandidateProfile = () => {
    const token = localStorage.getItem('accessToken')
    const [countries, setCountries] = useState([]);

    const [updateUser, { data: updated, isSuccess, isError, error }] = useUserRegisterMutation()
    const { data: { data: user } } = useGetMeQuery(token)
    console.log(updated);
    const { address, bio, city, contactNumber, designation, dob, email, fullName, _id, gender, country } = user;
    const [editGender, setEditGender] = useState(gender)
    const { handleSubmit, register, reset } = useForm({
        defaultValues: {
            email: email,
            country: country,
            gender: gender
        }
    });


    const dispatch = useDispatch()


    const dobFormat = moment.utc(dob).format('YYYY-MM-DD')
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);

    const onSubmit = (data) => {
        data.gender = editGender;

        console.log({ update: data });
        updateUser({ id: _id, user: data })
    };
    useEffect(() => {
        if (isSuccess) {
            toast.success('Update successful', { id: 'register' });
        }
        if (isError) {
            toast.error(error?.data?.error, { id: 'register' });

        }
    }, [isSuccess, isError, error, reset, dispatch, user]);

    console.log(gender);
    return (
        <div className="">
            <div className="flex justify-center items-center overflow-auto lg:h-[90vh]">
                <div className=" p-2 rounded-2xl">
                    <form
                        className=" shadow-2lg lg:p-8 p-4 bg-white border rounded-2xl  gap-3  justify-between"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h1 className="w-full text-2xl  mb-5 font-semibold ">
                            Register as Candidate
                        </h1>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-1" htmlFor="firstName">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    required
                                    defaultValue={fullName}
                                    {...register('fullName')}
                                    className={` w-full bg-blue-50 capitalize   focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                                />
                            </div>
                            {/* <div className="flex flex-col w-full max-w-xs">
                  <label className="mb-1" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    {...register('lastName')}
                    className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                  />
                </div> */}
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-1" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    disabled
                                    {...register('email')}
                                    className={` w-full bg-blue-50  cursor-not-allowed	   focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                                />
                            </div>

                            <div className="flex flex-col w-full max-w-xs mt-3">
                                <h1 className="mb-2">Gender</h1>
                                <div className="flex gap-3">
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="male"
                                            required
                                            defaultChecked={editGender === 'male' ? true : false}
                                            {...register('gender')}
                                            value="male"
                                            onChange={() => setEditGender('male')}
                                            className="radio radio-sm "
                                        />
                                        <label className="ml-2 text-lg" for="male">
                                            Male
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="female"
                                            defaultChecked={editGender === 'female' ? true : false}
                                            {...register('gender')}
                                            value="female"
                                            onChange={() => setEditGender('female')}
                                            className="radio radio-sm "
                                        />
                                        <label className="ml-1 text-lg" for="female">
                                            Female
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="other"
                                            {...register('gender')}
                                            onChange={() => setEditGender('other')}
                                            defaultChecked={editGender === 'other' ? true : false}
                                            value="other"
                                            className="radio radio-sm "
                                        />
                                        <label className="ml-2 text-lg " for="other">
                                            Other
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-1" htmlFor="address">
                                    Date of Birth
                                </label>
                                <input
                                    required
                                    defaultValue={dobFormat}
                                    type="date"
                                    {...register('dob')}
                                    id="address"
                                    className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                                />
                            </div>
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-1" htmlFor="address">
                                    Designation
                                </label>
                                <input
                                    type="text"
                                    required
                                    defaultValue={designation}
                                    {...register('designation')}
                                    id="designation"
                                    className={` w-full bg-blue-50  capitalize  focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                                />
                            </div>
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-1" htmlFor="address">
                                    Contact Number
                                </label>
                                <input
                                    type="text"
                                    required
                                    defaultValue={contactNumber}
                                    {...register('contactNumber')}
                                    id="contactNumber"
                                    className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                                />
                            </div>
                        </div>
                        <hr className="w-full my-3 bg-black " />
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 ">
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-1" for="country">
                                    Country
                                </label>
                                <select
                                    required

                                    {...register('country')}
                                    id="country"
                                    defaultValue={country}
                                    className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                                >
                                    {countries
                                        .sort((a, b) =>
                                            a?.name?.common?.localeCompare(b?.name?.common)
                                        )
                                        .map(({ name }) => (
                                            <option value={name.common} selected={country === name.common}>{name.common}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-1" htmlFor="address">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    required
                                    defaultValue={address}
                                    {...register('address')}
                                    id="address"
                                    className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                                />
                            </div>
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-1" htmlFor="city">
                                    City
                                </label>
                                <input
                                    required
                                    type="text"
                                    defaultValue={city}
                                    {...register('city')}
                                    id="city"
                                    className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                                />
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-6 grid-cols-1 gap-5 ">
                            <div className="flex flex-col w-full mt-2 col-span-4">
                                <label className="mb-1" htmlFor="bio">
                                    About You
                                </label>
                                <textarea
                                    rows={3}
                                    required
                                    type="text"
                                    {...register('bio')}
                                    defaultValue={bio}
                                    id="bio"
                                    className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                                />
                            </div>

                            <div className="flex lg:justify-end justify-center items-center w-full my-auto col-span-2 ">
                                {/* <div className="flex  w-full max-w-xs">
                  <input
                    className="mr-3 checkbox checkbox-sm"
                    type="checkbox"
                    {...register('term')}
                    id="terms"
                  />
                  <label for="terms">I agree to terms and conditions</label>
                </div> */}
                                <button
                                    className="btn inline-block lg:mt-20 w-2/4  bg-blue-200 text-blue-500 border-none hover:border-none hover:bg-blue-500  hover:text-white"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditCandidateProfile;