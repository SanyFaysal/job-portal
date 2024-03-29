import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";

import PostJob from "../pages/employe-dashboard/PostJob";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import Jobs from "../pages/jobs/Jobs";
import ManageJobs from "../pages/employe-dashboard/ManageJobs";
import AllApplicants from "../pages/employe-dashboard/AllApplicants";
import ShortlistedResumes from "../pages/employe-dashboard/ShortlistedResumes";
import Login from "../pages/authentication/Login";
import Signup from "../pages/authentication/Signup";
import Register from "../pages/authentication/Register";
import CandidateRegister from "../pages/authentication/CandidateRegister";
import EmployeeRegister from "../pages/authentication/EmployerRegister";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "../utils/PrivateRoute";
import CandidateProfile from "../pages/candidate-dashboard/CandidateProfile";
import EmployerProfile from "../pages/employe-dashboard/EmployerProfile";
import EditJob from "../pages/employe-dashboard/EditJob";
import AppliedJob from "../pages/candidate-dashboard/AppliedJob";
import EditCandidateProfile from "../pages/candidate-dashboard/EditCandidateProfile";
import EditEmployerProfile from "../pages/employe-dashboard/EditEmployerProfile";
import Applicants from "../pages/employe-dashboard/Applicants";
import ApplicantProfile from "../pages/employe-dashboard/ApplicantProfile";
import DashboardHome from "../layout/dashboard/DashboardHome";

import Blogs from "../pages/blogs/Blogs";

import Contact from "../pages/contact/Contact";
import CreateBlog from "../pages/blogs/CreateBlog";
import MyBlogs from "../pages/blogs/MyBlogs";
import BlogDetails from "../pages/blogs/BlogDetails";
import EditBlog from "../pages/blogs/EditBlog";
import ClientAddProject from "../components/modal/ClientAddProjectModal";
import EditCandidateProject from "../components/profileComponent/EditCandidateProject";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "test",
        element: <ClientAddProject />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "blogDetails/:blogId",
        element: <BlogDetails />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "jobsDetails/:id",
        element: <JobDetails />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: (
          <PrivateRoute>
            <Register />
          </PrivateRoute>
        ),
        // children: [
        //   {
        //     path: 'candidate',
        //     element: <CandidateRegister />,
        //   },
        //   {
        //     path: 'employer',
        //     element: <EmployeeRegister />,
        //   },
        // ],
      },
      {
        path: "register/candidate",
        element: (
          <PrivateRoute>
            <CandidateRegister />
          </PrivateRoute>
        ),
      },
      {
        path: "register/employer",
        element: (
          <PrivateRoute>
            <EmployeeRegister />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/manage-jobs",
        element: <ManageJobs />,
      },
      {
        path: "/dashboard/post-job",
        element: <PostJob />,
      },
      {
        path: "/dashboard/jobsDetails/:id",
        element: <JobDetails />,
      },
      {
        path: "/dashboard/edit-job/:id",
        element: <EditJob />,
      },
      {
        path: "/dashboard/all-applicants",
        element: <AllApplicants />,
      },
      {
        path: "/dashboard/candidate-profile",
        element: <CandidateProfile />,
      },
      {
        path: "/dashboard/edit-candidate-profile",
        element: <EditCandidateProfile />,
      },
      {
        path: "/dashboard/edit-candidate-projects",
        element: <EditCandidateProject />,
      },
      {
        path: "/dashboard/edit-employer-profile",
        element: <EditEmployerProfile />,
      },
      {
        path: "/dashboard/applicants/:id",
        element: <Applicants />,
      },
      {
        path: "/dashboard/applicant-profile/:id",
        element: <ApplicantProfile />,
      },

      {
        path: "/dashboard/applied-jobs",
        element: <AppliedJob />,
      },

      {
        path: "/dashboard/employee-profile",
        element: <EmployerProfile />,
      },
      {
        path: "/dashboard/shortlisted-resumes",
        element: <ShortlistedResumes />,
      },
      {
        path: "/dashboard/create-blog",
        element: <CreateBlog />,
      },
      {
        path: "/dashboard/my-blogs",
        element: <MyBlogs />,
      },
      {
        path: "/dashboard/edit-blog/:blogId",
        element: <EditBlog />,
      },
    ],
  },
]);

export default routes;
