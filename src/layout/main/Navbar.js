import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsList } from 'react-icons/bs';

const Navbar = () => {
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
      className={` navbar  lg:px-16 px-6 h-[10vh] sticky top-0 shadow-md  font-semibold  z-40`}
    >
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{li}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/dashboard" className="mr-2">
          Dashboard
        </Link>
        <Link to="/signup">Sign Up</Link>
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
