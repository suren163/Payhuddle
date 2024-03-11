import React from 'react'

const Content = () => {
  return (
    <div style={contentStyle}>
        <h2>Enabling transaction performance with confidence</h2>
      <p>
      It doesn’t matter whether you are an acquiring bank, a payment processor, a terminal vendor, a payment scheme, or an organisation that is in the business of enabling transactions - we have you covered.       </p>
      <p>
      As a payment solutions organisation we can help you ensure the confidence and performance of your transactions. 
      </p>
      <button className='btn btn-primary'>Learn More</button>
    </div>
  )
}

const contentStyle = {
    backgroundColor: '#B2CAF4',
    color: '#333',
    textAlign: 'start',
    padding: '80px',
    margin: '60px auto',
    maxWidth: '1500px'
}

export default Content