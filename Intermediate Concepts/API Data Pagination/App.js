import React from 'react'
import UserPage from './UserPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='userpage' element={<UserPage />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App