import * as React from 'react'
import { Navigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import {routes} from '../../helpers/routes'

export default function Public({ element }) {
  let {isAuthenticated} = useAuth()

  if (isAuthenticated()) {
    return <Navigate to={routes.projects} />;
  } else {
    return element;
  }
  
}