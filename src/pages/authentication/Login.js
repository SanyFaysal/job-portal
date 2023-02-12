import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login-animate.gif';
const LoginPage = () => {
  const { handleSubmit, register, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);
    setLoading(false);
  };

  return (
    <div className="h-[90vh]  w-full grid grid-cols-11 duration-700 ease-in">
      <div className="col-span-6 px-1">
        <img src={login} alt="" className=" h-[88vh] mx-20  bg-none my-auto" />
      </div>
      <div className="  flex flex-col col-span-5  border-l border-blue-100 px-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" my-auto   rounded-lg "
        >
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
              <div className="my-4">
                <label className="block font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className={` w-full bg-blue-100 focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
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
              <div className="mt-10 flex justify-end">
                <button
                  type="submit"
                  className="btn btn bg-blue-200 w-full inline-block px-8 text-blue-500 border-none hover:bg-blue-500 hover:text-white hover:border-none"
                >
                  Login
                </button>
              </div>
              <div>
                <p className="text-center">
                  {' '}
                  New to Job Portal?{' '}
                  <Link to="/signup" className="text-blue-500">
                    Create an Account
                  </Link>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
