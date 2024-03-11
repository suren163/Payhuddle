import React from 'react'

const FruitList = ({fruits}) => {
  return (
    <div style={{margin:'2rem'}}>
        <h1>FruitList</h1>
        <ul>
        {fruits.map((item) => (
            <li>{item}</li>
        ))}        
        </ul>
    </div>
  )
}

export default FruitList