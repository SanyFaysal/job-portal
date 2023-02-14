import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../components/reuseable/Loading';

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();

  const { user, isLoading, isSuccess } = useSelector((state) => state.auth);

  if (isLoading) {
    console.log('go to isLoaidng');
    return <Loading />;
  }

  if (user?.email && !isLoading && isSuccess) {
    return children;
  }
  return <button>Go to home</button>

};

export default PrivateRoute;
