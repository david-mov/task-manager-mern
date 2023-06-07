import * as React from 'react'
import {roles} from '../helpers/roles'

export const AuthContext = React.createContext()

export default function AuthProvider({children}) {

    const [user, setUser] = React.useState(null)

    const signin = (userCredentials, fromLocation, navigate) => {
        setUser({id: 1, role: roles.regular})
        navigate(fromLocation, {replace: true})
    }

    const signout = () => setUser(null)

    const isAuthenticated = () => !!user
    const hasRole = role => !role || user?.role === role

    const contextValue = {
        user,
        signin,
        signout,
        isAuthenticated,
        hasRole
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}