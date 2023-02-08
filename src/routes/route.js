import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../layout/dashboard/Dashboard';

import PostJob from '../pages/employe-dashboard/PostJob';
import Main from '../layout/main/Main';
import Home from '../pages/home/Home';
import Jobs from '../pages/jobs/Jobs';
import ManageJobs from '../pages/employe-dashboard/ManageJobs';
import AllApplicants from '../pages/employe-dashboard/AllApplicants';
import Profile from '../pages/employe-dashboard/Profile';
import ShortlistedResumes from '../pages/employe-dashboard/ShortlistedResumes';
import EmployeeDashboardHome from '../pages/employe-dashboard/EmployeeDashboardHome';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'jobs',
        element: <Jobs />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard',
        element: <EmployeeDashboardHome />,
      },
      {
        path: '/dashboard/manage-jobs',
        element: <ManageJobs />,
      },
      {
        path: '/dashboard/post-job',
        element: <PostJob />,
      },
      {
        path: '/dashboard/all-applicants',
        element: <AllApplicants />,
      },
      {
        path: '/dashboard/profile',
        element: <Profile />,
      },
      {
        path: '/dashboard/shortlisted-resumes',
        element: <ShortlistedResumes />,
      },
    ],
  },
]);

export default routes;
