import React, {useContext} from 'react'
import { NavLink } from 'react-router'



const Navbar = () => {
  
 
  return (
    <div className='flex rounded justify-between bg-black p-5 text-white items-center '>
      <div>
        Logo
      </div>
      <div className='flex gap-10 text-xl'>
       <NavLink to="/" >Home</NavLink>
       <NavLink to="/about" >About</NavLink>
       <NavLink to="/products" >Products</NavLink>
      </div>
      <button>Login</button>
    </div>
  )
}

export default Navbar
