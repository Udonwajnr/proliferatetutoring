import React from 'react'
import img from "../assets/404.png"
import MainLayout from '../components/MainLayout'
import { Link } from 'react-router-dom'

const PageError = () => {
  return (
    <MainLayout>
        <section className='errorPage h-[1000px] p-10 '>
            <div>
                <div className=''>
                    <h1 className='text-[60px] text-[#E9EAF0] font-bold'>Error 404</h1>
                    <h2 className='text-[40px] font-bold'>Oops! page not found</h2>
                    <p className='text-[25px] text-[#4E5566]'>Something went wrong. It’s look that your requested <br /> could not be found. It's look like the link is broken or the page is removed.</p>
                    <Link to={'/'} className='p-4 inline-block mt-4 w-40 text-center bg-blue-bg text-white text-md font-bold'>Go Back</Link>
                </div>
            </div>
        </section>
    </MainLayout>
  )
}

export default PageError