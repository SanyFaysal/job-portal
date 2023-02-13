import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../components/reuseable/Loading';

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const isLoading = auth.isLoading;
  const user = auth.user;
  const email = user?.email;
  if (isLoading) {
    return <Loading />;
  }
  console.log(auth);
  if (!isLoading && !email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }
  return children;
};

export default PrivateRoute;
