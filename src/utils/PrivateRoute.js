import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../components/reuseable/Loading';
import { useGetMeQuery } from '../features/auth/authApi';
import LoginPage from '../pages/authentication/Login';

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
