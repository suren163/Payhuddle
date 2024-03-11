import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserPage = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/users').then(res=>setUsers(res.data)).catch(err=>console.log("Error"))
    },[])
  return (
    <div>
        {users.map(user=>(
            <ul>
                <li>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </li>
            </ul>
        ))}
    </div>
  )
}

export default UserPage