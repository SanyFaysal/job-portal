import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { useGetMeQuery } from './features/auth/authApi';
import { fetchUser } from './features/auth/authSlice';
import routes from './routes/route';

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('accessToken');
  useEffect(() => {
    dispatch(fetchUser(token));
  }, [token, dispatch]);
  return (
    <>
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
