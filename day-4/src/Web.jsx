import React, { useState } from 'react'
import Card from './components/Card'
import About from './components/About'
import Contact from './components/Contact'

const Web = () => {
  const [formData, setFormData] = useState({});


  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  console.log(formData)

  const handleChange = (e) => {

    let { name, value} = e.target;
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  return (
    <div className="flex flex-col gap-4 w-60">
      <input name="name" onChange={handleChange} className="border-2" type="text" placeholder="Name" />
      {/* <h1>THis is name - {name}</h1> */}
      <input name="email" onChange={handleChange} className="border-2" type="email" placeholder="Email" />
      {/* <h1>THis is email - {email}</h1> */}
      <input name="password" onChange={handleChange} className="border-2" type="password" placeholder="Password" />
      {/* <h1>THis is password - {password}</h1> */}
    </div>
  )
}

export default Web
