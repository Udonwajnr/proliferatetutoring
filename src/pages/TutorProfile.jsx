import React from 'react'
import Layout from '../components/Layout'
import img from '../assets/Test_Account.png'
import Calendar from 'react-calendar'
import "../App.css"
import { Link } from 'react-router-dom'

const TutorProfile = () => {
  return (
    <Layout>
      <section className='flex  flex-col items-center'>
          <h2 className='text-lg text-center my-4'>Build your Tutor Profile</h2>
          <form action="" className='w-full max-w-[550px]'>
            <div className='flex flex-col justify-center items-center'>
              <img src={img} alt="profile" className='w-28 h-24'/>
              <div className='flex my-3'>
                <button onClick={()=>document.querySelector(".input").click()} className='flex justify-center items-center'>
                  <div className='bg-blue-bg px-1 pt-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
                    className='text-white' viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M24 6v36M12 18L24 6l12 12"></path></svg>
                  </div>
                    <p className='text-black font-bold'>Upload Your Image</p>
                </button>
              </div>
                <div className='dis'>
                <input type="file"  className='input' hidden/>
                </div>
            </div>

            <div className='flex flex-col my-3'>
              <textarea className='border bg-ash h-20' name="" id="" cols="30" rows="10" placeholder='write brief about yourself'></textarea>
              <span className='text-right'>0/500 characters</span>
            </div>


            <div className='flex flex-col my-3'>
              <label htmlFor="" className='text-blue-bg font-bold'>Specialization</label>
              <input type="text" placeholder='Specify the subjects and topics you excel in' className='h-20 border bg-ash px-2'/>
            </div>

            <div className='flex flex-col my-3'>
              <label htmlFor="" className='text-blue-bg font-bold'>Session Rates(&#36;/hr)</label>
              <input type="text" className='h-20 border bg-ash px-2'/>
            </div>

            <div className='flex flex-col '>
              <label htmlFor="" className='text-blue-bg font-bold my-3'>Availability</label>
              <Calendar />
            </div>

            <div className='flex flex-row items-center justify-end space-x-3'>
                  <Link to={"/verification"} className=' my-2 text-black py-2 rounded-md font-bold flex items-center'>Next
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"></path></svg>
                  
                  </Link>
                </div>

          </form>
      </section>
      </Layout>
  )
}

export default TutorProfile