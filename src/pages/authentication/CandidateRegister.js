import React from 'react';
import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
const CandidateRegister = () => {
  const [countries, setCountries] = useState([]);
  const { handleSubmit, register, control } = useForm();
  const term = useWatch({ control, name: 'term' });
  console.log(term);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <div className="flex justify-center items-center overflow-auto h-[90vh]">
        <div className="bg-gradient-to-t from-gray-100 via-blue-300 to-gray-100 p-2 rounded-2xl">
          <form
            className=" shadow-2lg p-8 bg-white border rounded-2xl  gap-3  justify-between"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="w-full text-2xl  mb-5 font-semibold ">
              Register as Candidate
            </h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...register('firstName')}
                  className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  {...register('lastName')}
                  className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>

              <div className="flex flex-col w-full max-w-xs mt-3">
                <h1 className="mb-2">Gender</h1>
                <div className="flex gap-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="male"
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
                  Designation
                </label>
                <input
                  type="text"
                  {...register('address')}
                  id="address"
                  className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1" htmlFor="address">
                  Contact info
                </label>
                <input
                  type="text"
                  {...register('address')}
                  id="address"
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
                  {...register('country')}
                  id="country"
                  className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                >
                  {countries
                    .sort((a, b) =>
                      a?.name?.common?.localeCompare(b?.name?.common)
                    )
                    .map(({ name }) => (
                      <option value={name.common}>{name.common}</option>
                    ))}
                </select>
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1" htmlFor="address">
                  Street Address
                </label>
                <input
                  type="text"
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
                  type="text"
                  {...register('city')}
                  id="city"
                  className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-6 grid-cols-1 gap-5 ">
              <div className="flex flex-col w-full mt-2 col-span-4">
                <label className="mb-1" htmlFor="postcode">
                  About You (optional)
                </label>
                <textarea
                  rows={3}
                  type="text"
                  {...register('postcode')}
                  id="postcode"
                  className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>

              <div className="flex justify-end items-center w-full my-auto col-span-2 ">
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
                  className="btn inline-block mt-20 w-2/4 bg-blue-200 text-blue-500 border-none hover:border-none hover:bg-blue-500  hover:text-white"
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

export default CandidateRegister;
