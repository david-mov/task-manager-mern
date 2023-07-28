import { useContext } from 'react'
import { AuthApiContext } from '../providers/AuthProvider'

export default function useAuthApi() {
  const context = useContext(AuthApiContext)
  if (!context)
    throw new Error('useAuthApi must be used within the AuthProvider')
  return context
}
