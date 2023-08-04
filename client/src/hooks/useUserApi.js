import { useContext } from 'react'
import { UserApiContext } from '../providers/UserProvider'

export default function useUserApi() {
  const context = useContext(UserApiContext)
  if (!context)
    throw new Error('useUserApi must be used within the AuthProvider')
  return context
}
