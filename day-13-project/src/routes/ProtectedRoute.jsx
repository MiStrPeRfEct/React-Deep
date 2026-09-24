import React from 'react'
import { Navigate } from 'react-router'

const ProtectedRoute = ({children}) => {
  isAdmin = false;

  if(!isAdmin){
    Navigate('/');
  }


  return children;
}

export default ProtectedRoute
