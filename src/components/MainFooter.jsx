import React from 'react'
import { Link } from 'react-router-dom'
import phone from '../assets/Vector.png'
import mail from '../assets/EnvelopeSimple.png'
import logo from '../assets/logoWhite.png'
import facebook from '../assets/Facebook.png'
import instagram from '../assets/Instagram.png'
import Linkedin from '../assets/Linkedin.png'

const MainFooter = () => {
  return (
    <footer className='bg-[#007AB9] py-10 px-5 '>
       <div className='flex justify-between'>
            <div className='w-6/12'>
                <div>
                <img src={logo} alt="logo" />
                </div>

                <div className='flex space-x-9 mt-6'>
                    <img src={facebook} alt="Facebook"  className='w-10 h-10'/>
                    <img src={instagram} alt="Instagram" className='w-10 h-10'/>
                    <img src={Linkedin} alt="LinkedIn" className='w-10 h-10'/>
                </div>

                    <h2 className='text-white my-4'>Subscribe to our Newsletter</h2>
                <div className='my-6 flex'>
                    <input type="text" className='border h-12 bg-white w-full' placeholder='EMAIL HERE' />
                    <button className='bg-[#186BAD] px-4 py2 text-white'>SUBSCRIBE</button>
                </div>

            </div>
        
            <div className='w-3/12'>
                <h3 className='text-white'>CONTACT US</h3>
                <div className='flex flex-col mt-3'>
                    <div className='flex  items-center space-x-3'>
                        <img src={phone} alt="" />
                        <span className='text-white'>(289)952-2596</span>
                    </div>
                    <div className='flex  items-center space-x-3'>
                    <img src={mail} alt="" />
                    <span className='text-white'>info@proliferate.ai</span>
                    </div>
                </div>
            </div>
            
            <div className='w-3/12'>
                <h3 className='text-white font-bold'>IMPORTANT LINKS</h3>
                <ul className='mt-4 space-y-2'>
                    <li className='flex flex-col gap-y-4'>
                        <Link to={"/"} className='text-white font-bold'>CONTACT US</Link>
                        <hr />
                    </li>

                    <li className='flex flex-col gap-y-4'>
                        <Link to={"/"} className='text-white font-bold'>REFER A TUTOR</Link>
                        <hr />
                    </li>

                    <li className='flex flex-col gap-y-4'>
                        <Link to={"/"} className='text-white font-bold'>PRIVACY POLICY</Link>
                        <hr />
                    </li>

                    <li>
                        <Link to={"/"} className='text-white font-bold'>TERMS & CONDITION</Link>
                    </li>
                </ul>
            </div>
       </div>

       <div className='text-center'>
        <small className='text-white font-bold tracking-wide'>© 2023 proliferatetutoring.com All Rights Reserved.</small>
       </div>
    </footer>
  )
}

export default MainFooter