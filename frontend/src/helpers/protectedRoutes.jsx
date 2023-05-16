import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {

  function hasJWT() {
    let flag = false;

    //check if user has JWT token
    localStorage.getItem("token") ? flag = true : flag = false
    return flag
  }

  if (!hasJWT()) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoutes;
