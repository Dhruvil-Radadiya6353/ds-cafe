import { createContext, useState, useEffect, useContext } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Read from localStorage during initial state creation
    const storedAuth = localStorage.getItem('isAuthenticated')
    return storedAuth === 'true'
  })

  useEffect(() => {
    // Sync state with localStorage changes
    const handleStorageChange = () => {
      const storedAuth = localStorage.getItem('isAuthenticated')
      setIsAuthenticated(storedAuth === 'true')
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const login = () => {
    localStorage.setItem('isAuthenticated', 'true')
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem('isAuthenticated')
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)