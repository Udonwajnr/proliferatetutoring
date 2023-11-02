import React from 'react'
import rect4 from "../assets/Rect4.png"
import { Link } from 'react-router-dom'

const Excel = () => {
  return (
    <section className='mt-10'>
        <div className='excel relative flex flex-col justify-center items-center h-[500px]'>
            {/* background image */}
            <h2 className='text-blue-bg text-[40px] font-bold'>Ready to Excel in Your Studies</h2>
            <p className='text-[20px]'>Discover your perfect tutor in our library and start learning!</p>
            <Link to={"/"} className='py-2 px-4 bg-blue-bg text-white font-bold rounded-lg mt-16'>Find Your Tutor</Link>

        </div>

    </section>
  )
}

export default Excel