import * as React from 'react'

export const AuthContext = React.createContext()

export default function AuthProvider({children}) {

    const [user, setUser] = React.useState(null)

    const contextValue = {
        user
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}