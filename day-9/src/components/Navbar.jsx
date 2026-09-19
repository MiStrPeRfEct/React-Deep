import React, {useContext} from 'react'
import { MyShop } from "../context/MyWebsite";

const Navbar = () => {
  let{setIsCartOpen} = useContext(MyShop);
  return (
    <div className='flex rounded justify-between bg-black p-5 text-white items-center '>
      <div>
        Logo
      </div>
      <div className='flex gap-10 text-xl'>
        <p className='cursor-pointer' onClick={() => setIsCartOpen(false)}>home</p>
        <p className='cursor-pointer' onClick={() => setIsCartOpen(true)}>Cart</p>
      </div>
      <button>Login</button>
    </div>
  )
}

export default Navbar
