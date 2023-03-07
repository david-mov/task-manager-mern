import * as React from 'react'
import { Navigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

export default function Private({ role, element }) {
  let {user} = useAuth()

  if (role && user?.role !== role) return <Navigate to="/" />

  if (!user) return <Navigate to="/signin" />

  return element;
  
}