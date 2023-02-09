import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Outlet } from 'react-router-dom';
import SideNav from './SideNav';

const Dashboard = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content grid grid-cols-11">
        <div className="w-full lg:col-span-2 hidden lg:block ">
          <div className="hidden lg:block h-[100vh] sticky top-0">
            <SideNav />
          </div>
        </div>
        <div className="lg:col-span-9 col-span-11 bg-blue-50 lg:px-5 px-4 py-8">
          <label
            htmlFor="my-drawer-3"
            className="btn btn-square btn-ghost lg:hidden"
          >
            <RxHamburgerMenu className="text-xl" />
          </label>
          <h1 className="text-3xl font-semibold mb-1">Dashboard</h1>
          <Outlet />
        </div>
      </div>
      <div className="drawer-side w-80 ">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <SideNav />
      </div>
    </div>
  );
};

export default Dashboard;
