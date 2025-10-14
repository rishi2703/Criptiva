import React from 'react'
import { Sidebar } from '../component/UI/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'

const DashboardLayout = () => {
  return (
    <div>
       <Navbar/>
     <div className='flex flex-1'>

      <div className=' lg:block hidden'>
        <Sidebar />
   </div>
        <div className='flex-1'>
          <Outlet />
        </div> 
     </div>
   
    </div>
  )
}

export default DashboardLayout
