import React from 'react'
import MainLayout from '../components/MainLayout'
import square3 from '../assets/square3.png'
import bank from '../assets/Bank.png'
import phone from '../assets/Phone.png'
import envelope from '../assets/Envelope.png'

const ContactUs = () => {
  return (
    <MainLayout>
        <section>
                <div className='relative'>
                    <img src={square3} alt="" className='w-full h-full'/>
                    <div className='absolute text-center top-[50%] w-full'>
                        <h3 className='text-white font-bold text-[24px]'>CONTACT US</h3>
                    </div>
                </div>
        </section>

        <section className='h-[800px] py-3 flex justify-center items-center'>
            <div className='flex space-x-7 w-full px-10 p-10'>
                <div className='w-6/12'>
                    <h1 className='text-blue-bg font-bold'>CONTACT US</h1>
                    <p className='mt-2 font-bold'>GET IN TOUCH WITH US</p>

                    <p className='my-9 font-bold max-w-[800px]'>
                         Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
                    </p>

                    <div className='flex flex-col space-y-4'>
                        <div className='flex items-center space-x-4'>
                            <img src={bank} alt="bank" />
                            <span className='text-sm text-blue-bg font-bold'>ADDRESS</span>
                        </div>

                        <div className='flex items-center space-x-4'>
                            <img src={phone} alt="phone" />
                            <span className='text-sm text-blue-bg font-bold'>(289)952-2596</span>
                        </div>

                        <div className='flex items-center space-x-4'>
                            <img src={envelope} alt="envelop" />
                            <span className='text-sm text-blue-bg font-bold'>info@proliferate.ai</span>
                        </div>
                    </div>



                </div>

                <div className='bg-blue-bg py-5 h-full  w-6/12'>
                    <form action="" className='bg-white max-w-[700px] flex flex-col space-y-4 px-4 py-4 shadow-xl h-5/6 right-16 relative'>
                        <div className='w-full'>
                            <input type="text" className='w-full bg-ash h-12 px-3 focus:outline-none rounded-md'  placeholder='YOUR NAME'/>
                        </div>
                        <div>
                            <input type="text" className='w-full bg-ash h-12 px-3 focus:outline-none rounded-md'  placeholder='YOUR EMAIL'/>
                        </div>
                        <div>
                            <input type="text" className='w-full bg-ash h-12 px-3 focus:outline-none rounded-md'  placeholder='YOUR PHONE NUMBER'/>
                        </div>
                        <div>
                            <textarea className='h-60 bg-ash w-full px-3 resize-none focus:outline-none'    placeholder='YOUR MESSAGE'></textarea>
                        </div>

                        <button className='bg-blue-bg text-white py-3 rounded-md'>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </section>
    
    </MainLayout>
  )
}

export default ContactUs