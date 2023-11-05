import React from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import avatar from '../../assets/Avatar.png'

const AdminSidebar = () => {
  return (
    <aside className='bg-[#F2F1F1] w-2/12  py-11 sticky top-0 flex flex-col justify-between items-center space-y-16 h-[100vh]'>
      <div className=''>
          <img src={logo} alt="" />
      </div>

      <div className='w-full px-10'>
        <ul className='flex flex-col space-y-3 '>
          <li>
            <Link to={"/"} className='block w-full text-md hover:bg-[#D9D9D9] py-3 px-2 '>Analytics</Link>
          </li>
          <li>
            <Link className='block w-full text-md hover:bg-[#D9D9D9] py-3 px-2 ' to={"/"}>Users</Link>
          </li>
          <li>
            <Link className='block w-full text-md hover:bg-[#D9D9D9] py-3 px-2 ' to={"/"}>Transaction</Link>
          </li>
          <li>
            <Link className='block w-full text-md hover:bg-[#D9D9D9] py-3 px-2 ' to={"/"}>Onboarding</Link>
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
                        <h3 className='text-black'>Olivia Rhye</h3>
                        <span className='text-[#898A8B]'>olivia@-learning.com</span>
                    </div>
                </div>
      </div>
    </aside>
  )
}

export default AdminSidebar