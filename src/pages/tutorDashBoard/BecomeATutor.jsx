import React from 'react'
import AdminNav from '../../components/AdminNav'
import MainFooter from '../../components/MainFooter'
import { Link } from 'react-router-dom'
const BecomeATutor = () => {
  return (
    <>
      <AdminNav/>

      <main>
        <section className="flex flex-col items-center py-6">
        <h2 className='text-lg text-center my-4'>Have a Skill? Share them!</h2>

        <form action="" className='w-full max-w-[550px]'> 
            <div className='flex flex-col my-4 space-y-2'>
                <label htmlFor="" className='text-blue-bg'>Name</label>
                <input type="text" placeholder='FullName' className='w-full border h-9 bg-ash'/> 
              </div>
            
                <div className='flex flex-col my-4 space-y-2'>
                    <label htmlFor="" className='text-blue-bg font-bold'>Professional Headline</label>
                    <input type="text" placeholder='text' className='w-full border h-9 bg-ash'/> 
              </div>
             
              <div className='flex flex-col my-4 space-y-2'>
                <label htmlFor="" className='text-blue-bg font-bold'>Email</label>
                <input type="text" placeholder='Email' className='w-full border h-9 bg font-bold-ash'/> 
              </div>

              <div className='flex flex-col my-4 space-y-2'>
                <label htmlFor="" className='text-blue-bg font-bold'>Password</label>
                <input type="password" placeholder='Password' className='w-full border h-9 bg-ash'/> 
              </div>

              <div className='flex justify-end my-4 items-center'>
                <span className='font-bold text-blue-bg'>Next</span>
              </div>

              <div className='flex items-center my-4 space-x-4'>
                <input type="checkbox" name="" id="" className='h-7 w-7' />
                <p className='text-[14px]'>By creating an account, you have agreed to the <span className='text-blue-bg'>terms of use</span>  and our <span className='text-blue-bg'>privacy
                policy </span></p>
              </div>
                  <button className='text-center bg-blue-bg text-white w-full py-2 rounded-md font-bold'>Sign Up</button>
                <div className='text-center my-4'>
                    <small className='text-[#898A8B] text-[15px]'>Already have an account? <Link to={"/login"} className='text-blue-bg'>log in</Link></small>
                </div>
            </form>
        </section>
      </main>

      <MainFooter/>
    </>
  )
}

export default BecomeATutor