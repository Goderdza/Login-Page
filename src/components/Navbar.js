import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li className='about'>About Us</li>
            <li className='login'><Link to="/login"/>Login</li>
            <li className='register'>Register</li>
        </ul>
    </div>
  )
}

export default Navbar