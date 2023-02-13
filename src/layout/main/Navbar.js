import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsList } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../features/auth/authSlice';

const Navbar = () => {
  const { pathname } = useLocation();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const isHome = pathname === '/' || pathname === '/home';
  const handleLogOut = () => {
    localStorage.removeItem('accessToken');
    dispatch(logOut());
  };

  const li = (
    <>
      <Link to="/jobs">
        <li className="mx-3 ">Jobs</li>
      </Link>
      <Link to="/">
        <li className="mx-3 ">Blogs</li>
      </Link>
      <Link to="/">
        <li className="mx-3 ">Contact</li>
      </Link>
    </>
  );

  return (
    <div
      className={` navbar  lg:px-16 px-6 h-[10vh] sticky top-0  font-semibold  z-40 ${!isHome && 'bg-white'
        }`}
    >
      <div className="navbar-start">
        <Link to="/" className="">
          Job Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{li}</ul>
      </div>
      <div className="navbar-end">
        {user?.email && !user?.role && (
          <>
            <Link to="/register" className="mr-4">
              Register
            </Link>
            <button onClick={handleLogOut}>Logout</button>
          </>
        )}

        {user?.email && user?.role && (
          <>
            <Link to="/dashboard" className="mr-4">
              Dashboard
            </Link>
          </>
        )}
        {!user?.email && (
          <>
            <Link to="/login" className="mr-4">
              Login
            </Link>
          </>
        )}
        <div className="dropdown  dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <BsList />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {li}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
