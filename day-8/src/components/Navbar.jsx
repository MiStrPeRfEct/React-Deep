import React from 'react'

const Navbar = ({ setToggle }) => {
  return (
    <div className ="p-4 bg-black text-white flex rounded justify-between items-center ">
        <div>
          <img className='rounded-full'
           width={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLOxRW9wIvJfJHNtxsSBRGG7drOdLd5NwKKAbnii5FA&s=10" alt="" />
        </div>
        <div className = "flex gap-6 font-semibold">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
        </div>
        <button onClick={() => setToggle((prev) => !prev)} className=" p-2 bg-blue-700 text-white cursor-pointer rounded">Create user</button>
    </div>
  )
}

export default Navbar
