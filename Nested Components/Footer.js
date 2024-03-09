import React from 'react'

const Footer = () => {
  return (
    <div style={footerStyle}>
        Surendhar&copy; 2024
    </div>
  )
}
const footerStyle = {
    backgroundColor: '#06121F',
  color: '#fff',
  textAlign: 'center',
  fontSize: '2rem',
  fontWeight: 'bold',
  padding: '30px',
  position: 'fixed',
  bottom: '0',
  width: '100%'
}

export default Footer