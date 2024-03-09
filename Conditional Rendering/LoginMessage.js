import React, { useState } from 'react'

const LoginMessage = () => {
    const [isLogged, setIsLogged] = useState(false);
  return (
    <div style={{margin:'4%'}}>
        <h1>LoginMessage</h1>
        {isLogged ? <h1>Welcome Back!</h1> : <h1>Please sign in</h1>}
        <button className='btn btn-primary' onClick={()=>setIsLogged(!isLogged)}>{isLogged ? 'Sign Out' : 'Sign In'}</button>
    </div>
  )
}

export default LoginMessage