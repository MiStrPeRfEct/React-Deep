import React from 'react'
import { NavLink, Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
        <nav classname='flex gap-4 font-bold text-lg text-blue-500'>
            <NavLink to="/">App</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
        <Outlet/>
      
    </div>
  )
}

export default MainLayout
