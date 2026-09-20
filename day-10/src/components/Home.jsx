import React from 'react'
import { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const Home = () => {
   let {count, setCount} = useContext(MyStore);
  return (
    <div>
      <h1>hello - {count}  </h1>
            <button onClick={()=>setCount(count + 1)}>Increment</button>
      
    </div>
  )
}

export default Home
