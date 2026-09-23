import React from 'react'
import { Outlet , useNavigate} from 'react-router'

const NestedAbout = () => {
    let navigate = useNavigate()
  return (
    <div>
     <h1>Nested About</h1>
     <button onClick={() => navigate('/about/nested')}>Click Me</button>
           <Outlet/>
    </div>
  )
}

export default NestedAbout
