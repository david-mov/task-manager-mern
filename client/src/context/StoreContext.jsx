import PropTypes from 'prop-types'
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react'
import { AuthService } from '../services/AuthService'
import { UserService } from '../services/UserService'

const useStore = () => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const userService = new UserService()
  const authService = new AuthService()

  useEffect(() => {
    if (error) setError(null)
  }, [location.state?.from])

  useEffect(() => {
    /*
    userService.getCurrentUser()
      .then(data => {
        if (data && !data.error) {
          setUser(data)
        }
        setLoading(false)
      })
      .catch(_error => {})    
    */
    setUser({
      username: 'larry',
      email: 'larry@mail.com',
      role: 'regular',
    })
    setLoading(false)
  }, [])

  const isAuthenticated = () => !!user
  const hasRole = (role) => !role || user?.role === role

  const signin = (userCredentials, cb) => {
    setLoading(true)

    authService
      .signin(userCredentials)
      .then((data) => {
        if (data.error) throw Error(data.message)
        setUser(data)
        if (typeof cb === 'function') cb()
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  const signup = (userData, cb) => {
    setLoading(true)

    authService
      .signup(userData)
      .then((data) => {
        if (data.error) throw Error(data.message)
        setUser(data)
        if (typeof cb === 'function') cb()
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  const signout = () => {
    authService.signout().then((data) => {
      if (data.error) throw Error(data.message)
      setUser(null)
    })
  }

  const updateInfo = (fieldsToUpdate) => {
    setLoading(true)

    userService
      .updateInfo({ fieldsToUpdate })
      .then((data) => {
        if (data.error) throw Error(data.message)
        setUser(data)
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  const uploadProfilePic = (image) => {
    setLoading(true)

    userService.uploadProfilePic({ image }).then((data) => {
      if (data.error) throw Error(data.message)
      setUser({
        ...user,
        profilePicUrl: data.profilePicUrl,
      })
        .catch((err) => setError(err))
        .finally(() => setLoading(false))
    })
  }

  const changePassword = ({ currentPassword, newPassword }) => {
    setLoading(true)

    userService
      .changePassword({ currentPassword, newPassword })
      .then((data) => {
        if (data.error) throw Error(data.message)
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  const deleteAccount = () => {
    setLoading(true)

    userService
      .deleteAccount()
      .then((data) => {
        if (data.error) throw Error(data.message)
        setUser(null)
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      isAuthenticated,
      hasRole,
      signin,
      signup,
      signout,
      updateInfo,
      uploadProfilePic,
      changePassword,
      deleteAccount,
    }),
    [user, error, loading]
  )

  return memoedValue
}

const StoreContext = createContext(null)

export const StoreContextProvider = ({ children }) => {
  const storeValue = useStore()

  return (
    <StoreContext.Provider value={storeValue}>
      {!storeValue.loading && children}
    </StoreContext.Provider>
  )
}

const useStoreContext = () => {
  const context = useContext(StoreContext)
  if (!context) {
    throw new Error(
      'useStoreContext only can be used within the StoreContextProvider'
    )
  }
  return context
}

export const useUser = () => useStoreContext().user
export const useIsAuthenticated = () => useStoreContext().isAuthenticated
export const useHasRole = () => useStoreContext().hasRole
export const useSignin = () => useStoreContext().signin
export const useSignup = () => useStoreContext().signup
export const useSignout = () => useStoreContext().signout
export const useUpdateInfo = () => useStoreContext().updateInfo
export const useUploadProfilePic = () => useStoreContext().uploadProfilePic
export const useChangePassword = () => useStoreContext().changePassword
export const useDeleteAccount = () => useStoreContext().deleteAccount

StoreContextProvider.propTypes = {
  children: PropTypes.element,
}
