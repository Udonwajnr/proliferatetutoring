import React from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import avatar from '../../assets/Avatar.png'

const AdminSidebar = () => {
  return (
    <aside className='bg-[#F2F1F1] w-2/12  py-11 sticky top-0 flex flex-col space-y-16 h-[133vh]'>
      <div>
          <img src={logo} alt="" />
      </div>

      <div>
        <ul>
          <li>
            <Link to={"/"}>Analytics</Link>
          </li>
          <li>
            <Link to={"/"}>Users</Link>
          </li>
          <li>
            <Link to={"/"}>Transaction</Link>
          </li>
          <li>
            <Link to={"/"}>Onboarding</Link>
          </li>
        </ul>
      </div>

      <div>
        <button>Log out</button>
      </div>

      <div className='flex items-center space-x-4'>
                <div className='flex items-center space-x-3'>
                    <img src={avatar} className='w-10 h-10 rounded-full' alt="avatar" />
                    <div className=''>
                        <h3 className='text-white'>Olivia Rhye</h3>
                        <span className='text-white'>olivia@-learning.com</span>
                    </div>
                </div>
      </div>
    </aside>
  )
}

export default AdminSidebar