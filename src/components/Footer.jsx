import React from 'react'
import logo from '../assets/logoWhite.png'
import facebook from '../assets/Facebook.png'
import instagram from '../assets/Instagram.png'
import Linkedin from '../assets/Linkedin.png'

const Footer = () => {
  return (
    <footer className='bg-blue-bg py-6 px-5'>
      <div className='flex justify-between'>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className='flex space-x-9'>
          <img src={facebook} alt="Facebook"  className='w-10 h-10'/>
          <img src={instagram} alt="Instagram" className='w-10 h-10'/>
          <img src={Linkedin} alt="LinkedIn" className='w-10 h-10'/>
        </div>
      </div>

      <div className='flex justify-center items-center mt-5'>
        <small className='text-md text-white'> &#169; 2023 proliferatetutoring.com All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer