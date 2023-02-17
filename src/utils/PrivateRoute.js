import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../components/reuseable/Loading';
import LoginPage from '../pages/authentication/Login';

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();

  const { user, isLoading, isSuccess } = useSelector((state) => state.auth);
  const token = localStorage?.getItem('accessToken');
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
