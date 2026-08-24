import React, { useState } from 'react'

const Register = ({setToggle}) => {
 const [formData, setFormData] = useState({});

 const handleChange = (e) => {
  let {name, value} = e.target;
  setFormData((formData) => ({
    ...formData,
    [name]: value
  }));
 };
 const handleSubmit = (e) => {
  e.preventDefault();
 }

  return (
    <div className= "bg-white w-90 p-6 rounded-xl flex flex-col gap-4">
      <h1>Register</h1>

    <form onSubmit={handleSubmit}className='flex flex-col gap-4 ' action="">
        <input name="name" onChange={handleChange} className = "p-2 border border-gray-400 rounded" type="text" placeholder='Name' />
        <input name="email" onChange={handleChange} className = "p-2 border border-gray-400 rounded" type="email" placeholder='Email' />
        <input name="password" onChange={handleChange} className = "p-2 border border-gray-400 rounded" type="password" placeholder='Password' />
        <button type='submit' className='p-2 bg-blue-600 text-white rounded cursor-pointer'>Register</button>
    </form>
    <p>
        Already have an account? <span onClick={()=>setToggle(true)} className = "text-blue-400 hover:underline cursor-pointer">Login here</span>

    </p>
    </div>
  )
}

export default Register
