import React, { useState } from 'react'
const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);
    const handleToggle = ()=>{
        setIsOn(!isOn);
    }
  return (
    <div style={{margin: '5%'}}>
        <h1>ToggleButton</h1>
        <button className='btn btn-primary' onClick={handleToggle}>{isOn ? 'On' : 'Off'}</button>
    </div>
  )
}
export default ToggleButton
