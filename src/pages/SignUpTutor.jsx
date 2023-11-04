import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

const SignUpTutor = () => {
  return (
    <Layout>
        <section className="flex flex-col items-center">
            <h2 className='text-lg text-center my-4'>Sign Up as tutor</h2>
            <form action="" className='w-full max-w-[500px]'>
            
            <div className='flex flex-col my-2 space-y-2'>
                <label htmlFor="" className='text-blue-bg'>Full Name</label>
                <input type="text" placeholder='FullName' className='w-full border h-10 bg-ash'/> 
              </div>
            
                <div className='flex flex-col my-2 space-y-2'>
                    <label htmlFor="" className='text-blue-bg'>Email</label>
                    <input type="text" placeholder='Email' className='w-full border h-10 bg-ash'/> 
              </div>
             
              <div className='flex flex-col my-2 space-y-2'>
                <label htmlFor="" className='text-blue-bg'>Create Password</label>
                <input type="text" placeholder='Password' className='w-full border h-10 bg-ash'/> 
              </div>
              <div className='flex flex-col my-2 space-y-2'>
                <label htmlFor="" className='text-blue-bg'>Confirm Password</label>
                <input type="text" placeholder='Password' className='w-full border h-10 bg-ash'/> 
              </div>

              <Link to={"/tutor/signupprofile"} className=' my-2 text-black py-2 rounded-md font-bold flex items-center'>Next
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"></path></svg>

                  </Link>
            </form>

        </section>
    </Layout>
  )
}

export default SignUpTutor