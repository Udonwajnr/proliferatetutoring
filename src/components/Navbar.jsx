import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <header className='px-4 '>
        <nav className='flex items-center justify-between'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div>
                <ul className='flex space-x-4 py-2'>
                    <li className=''>
                        <Link to={'/'} className='hover:bg-red-600 py-2 px-1 hover:text-white font-bold'>Find Tutors</Link>
                    </li><li>
                        <Link to={'/'} className='hover:bg-red-600 py-2 px-1 hover:text-white font-bold'>About Us</Link>
                    </li>
                    <li>
                        <Link to={'/'} className='hover:bg-red-600 py-2 px-1 hover:text-white font-bold'>Our Programs</Link>
                    </li>
                    <li>
                        <Link to={'/'} className='hover:bg-red-600 py-2 px-1 hover:text-white font-bold'>Pricing</Link>
                    </li>
                    <li>
                        <Link to={'/'} className='hover:bg-red-600 py-2 px-1 hover:text-white font-bold'>Blog</Link>
                    </li>
                    <li>
                        <Link to={'/contact'} className='hover:bg-red-600 py-2 px-1 hover:text-white font-bold'>Contact</Link>
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

export default Navbar