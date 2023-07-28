import * as React from 'react'
import PropTypes from 'prop-types'
import { roles } from '../helpers/roles'

export const AuthStateContext = React.createContext()
export const AuthApiContext = React.createContext()

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

  const updateUser = (newData) => {
    // Workaround ─ HTTP request to the back-end
    setUser((prevUserData) => ({
      ...prevUserData,
      ...newData,
    }))
  }

  const authApi = React.useMemo(
    () => ({
      signin,
      signout,
      updateUser,
    }),
    [setUser]
  )

  const auth = {
    user,
    isAuthenticated: () => !!user,
    hasRole: (role) => !role || user?.role === role,
  }

  return (
    <AuthStateContext.Provider value={auth}>
      <AuthApiContext.Provider value={authApi}>
        {children}
      </AuthApiContext.Provider>
    </AuthStateContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.element,
}
