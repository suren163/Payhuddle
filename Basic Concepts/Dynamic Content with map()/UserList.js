import React from 'react'

const UserList = ({user}) => {
  return (
    <div style={{margin:'3%'}}>
        <h1>UserList</h1>
        <ul>
        {user.map((item) => (
            <li>{item.name}</li>
        ))}
        </ul>
    </div>
  )
}

export default UserList