import React from 'react'

const About = () => {
    console.log('about is rendering')
  return (
    <div>
      <h1>about</h1>
    </div>
  )
}

export default React.memo(About,);
