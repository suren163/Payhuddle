import React from 'react'
import DropdownMenu from './DropdownMenu'


const App = () => {
  const fruits = [
    {
      name : 'Apple', advantage : 'a good source of nutrients'
    },
    {
      name : 'Orange', advantage : 'Forms blood vessels, muscles'
    },
    {
      name : 'Banana', advantage : 'improve your digestion and heart health'
    },
    {
      name : 'Mango', advantage : 'strengthening your bones'
    }
  ]
  return (
    <DropdownMenu 
    fruits = {fruits}
    />
  )
}

export default App