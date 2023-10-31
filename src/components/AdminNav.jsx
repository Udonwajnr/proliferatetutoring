import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const AdminNav = () => {
  return (
    <header className='p-2'>
        <nav>
                <div className="logo">
                    <Link>
                            <img src={logo} alt="" />
                    </Link>
                </div>
            
        </nav>
    </header>
  )
}

export default AdminNav