import React from 'react'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

import {Navigate, Outlet} from 'react-router-dom';

const ProtectedRoute = ({isAuthenticated}) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace/>;
  }
  return <Outlet />;
}

export default ProtectedRoute
