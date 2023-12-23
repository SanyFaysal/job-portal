import React from "react";
import { useSelector } from "react-redux";
import CandidateDashboardHome from "../../pages/candidate-dashboard/CandidateDashboardHome";
import EmployeeDashboardHome from "../../pages/employe-dashboard/EmployeeDashboardHome";

const DashboardHome = () => {
  const { user } = useSelector((state) => state.auth);
  const employee = user.role === "employee";
  const candidate = user.role === "candidate";
  console.log({ come: true });
  return (
    <div>
      {employee && <EmployeeDashboardHome />}
      {candidate && <CandidateDashboardHome />}
    </div>
  );
};

export default DashboardHome;
