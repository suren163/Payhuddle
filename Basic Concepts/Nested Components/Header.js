import React from 'react'

const Header = () => {
  return (
    <div style={headerStyle}>Payhuddle</div>
  )
}

const headerStyle = {
    backgroundColor: '#06121F',
    color: '#fff',
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    padding: '30px'
}

export default Header