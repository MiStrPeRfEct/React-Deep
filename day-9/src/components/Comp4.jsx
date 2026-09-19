import React, {useContext} from 'react'
import { MyStore } from '../context/MyContext'

const Comp4 = () => {
  let cd = useContext(MyStore);
  return (
    <div>
      <h1>Component 4</h1>
    </div>
  )
}

export default Comp4
