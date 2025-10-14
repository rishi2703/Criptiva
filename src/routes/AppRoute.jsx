import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to={'/home'} />} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default AppRoute
