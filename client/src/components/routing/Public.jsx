import * as React from 'react'
import { Navigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

export default function Public({ element }) {
  let {user} = useAuth()

  if (user) {
    return <Navigate to="/projects" />;
  } else {
    return element;
  }
  
}