import React from 'react';

import { Navigate } from 'react-router-dom';
import Loading from '../components/reuseable/Loading';
import { useGetMeQuery } from '../features/auth/authApi';


const PrivateRoute = ({ children }) => {


  const token = localStorage?.getItem('accessToken');
  const { data, isLoading, isSuccess } = useGetMeQuery(token)
  const user = data?.data;
  console.log(user);
  if (!token) {
    return <Navigate to="/login" replace={true} />
  }

  if (token && isLoading) {
    return <Loading />;
  }

  if (token && user?.email && !isLoading && isSuccess) {
    return children;
  }

};

export default PrivateRoute;
