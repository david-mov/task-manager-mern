import * as React from 'react'
import { Navigate, useLocation } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import {routes} from '../../helpers/routes'

export default function Private({ role, element }) {
  let {hasRole, isAuthenticated} = useAuth()

  const location = useLocation()

  if (!isAuthenticated()) return <Navigate to={routes.signin} state={{from: location}} />

  if (!hasRole(role)) return <Navigate to={routes.home} />

  return element;
  
}