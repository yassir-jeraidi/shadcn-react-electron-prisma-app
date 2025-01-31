import { Outlet } from 'react-router-dom'
import React from 'react'
import Navbar from '@/components/navbar'

export default function GuestLayout(): React.JSX.Element {
  return (
    <div className="container">
      <Navbar />
      <div className="w-full p-4 bg-white rounded-lg shadow-lg">
        <Outlet />
      </div>
    </div>
  )
}
