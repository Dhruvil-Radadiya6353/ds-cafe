import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
}

export default ProtectedRoute