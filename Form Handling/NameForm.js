import React, { useState } from 'react'

const NameForm = () => {
    const [name, setName] = useState('');
    const handleChange = (event) =>{
        setName(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(`Entered Name is: ${name}`)
    }
  return (
    <div style={{margin: '3%'}}>
        <h1>User Form</h1>
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" value={name} onChange={handleChange} />
            <br /> <br />
            <button className='btn btn-primary'>Submit</button>
        </form>
        <h4>{name}</h4>
    </div>
  )
}

export default NameForm