import React from 'react'
import UserList from './UserList'

const App = () => {
  const data = [
    {name: 'surendhar', age: 21},
    {name: 'Anand', age: 22},
    {name: 'Mukesh', age:25},
    {name: 'HashWar', age:27},
    {name: 'logesh', age:20}
  ]
  return (
   <UserList 
   data ={data}
   />
  )
}

export default App