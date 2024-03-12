import React, { useState } from 'react'

const NameForm = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const handleName = (e)=>{
        setName(e.target.value)
    }
    const handleForm =(e) =>{
        e.preventDefault();
        if(name.trim() === '')
        {
            setError("Name cannot be Empty..");
        }
        else if(!/^[a-zA-Z\s]+$/.test(name))
        {
            setError("Invalid Format")
        }
        else
        {
            console.log("Submitted name is : "+name);
            alert("Submitted name is: "+name);
            setError('');
            setName('');
        }
    }
  return (
    <form onSubmit={handleForm} style={{margin:'2rem'}}>
        <label>Name  :</label>
        <input
        type='text'
        value={name}
        onChange={handleName}
        />
        {error && <p style={{color:'red'}}>{error}</p>}
        <button type='submit'>Submit</button>
    </form>
  )
}

export default NameForm