import * as React from 'react'
import { Navigate } from "react-router-dom";

export default function RequireAuth({ element }) {
  let user = null

  if (!user) {
    return <Navigate to="/signin" />;
  } else {
    return element;
  }
  
}