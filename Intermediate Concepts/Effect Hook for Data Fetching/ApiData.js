import React from 'react'

const ApiData = ({data}) => {
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
        <h1>User Data</h1>
        {data.map((item) => (
            <ul>
                <li>{item.name} , {item.email}</li>
            </ul>
        ))}
    </div>
  )
}

export default ApiData