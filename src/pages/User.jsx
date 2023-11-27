import React from 'react'
import Login from '../components/main/user/Login'
import Register from '../components/main/user/Register'
import { Route, Routes } from 'react-router-dom'
const User = () => {
  return (
    <div className='container mx-auto px-16 my-5'>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default User
