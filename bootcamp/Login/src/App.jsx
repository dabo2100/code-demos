import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import EditTask from './pages/EditTask'
import RegisterPage from './pages/Register'
import RegisterDoctors from './pages/RegisterDoctors'

export default function App() {
  return (
    <div className='w-full h-full'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register/doctors" element={<RegisterDoctors />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile/edit/:taskId" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
