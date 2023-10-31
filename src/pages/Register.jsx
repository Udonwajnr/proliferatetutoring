import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <Layout>
        <section className="flex flex-col items-center">
            <h2 className='text-lg text-center my-4'>Hey There, Sign Up!</h2>
            <form action="" className='w-full max-w-[550px]'>
            
            <div className='flex flex-col my-2 space-y-2'>
                <label htmlFor="" className='text-blue-bg'>Name</label>
                <input type="text" placeholder='FullName' className='w-full border h-9 bg-ash'/> 
              </div>
            
                <div className='flex flex-col my-2 space-y-2'>
                    <label htmlFor="" className='text-blue-bg'>Email</label>
                    <input type="text" placeholder='Email' className='w-full border h-9 bg-ash'/> 
              </div>
             
              <div className='flex flex-col my-2 space-y-2'>
                <label htmlFor="" className='text-blue-bg'>Password</label>
                <input type="text" placeholder='Password' className='w-full border h-9 bg-ash'/> 
              </div>

                <div className='my-3'>
                    <input type="checkbox" name="" id="" />
                    <span className='text-[#898A8B] ml-3'>By creating an account, you have agreed to the terms of use and our privacy
                    policy </span>
                </div>

                  <button className='text-center bg-blue-bg text-white w-full py-2 rounded-md font-bold'>Sign Up</button>

                <div className='text-center my-3'>
                    <small className='text-[#898A8B] text-md'>Already have an account? <Link to={"/login"} className='text-blue-bg'>log in</Link></small>
                </div>
            </form>
        </section>
    </Layout>
  )
}

export default Register