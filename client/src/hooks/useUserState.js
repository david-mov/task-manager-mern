import { useContext } from 'react'
import { UserStateContext } from '../providers/UserProvider'

export default function useAuthState() {
  const context = useContext(UserStateContext)
  if (!context)
    throw new Error('useAuthState must be used within the AuthProvider')
  return context
}
