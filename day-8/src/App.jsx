import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Usercard from './components/Usercard'
import Form from './components/Form'

const App = () => {
 
  const[toggle,setToggle]=useState(true);
  const [users,setUsers]=useState(() =>{
    return JSON.parse(localStorage.getItem("users")) || [];});

    const deleteUser = (id) => {
      let filterUser = users.filter((val, index) => {
        return index !== id;
        })
        setUsers(filterUser);
        localStorage.setItem("users", JSON.stringify(filterUser));
};
const[updateData,setUpdateData]=useState(null)
  return (
    <div className='p-3 h-screen flex flex-col gap-4'>
      <Navbar setToggle = {setToggle} />
      {
        toggle ?   (<div className='flex flex-wrap gap-4'>
        {users.map((elem, index) => {
          return <Usercard setUpdateData={setUpdateData}  deleteUser={deleteUser} key={elem.id} user = {elem} setToggle = {setToggle}/> 
        })}
      </div>) : (<div className='flex justify-center h-[70%] items-center'>
        <Form updateData={updateData} users={users} setUsers={setUsers} setToggle={setToggle} />
      </div>)
      }
    
    </div>
  )
}

export default App
