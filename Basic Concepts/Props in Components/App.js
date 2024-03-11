import React from 'react'
import UserProfile from './UserProfile'

const App = () => {
  const user = {
    name: 'Surendhar',
    age: 21,
  }
  return (
    <UserProfile 
    user = {user}
    />
  )
}

export default App