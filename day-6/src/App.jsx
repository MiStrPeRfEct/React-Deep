import React from 'react'
import Form from './components/Form'
import RHF from './components/RHF'

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-300 p-5">
      <h1 className='mb-8'>Hey this form</h1>
      {/* <Form /> */}
      <RHF />
    </div>
  )
}

export default App
