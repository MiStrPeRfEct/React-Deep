import React, {useState} from 'react'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  let [count, setcount] = useState(0);
  
  console.log(count)
  return (
    <div>
      <h1>count -- {count}</h1>
      <button onClick={() => {
        setcount(count + 1)
      }}>Increment</button>
      
    </div>
  )
}

export default App
