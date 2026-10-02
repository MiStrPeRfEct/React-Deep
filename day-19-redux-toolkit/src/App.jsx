import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counterSlice'

const App = () => {
  let dispatch = useDispatch()
  let {count} = useSelector((store) => store.counter)
  return (
    <div>
      <h1>count is {count}</h1>
      <button onClick={()=> dispatch(decrement())}>decrement</button>
      <button  onClick={()=> dispatch(increment())}>increment</button>
    </div>
  )
}

export default App
