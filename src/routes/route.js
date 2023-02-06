import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/main/Main';
import Home from '../pages/home/Home';

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
    ],
  },
]);

export default routes;
