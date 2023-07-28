import { useContext } from 'react'
import { AuthStateContext } from '../providers/AuthProvider'

export default function useAuthState() {
  const context = useContext(AuthStateContext)
  if (!context)
    throw new Error('useAuthState must be used within the AuthProvider')
  return context
}
