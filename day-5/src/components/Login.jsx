import React from 'react'

const Login = () => {
  return (
    <div className= "bg-white w-90 p-6 rounded-xl flex flex-col gap-4">
      <h1>Login</h1>

    <form className='flex flex-col gap-4 ' action="">
        <input className = "p-2 border border-gray-400 rounded" type="text" placeholder='Name' />
        <input className = "p-2 border border-gray-400 rounded" type="password" placeholder='Password' />
        <button className='p-2 bg-blue-600 text-white rounded'>Login</button>
    </form>
    <p>
        didn't have an account? <span onClick={()=>setToggle((prev) => !prev)} className = "text-blue-400 hover:underline cursor-pointer">Register here</span>

    </p>
    </div>
  )
}

export default Login
