import React from 'react'
import img from "../assets/successful.png"
import img2 from "../assets/Tick.png"

const Successful = () => {
  return (
    <div className='relative w-80 h-80  flex items-center justify-center'>
        <img src={img} alt="bg" className='absolute w-full h-full'/>
        <div className='relative  z-30 flex flex-col justify-center items-center'>
            <img src={img2} alt="img" className='w-28 h-28' />
            <h4 className='text-white'>You have successfully signed up</h4>
            <p  className='text-white'>Check For Verification Lnk</p>
        </div>
    </div>
  )
}

export default Successful