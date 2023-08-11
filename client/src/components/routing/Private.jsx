import * as React from 'react'
import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import { useHasRole, useIsAuthenticated } from '../../context/StoreContext'
import { routes } from '../../helpers/consts/routes'

export default function Private({ role, element }) {
  const isAuthenticated = useIsAuthenticated()
  const hasRole = useHasRole()

  const location = useLocation()

  if (!isAuthenticated())
    return <Navigate to={routes.signin} state={{ from: location }} />

  if (!hasRole(role)) return <Navigate to={routes.home} />

  return element
}

Private.propTypes = {
  role: PropTypes.string,
  element: PropTypes.element.isRequired,
}
