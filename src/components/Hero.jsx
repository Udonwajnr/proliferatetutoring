import React from 'react'
import boy from '../assets/boy.png'
import live from '../assets/Live.png'

const Hero = () => {
  return (
    <div>
        <div className='bg-blue-bg flex justify-between items-center'>
            <div className='w-full'>
                <h2 className='text-[48px] text-white tracking-wider font-bold'>
                    Maximizing Potentials 
                    Raising High Flyers
                    One Session at A Time
                </h2>
                <div className='flex bg-white rounded-lg'>
                    <input type="text" placeholder='SEARCH FOR SUBJECT OR TUTORS' className='h-16 w-full px-3 focus:outline-none'/>
                    <div className='bg-white p-2 rounded-lg'>
                        <button className=' rounded-lg'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 256 256"><path fill="currentColor" d="m226.83 221.17l-52.7-52.7a84.1 84.1 0 1 0-5.66 5.66l52.7 52.7a4 4 0 0 0 5.66-5.66ZM36 112a76 76 0 1 1 76 76a76.08 76.08 0 0 1-76-76Z"></path></svg>
                        </button>
                    </div>

                </div>

            </div>

            <div className='w-full flex justify-end'>
                <img src={boy} alt="" />
            </div>
        </div>

        <div>
            <div className='relative '>
                <div className='flex items-center justify-between'>
                    <p className=''>English Language Class</p>    
                    <img src={live} alt="" /> 
                </div>

                <div>
                    <button className='bg-blue-bg rounded-xl text-white py-2 px-4'>Join Class</button>
                </div>
            </div>            
        </div>
    </div>
  )
}

export default Hero