import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import NotFound from './NotFound'

const App = () => {
  return (
    <BrowserRouter>  
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='notfound' element={<NotFound />}></Route>
      </Route>        
    </Routes>
    </BrowserRouter> 
  )
}
export default App