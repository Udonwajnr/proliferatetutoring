import React from 'react'
import { Link } from 'react-router-dom'
import card1 from "../assets/card.png"


const PaymentPlan = () => {
  return (
    <section className='py-10'>
        <div className='flex flex-col justify-center items-center gap-y-3'>
                    <h2 className='text-[#186BAD] font-bold text-[40px]'>Our Payment Plan</h2>
                        <div className='border w-32 border-[#D23221]'></div>
            </div>
            <div className='w-[700px] m-auto text-center'>
                    <p className='text-[#898A8B] text-md text-center my-5'>
                    Unlock a world of knowledge with our most sought-after 
                                    subjects. Explore, learn, and excel in the areas that pique your 
                                    curiosity and passion.
                        </p>
            </div>
            <div className='flex gap-x-6 justify-center mt-10'>
                <div>
                    <div className='card w-[350px] h-[500px] rounded-2xl border-8 border-[#34A7FA] flex flex-col gap-y-10 justify-center items-center'>
                        <h2 className='text-[40px] font-bold'>Basic</h2>
                        <ul className='list-disc'>
                            <li className='text-md'>2 Tutors</li>
                            <li className='text-md'>5 Subject</li>
                            <li className='text-md'>10 Hours</li>
                        </ul>

                        <h3 className='text-[40px] font-bold'>$100</h3>

                        <Link to={"/"} className='text-md bg-blue-bg text-white font-bold px-3 py-2 rounded-xl'>Get Started</Link>
                    </div>
                </div>

                <div>
                    <div className='card w-[350px] h-[500px] rounded-2xl border-8 border-[#70FF3E] flex flex-col gap-y-10 justify-center items-center'>
                        <h2 className='text-[40px] font-bold'>Standard</h2>
                        <ul className='list-disc'>
                            <li className='text-md'>2 Tutors</li>
                            <li className='text-md'>5 Subject</li>
                            <li className='text-md'>10 Hours</li>
                        </ul>

                        <h3 className='text-[40px] font-bold'>$200</h3>

                        <Link to={"/"} className='text-md bg-[#70FF3E] text-white font-bold px-3 py-2 rounded-xl'>Get Started</Link>
                    </div>
                </div>

                <div>
                    <div className='card w-[350px] h-[500px] rounded-2xl border-8 border-[#FFB800] flex flex-col gap-y-10 justify-center items-center'>
                        <h2 className='text-[40px] font-bold'>Basic</h2>
                        <ul className='list-disc'>
                            <li className='text-md'>2 Tutors</li>
                            <li className='text-md'>5 Subject</li>
                            <li className='text-md'>10 Hours</li>
                        </ul>

                        <h3 className='text-[40px] font-bold'>$500</h3>

                        <Link to={"/"} className='text-md bg-[#FFB800] text-white font-bold px-3 py-2 rounded-xl'>Get Started</Link>
                    </div>
                </div>

            </div>





    </section>
  )
}

export default PaymentPlan