import React from 'react';
import { Link } from 'react-router-dom';
import { BsList } from 'react-icons/bs';
const Navbar = () => {
  const li = (
    <>
      <Link to="/">
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
    <div className="navbar bg-base-100 lg:px-16 px-6 shadow-2xl">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{li}</ul>
      </div>
      <div className="navbar-end">
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
