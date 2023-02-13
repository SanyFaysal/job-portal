import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../components/reuseable/Loading';

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !user?.email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }
  return children;
};

export default PrivateRoute;
