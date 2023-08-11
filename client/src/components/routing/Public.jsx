import * as React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { useIsAuthenticated } from '../../context/StoreContext'
import { routes } from '../../helpers/consts/routes'

export default function Public({ element }) {
  const isAuthenticated = useIsAuthenticated()

  if (isAuthenticated()) {
    return <Navigate to={routes.projects} />
  } else {
    return element
  }
}

Public.propTypes = {
  element: PropTypes.element.isRequired,
}
