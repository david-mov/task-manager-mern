import { useLocation, useNavigate } from 'react-router-dom'

export const useRedirectBack = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const prevLocation = location.state?.from || null

  return prevLocation ? () => navigate(prevLocation, { replace: true }) : null
}
