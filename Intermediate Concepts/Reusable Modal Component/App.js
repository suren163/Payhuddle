import  Modal  from './Modal'
import React, { useState } from 'react'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = ()=>{
    setIsOpen(true);
  }
  const OnClose =()=>{
    setIsOpen(false);
  }
  return (
    <div
    style={{
        margin: '3rem',
        border: '3px solid green',
        borderRadius: '1rem',
        padding: '3rem',
        fontSize: '1.3rem',
      }}
> 

      <h1>Hi, I'm Surendhar S</h1>
      <button onClick={()=>handleOpen()}>Click Here</button>
      <Modal isOpen={isOpen} OnClose={OnClose}>
        <h3>From Namakkal</h3>
        <h4>Master of Computer Application</h4>
      </Modal>
    </div>
  )
}

export default App