import React from 'react'
import thumb from "../assets/thumb.png"

const WhatWeOffer = () => {
  return (

    <section className='h-[600px] py-10'>
        <div className='flex flex-col justify-center items-center gap-y-2'>
                <h2 className='text-[#186BAD] font-bold text-[40px]'>What We Offer</h2>
                    <div className='border w-32 border-[#D23221]'></div>
            </div>

        <div className='flex justify-center gap-x-24 items-center'>
          <div className=''>
             <img src={thumb} alt="picture" />
          </div>
          <div>
            <ul className='list-disc flex flex-col gap-y-3'>
              <li className='text-md'>Progress Tracking</li>
              <li className='text-md'>Experienced Tutors</li>
              <li className='text-md'>Personalized Learning Paths</li>
              <li className='text-md'>Interactive Virtual</li>
              <li className='text-md'>Diverse Subject Offerings</li>
            </ul>
            <span className='text-[#D23221]'>Learn More > </span>
          </div>
        </div>
        <div></div>
    </section>
  )
}

export default WhatWeOffer