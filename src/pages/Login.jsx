import React from 'react'
import Layout from '../components/Layout'
import child from '../assets/child.png'
import google from '../assets/Google.jpg'
import facebook from '../assets/facebook.png'

import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <Layout>
        <section className='flex flex-row items-center py-9'>
          <div className='w-full'>
            <img src={child} alt="child" />
          </div>
          <div className='w-full'>
            <h1 className='text-lg text-center my-4'>Hi,Welcome Back!</h1>
            <form >
              <div className='flex flex-col my-2 space-y-2'>
                <label htmlFor="" className='text-blue-bg'>Email</label>
                <input type="text" placeholder='Email' className='w-full border h-9 bg-ash'/> 
              </div>
              <div className='flex flex-col my-2 space-y-2'>
                <label htmlFor="" className='text-blue-bg '>Password</label>
                <input type="text" placeholder='Password' className='w-full border h-9 bg-ash'/> 
              </div>
              <div className='my-2 flex items-center space-x-2 my-3'>
                <input type="checkbox" name="" id="" />
                <small className='text-blue-bg font-bold'>Keep me signed in</small>
              </div>

              <button className='text-center bg-blue-bg text-white w-full py-2 rounded-md font-bold'>Sign In</button>
            </form>
            <div className='flex flex-col justify-center items-center my-3'>
              <Link to="/" className='text-blue-bg my-1'>Forgot Password</Link>
              <p className='text-[#898A8B] '>Don't have an account? <span className='text-blue-bg'><Link to={'/register'}>Sign Up</Link></span></p>
            </div>

            <div className='flex items-center space-x-1'>
              <hr className='border w-5/12'/>
              <p className='text-[#898A8B] text-center'>or sign in with</p>
              <hr className='border w-5/12'/>
            </div>

            <div className='flex justify-center items-center space-x-3 mt-8'>
              <div className='w-16 h-16 border rounded-full flex justify-center items-center '>
                <img src={google} alt={"google"} />
              </div>
              <div className='w-16 h-16 border rounded-full flex justify-center items-center '>
                <img src={facebook} alt={"facebook"} />
              </div>

            </div>
          </div>
        </section>
    </Layout>
  )
}

export default Login