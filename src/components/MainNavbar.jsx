import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const MainNavbar = () => {
  return (
    <header className='px-4 '>
    <nav className='flex items-center justify-between'>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div>
            <ul className='flex space-x-4'>
                <li>
                    <Link to={'/'}>Find Tutors</Link>
                </li><li>
                    <Link to={'/'}>About Us</Link>
                </li>
                <li>
                    <Link to={'/'}>Our Programs</Link>
                </li>
                <li>
                    <Link to={'/'}>Pricing</Link>
                </li>
                <li>
                    <Link to={'/'}>Blog</Link>
                </li>
                <li>
                    <Link to={''}>Contact</Link>
                </li>
            </ul>
        </div>
        <div className='flex space-x-4'>
            <Link to={"/login"} className='bg-blue-bg text-white py-2 px-3 rounded-lg'>Login</Link>
            <Link to={"/register"} className='text-black bg-dark-white py-2 px-3 rounded-lg'>Sign Up</Link>
        </div>
    </nav>
</header>
  )
}

export default MainNavbar