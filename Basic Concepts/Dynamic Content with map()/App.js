import React from 'react'
import UserList from './UserList'

const App = () => {
  const user = [
    {
      id: 1,
      name: "surendhar"
    },
    {
      id:2,
      name: "Anand"
    },
    {
      id:3,
      name: "Mukesh"
    },
    {
      id:4,
      name: "Logesh"
    },
    {
      id:5,
      name: "HashWar"
    }
  ]
  return (
    <UserList 
    user = {user}
    />
  )
}

export default App