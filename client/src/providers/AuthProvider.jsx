import * as React from 'react'
import PropTypes from 'prop-types'
import { roles } from '../helpers/roles'

export const AuthContext = React.createContext()

export default function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null)

  const signin = (userCredentials, fromLocation, navigate) => {
    setUser({
      id: 1,
      role: roles.admin,
      name: 'Larry',
      email: 'larry@email.com',
    })
    navigate(fromLocation, { replace: true })
  }

  const signout = () => setUser(null)

  const updateUser = (data) => {
    // Workaround ─ HTTP request to the back-end
    setUser({
      ...user,
      ...data,
    })
  }

  const isAuthenticated = () => !!user
  const hasRole = (role) => !role || user?.role === role

  const contextValue = {
    user,
    signin,
    signout,
    isAuthenticated,
    hasRole,
    updateUser,
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.element,
}
