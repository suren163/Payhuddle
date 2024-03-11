import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
            <li>
                <Link to="/NotFound">NotFound</Link>
            </li>
        </ul>
    </nav>
      <Outlet />
      </>
  )
}

export default Layout