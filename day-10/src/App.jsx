import React , {useContext , useState, useEffect}from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { ContextProvider, MyStore } from './context/MyContext'
import axios from 'axios'

const App = () => {

  const [apiData,setApiData]=useState(null);
 let getData = async () =>{
  let res =await axios.get("https://fakestoreapi.com/products")
 console.log(res.data)
 setApiData(res.data)
 }
useEffect(()=>{
   getData()
},[])
  
  return (
    <div>
      
      <ContextProvider>

      <Home/>
      <About/>
      </ContextProvider>
      <Contact/>
    </div>
  )
}

export default App
