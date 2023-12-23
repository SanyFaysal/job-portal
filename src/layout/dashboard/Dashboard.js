import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import SideNav from "./SideNav";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  if (!user.role) {
    navigate("/register");
  }

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content grid grid-cols-11">
        {/* <div className="w-full lg:col-span-2 hidden lg:block ">
          <div className="hidden lg:block h-[100vh] sticky top-0">
            <SideNav />
          </div>
        </div> */}
        <div className="w-full  col-span-11 bg-blue-50 lg:px-5 px-4 py-8">
          <div className="flex items-center">
            <label
              htmlFor="dashboard"
              className=" lg:hidden mr-5 rounded bg-blue-100 py-1 px-2 "
            >
              <RxHamburgerMenu className="text-xl" />
            </label>
            <h1 className="text-3xl font-semibold mb-1">Dashboard</h1>
          </div>
          <Outlet />
        </div>
      </div>
      <div className="drawer-side ">
        <label htmlFor="dashboard" className="drawer-overlay"></label>

        <div className="w-60 bg-white">
          <SideNav />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
