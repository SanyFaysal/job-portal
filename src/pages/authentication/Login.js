import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import sideImg from '../../assets/images/login-animate.gif';
import { useLoginMutation } from '../../features/auth/authApi';
import { login } from '../../features/auth/authSlice';
const LoginPage = () => {
  const { handleSubmit, register, errors } = useForm();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loginUser, { data, isLoading, isSuccess, isError, error }] =
    useLoginMutation();

  const [open, setOpen] = useState(false);
  const onSubmit = (data) => {
    loginUser(data);
  };
  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem('accessToken', data.token);
      toast.success('Success', { id: 'login' });
      navigate('/')
      dispatch(login(data?.data))
    }
    if (isError) {
      toast.error(error?.data?.error, { id: 'login' })

    }
  }, [isSuccess, data, navigate, dispatch, isError, error]);
  console.log(error?.data?.error);
  return (
    <div className="h-[90vh]  w-full grid lg:grid-cols-11 duration-700 ease-in">
      <div className="col-span-6 px-1">
        <img
          src={sideImg}
          alt=""
          className=" h-[88vh] mx-20 lg:block hidden  bg-none my-auto"
        />
      </div>
      <div className="  flex flex-col col-span-5  border-l border-blue-100 px-20">
        <div className=" my-auto   rounded-lg ">
          <AnimatePresence>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                x: { duration: 1 },
                default: { ease: 'linear' },
              }}
              exit={{ opacity: 0 }}
            >
              <h1 className="text-2xl font-medium ">Login into account</h1>
              <p className="mb-4">
                Use your credentials to access your account.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-4">
                  <label className="block font-medium mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className={` w-full bg-blue-100 focus:outline-none px-4 py-3 rounded-lg`}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    //   ref={register({
                    //     required: 'Email is required',
                    //     pattern: {
                    //       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    //       message: 'Invalid email address',
                    //     },
                    //   })}

                    {...register('email')}
                  />
                </div>

                <div className="form-control mt-">
                  <label className="block font-medium mb-2" htmlFor="email">
                    Password
                  </label>
                  <div className="input-group">
                    <input
                      type={!open ? 'text' : 'password'}
                      placeholder="Search…"
                      {...register('password')}
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
                    value="Login"
                  />
                </div>
              </form>
              <div>
                <p className="text-center mt-5">
                  {' '}
                  New to Job Portal?{' '}
                  <Link to="/signup" className="text-blue-500">
                    Create an Account
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

export default LoginPage;
