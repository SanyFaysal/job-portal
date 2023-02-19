import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetMeQuery, useUserRegisterMutation } from '../../features/auth/authApi';

const EditEmployerProfile = () => {
    const [countries, setCountries] = useState([]);
    const token = localStorage.getItem('accessToken')
    const { handleSubmit, register, control, reset } = useForm();
    const { data: { data: user } } = useGetMeQuery(token);
    const { _id, email, fullName, gender, dob, contactNumber, country, company } = user;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [employeeRegister, { data: updated, isLoading, isSuccess, isError, error }] = useUserRegisterMutation();
    console.log(updated);
    const businessCategory = [
        'Automotive',
        'Business Support & Supplies',
        'Computers & Electronics',
        'Construction & Contractors',
        'Design Agency',
        'Education',
        'Entertainment',
        'Food & Dining',
        'Health & Medicine',
        'Home & Garden',
        'IT Farm',
        'Legal & Financial',
        'Manufacturing, Wholesale, Distribution',
        'Merchants (Retail)',
        'Miscellaneous',
        'Personal Care & Services',
        'Real Estate',
        'Travel & Transportation',
    ];

    const employeeRange = ['1 - 10', '11 - 50', '51 - 100', 'Above 100'];
    const dobFormat = moment.utc(dob).format('YYYY-MM-DD')
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);

    const onSubmit = (data) => {
        data.email = email;
        const user = {
            ...data,
            company: {
                companyName: data?.companyName,
                companyWebSite: data?.companyWebSite,
                companyLocation: data?.companyLocation,
                companyCategory: data?.companyCategory,
                employeeRange: data?.employeeRange,
                roleInCompany: data?.roleInCompany,
            }
        }
        employeeRegister({ id: _id, user })

    }

    useEffect(() => {
        if (isSuccess) {
            toast.success('update success..', { id: 'register' });


        }
        if (isError) {
            toast.error(error?.data?.error, { id: 'register' });

        }
    }, [isSuccess, isError, error, reset]);

    return (
        <div className="">
            <div className="flex justify-center items-center lg:h-[90vh] my-4">
                <div className=" p-2 rounded-2xl">
                    <form
                        className=" shadow-2lg lg:p-8 p-4 bg-white border rounded-2xl  gap-3  justify-between"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h1 className="w-full text-2xl  mb-5 font-semibold ">
                            Update your Profile
                        </h1>
                        <div className="grid lg:grid-cols-3 gap-5">
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-1" htmlFor="firstName">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    defaultValue={fullName}
                                    id="fullName"
                                    {...register('fullName')}
                                    className={` w-full bg-blue-50   capitalize focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
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
                                    className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                                />
                            </div>
                            {/* </div>
                        <div className="grid lg:grid-cols-3 gap-5 mt-3 w-full my-3"> */}
                            <div className="flex flex-col w-full max-w-xs mt-3">
                                <h1 className="mb-2">Gender</h1>
                                <div className="flex gap-3">
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="male"
                                            required
                                            defaultChecked={gender === 'male' ? true : false}
                                            {...register('gender')}
                                            value="male"

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
                                            defaultChecked={gender === 'female' ? true : false}
                                            {...register('gender')}
                                            value="female"

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
                                            defaultChecked={gender === 'other' ? true : false}
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
                                <label className="mb-1" htmlFor="email">
                                    Contact Number
                                </label>
                                <input
                                    type="contactNumber"
                                    id="contactNumber"
                                    required
                                    defaultValue={contactNumber}
                                    {...register('contactNumber')}
                                    className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                                />
                            </div>
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
                        </div>
                        <hr className="w-full mb-2 mt-3 bg-black" />
                        <div className="grid lg:grid-cols-3 gap-5 lg:mt-3">
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-2" htmlFor="companyName">
                                    Company's name
                                </label>
                                <input
                                    type="text"
                                    required
                                    defaultValue={company?.companyName}
                                    {...register('companyName')}
                                    id="companyName"
                                    className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                                />
                            </div>
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-2" htmlFor="companyName">
                                    Company's website/Email
                                </label>
                                <input
                                    type="text"
                                    required
                                    defaultValue={company?.companyWebSite}
                                    {...register('companyWebSite')}
                                    id="companyWebsite"
                                    className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                                />
                            </div>
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-2" htmlFor="companyLocation">
                                    Company's Location
                                </label>
                                <input
                                    type="text"
                                    required
                                    defaultValue={company?.companyLocation}
                                    {...register('companyLocation')}
                                    id="companyLocation"
                                    className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                                />
                            </div>
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-2" for="companyCategory">
                                    Company's Category
                                </label>
                                <select
                                    required
                                    {...register('companyCategory')}
                                    id="companyCategory"
                                    defaultValue={company?.companyCategory}
                                    className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                                >
                                    {businessCategory
                                        .sort((a, b) => a.localeCompare(b))
                                        .map((category) => (
                                            <option value={category} selected={company?.companyCategory === category}>{category}</option>
                                        ))}
                                </select>
                            </div>
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-2" for="employeeRange">
                                    Number of employee
                                </label>
                                <select
                                    required
                                    {...register('employeeRange')}
                                    id="employeeRange"
                                    defaultValue={employeeRange}
                                    className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                                >
                                    {employeeRange
                                        .sort((a, b) => a.localeCompare(b))
                                        .map((category) => (
                                            <option value={category} selected={category === company?.employeeRange}>{category}</option>
                                        ))}
                                </select>
                            </div>

                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-2" htmlFor="roleInCompany">
                                    Your role in company
                                </label>
                                <input
                                    required
                                    type="text"
                                    defaultValue={company?.roleInCompany}
                                    {...register('roleInCompany')}
                                    id="roleInCompany"
                                    className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                                />
                            </div>

                        </div>  <div className="flex  justify-end  mt-8">
                            <button className="btn inline " type="submit">
                                Update Profile
                            </button>
                        </div>

                        {/* <div className="flex justify-between items-center w-full mt-3">
                <div className="flex  w-full max-w-xs">
                  <input
                    type="checkbox"
                    {...register('term')}
                    id="terms"
                    className="checkbox mr-3"
                  />
                  <label for="terms">I agree to terms and conditions</label>
                </div>
                <button disabled={!term} className="btn" type="submit">
                  Submit
                </button>
              </div> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditEmployerProfile;