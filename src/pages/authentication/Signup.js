import {
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login-animate.gif';
import { useSignupMutation } from '../../features/auth/authApi';
const Signup = () => {
  const [open, setOpen] = useState(true);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const [signup, { isSuccess, error, isLoading, isError, data }] =
    useSignupMutation();

  const onSubmit = (data) => {
    console.log(data);
    signup(data);
  };
  useEffect(() => {
    console.log(data);
    if (isSuccess) {
      localStorage.setItem('accessToken', data?.token);
      toast.success('Signup success..', { id: 'signup' });
      reset();
      navigate('/register');
    }
    if (isError) {
      toast.error(error, { id: 'signup' });
      reset();
    }
  }, [isSuccess, reset, isError, error, navigate, data]);
  console.log(isSuccess);
  return (
    <div className="h-[90vh]   w-full grid grid-cols-11 duration-500 ease-in">
      <div className="col-span-6 px-1">
        <img src={login} alt="" className=" h-[88vh] mx-20  bg-none my-auto" />
      </div>

      <div className="  flex flex-col col-span-5  border-l border-blue-100 px-20">
        <div className=" my-auto   rounded-lg ">
          <AnimatePresence>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                x: { duration: 1 },
                default: { ease: 'easeInOut' },
              }}
              exit={{ opacity: 0, x: 0 }}
            >
              <h1 className="text-2xl font-medium ">Create an Account</h1>
              <p className="mb-4">
                Use your credentials to create your account.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-5 mb-1">
                  <label className="block font-medium mb-2" htmlFor="email">
                    Full Name
                  </label>
                  <input
                    className={` w-full bg-blue-100  focus:outline-none  px-4 py-3 rounded-lg`}
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    {...register('fullName')}
                  />
                </div>
                <div className="mt-2">
                  <label className="block font-medium mb-2 " htmlFor="email">
                    Email
                  </label>
                  <input
                    className={` w-full bg-blue-100   focus:outline-none  px-4 py-3 rounded-lg`}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  <p className="h-4 text-sm">
                    {errors?.email?.message && (
                      <span className="text-red-500">
                        {errors?.email?.message}
                      </span>
                    )}
                  </p>
                </div>
                <div className="mb-2">
                  <label className="block font-medium mb-2" htmlFor="password">
                    Password
                  </label>
                  {/* <input
                    className={` w-full bg-blue-100   focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must have at least 6 characters',
                      },
                    })}
                  /> */}
                  <div className="form-control mt-">
                    <div className="input-group">
                      <input
                        type={!open ? 'text' : 'password'}
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        {...register('password', {
                          required: 'Password is required',
                          minLength: {
                            value: 6,
                            message: 'Password must have at least 6 characters',
                          },
                        })}
                        className={` w-full bg-blue-100   focus:outline-none  px-4 py-3 rounded-lg`}
                      />
                      <p className=" bg-blue-100 my-auto py-3 px-3   border-none text-blue-500 h-12 mx-auto w-12">
                        {open ? (
                          <FiEye
                            className="text-2xl "
                            onClick={() => setOpen(false)}
                          />
                        ) : (
                          <FiEyeOff
                            onClick={() => setOpen(true)}
                            className="text-2xl"
                          />
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <input
                      type="submit"
                      className="btn btn bg-blue-200 w-full inline-block px-8 text-blue-500 border-none hover:bg-blue-500 hover:text-white hover:border-none"
                      value="Sign up"
                    />
                  </div>
                </div>
              </form>
              <div>
                <p className="text-center">
                  {' '}
                  Already have an account?{' '}
                  <Link to="/login" className="text-blue-500">
                    Login
                  </Link>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Signup;
