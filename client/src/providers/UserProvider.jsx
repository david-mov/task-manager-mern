import React, { createContext, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { roles } from '../helpers/roles'

export const UserStateContext = createContext()
export const UserApiContext = createContext()

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  const signin = (userCredentials, fromLocation, navigate) => {
    console.log(userCredentials)
    setUser({
      id: 1,
      role: roles.admin,
      username: 'Larry',
      email: 'larry@email.com',
    })
    navigate(fromLocation, { replace: true })
  }

  const signup = (userData) => {
    console.log(userData)
  }

  const signout = () => setUser(null)

  const updateInfo = (updatedData) => {
    console.log(updatedData)
    setUser((prevUserData) => ({
      ...prevUserData,
      ...updatedData,
    }))
  }

  const uploadPic = (image) => {
    console.log(image)
    updateInfo({ profilePic: image })
  }

  const deleteAccount = () => {
    setUser(null)
  }

  const changePassword = (passwordData) => {
    console.log(passwordData)
  }

  const userApi = useMemo(
    () => ({
      signin,
      signup,
      signout,
      updateInfo,
      uploadPic,
      deleteAccount,
      changePassword,
    }),
    [setUser]
  )

  const userState = {
    user,
    isAuthenticated: () => !!user,
    hasRole: (role) => !role || user?.role === role,
  }

  return (
    <UserStateContext.Provider value={userState}>
      <UserApiContext.Provider value={userApi}>
        {children}
      </UserApiContext.Provider>
    </UserStateContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.element,
}
