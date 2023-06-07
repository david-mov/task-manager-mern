import * as React from 'react'
import {roles} from '../helpers/roles'

export const AuthContext = React.createContext()

export default function AuthProvider({children}) {

     const [user, setUser] = React.useState(null)
    // const [user, setUser] = React.useState({id: 1, role: roles.regular})
    // const [user, setUser] = React.useState({id: 1, role: roles.admin})

    const isAuthenticated = () => !!user
    const hasRole = role => !role || user?.role === role

    const contextValue = {
        user,
        isAuthenticated,
        hasRole
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}