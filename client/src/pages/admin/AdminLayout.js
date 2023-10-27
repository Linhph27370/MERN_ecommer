import React from 'react'
import { Outlet } from 'react-router-dom'
import {AdminSidebar } from '../../components'
const AdminLayout = () => {
  return (
    <div className='flex w-full bg-slate-700 min-h-screen relative text-white'>
        <div className='w-[327px] top-0 bottom-0 flex-none fixed'>
            <AdminSidebar />
        </div>
        <div className='w-[327px]'></div>
        <div className='flex-auto'>
        <Outlet />
        </div>
    </div>
  )
}

export default AdminLayout