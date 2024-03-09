import React from 'react'

const UserProfile = ({user}) => {
  return (
    <div>
        <h1>UserProfile</h1>
        <h3>Name : {user.name}</h3>
        <h3>Age  : {user.age}</h3>
    </div>
  )
}

export default UserProfile