import React from 'react'
import './Input.css'
const Input = ({type, placeholder}) => {
    
  return (
    <div>
        <input
        type={type}
        placeholder={placeholder}
        />
    </div>
  )
}

export default Input