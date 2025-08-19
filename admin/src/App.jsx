import React from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import ContactSubmissions from './pages/ContactSubmissions/ContactSubmissions'
import Admin from './pages/admin/admin'
import Login from './pages/Login/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
const AppLayout = () => (
  <>
    <Navbar />
    <hr />
    <div className="app-content">
      <Sidebar />
      <Outlet />
    </div>
  </>
)

const App = () => {
  const url = "http://localhost:4000"

  return (
    <AuthProvider>
      <div>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route path="/admin" element={<Admin />} />
              <Route path="/add" element={<Add url={url} />} />
              <Route path="/list" element={<List url={url} />} />
              <Route path="/orders" element={<Orders url={url} />} />
              <Route path="/contacts" element={<ContactSubmissions />} />
              <Route index element={<Navigate to="/admin" replace />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App