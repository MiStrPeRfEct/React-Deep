import React, { useCallback, useMemo, useState } from 'react'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  console.log('app is rendering');
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState({name: 'John', id: 30});
  let greet = useCallback(()=>{
    console.log("hello....Good evening")
  },[])

  let calculation = useMemo(() =>{
    let sum = 0;
    for(let i=0; i<100;i++){
      sum += i;
    }return sum;
  },[]);
  return (
    <div>
      <h1>Memoization</h1>
      <h2>Count: {count}</h2>
      <h2>Users: {users.name} </h2>
      <h2>Calculation: {calculation}</h2>
      <button onClick={()=>setUsers({...users, name: 'Jane'})}>Change name</button>
      <button onClick={()=>setCount(count + 1)}>increment</button>
      <Home greet={greet}/>
      <About greet = {greet}/>
    </div>
  )
}

export default App
