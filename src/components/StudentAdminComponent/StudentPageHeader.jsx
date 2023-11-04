import React from 'react'
import Vector6 from '../../assets/Vector_6.png'
import img13 from '../../assets/image13.png'
import previous3 from '../../assets/previous3.png'
import next3 from '../assets/next3.png'

const StudentPageHeader = () => {
  return (
    <header className='flex py-3 items-center w-full justify-between'>
        <h2 className='text-[30px] font-bold'>Welcome</h2>
        
        <div className='flex items-center bg-[#57C1F2] px-3 py-2 rounded-2xl w-40 justify-between'>
                <button>
                    <img src={previous3} alt="" />
                </button>
            <span>Nov 02</span>
            <button>
                <img src={next3} alt="" />
            </button>
            {/* <img src={next} alt="" /> */}
        </div>

        <div>
            <form action="" className='flex space-x-6'>
                <div>
                    <select name="Classes" id="" className='focus:outline-none px-3 py-2 rounded-md shadow-lg'>
                        <option value="">Sort by Classes</option>
                    </select>
                </div>
                <div>
                    <select name="Week View" id="" className='focus:outline-none px-3 py-2 rounded-md shadow-lg'>
                        <option value="">Week View</option>
                    </select>
                </div>

                <div className='flex items-center border space-x-3 px-3 rounded-lg'>
                    <img src={Vector6} alt="" className='w-4 h-4' />
                    <input type="text" placeholder='Search' className='h-full focus:outline-none rounded-md'/>
                </div>
                
                <div className='relative'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 19v-2h2v-7q0-2.075 1.25-3.688T10.5 4.2v-.7q0-.625.438-1.063T12 2q.625 0 1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h2v2H4Zm8 3q-.825 0-1.413-.588T10 20h4q0 .825-.588 1.413T12 22Z"></path></svg>
                    </div>
                    <div className='bg-[#0997D9] h-3 w-3 rounded-full absolute top-0 z-10 right-0'>

                    </div>
                </div>
                
                <div>
                    <img src={img13} alt=""  className='w-10 h-10 rounded-full'/>
                </div>
            </form>
        </div>
</header>
  )
}

export default StudentPageHeader