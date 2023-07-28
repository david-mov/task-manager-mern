import * as React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import useAuthState from '../../hooks/useAuthState'
import { routes } from '../../helpers/routes'

export default function Public({ element }) {
  const { isAuthenticated } = useAuthState()

  if (isAuthenticated()) {
    return <Navigate to={routes.projects} />
  } else {
    return element
  }
}

Public.propTypes = {
  element: PropTypes.element.isRequired,
}
