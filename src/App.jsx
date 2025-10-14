import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import AppRoute from './routes/AppRoute'

function App() {
  return (
    <div>
      <div className='fixed top-0 left-0 bg-transparent w-full p-4'>
        <Navbar />
      </div>
      <AppRoute />
    </div>
  )
}

export default App
