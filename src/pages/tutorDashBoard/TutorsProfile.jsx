import React from 'react'
import TutorAdminLayout from '../../components/TutorAdminLayout'
const TutorsProfile = () => {
  return (
    <TutorAdminLayout>
      <section className='mt-16'>
        <div className='flex gap-x-4'>
            <div className='w-9/12'>
              <h2  className='text-lg'>My Profile</h2>
              <form action="" className='w-full flex flex-col gap-y-7'>
                <div>
                    <input type="text" className='bg-[#F2F1F1] h-14 px-4 w-full text-md focus:outline-none' placeholder='First Name' />
                </div>

                <div>
                    <input type="text" className='bg-[#F2F1F1] h-14 px-4 w-full text-md focus:outline-none' placeholder='Last Name' />
                </div>

                <div>
                    <input type="text" className='bg-[#F2F1F1] h-14 px-4 w-full text-md focus:outline-none' placeholder='Highest Educational Qualification' />
                </div>

                <div>
                  <select name="" id="" className='h-14 px-4 w-full'>
                    <option value="Grade">Grade</option>
                  </select>
                </div>

                <div>
                    <input type="text" className='bg-[#F2F1F1] h-14 px-4 w-full text-md focus:outline-none' placeholder='Experience (e.g 2 years experience )' />
                </div>

                <div>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Bio' className='w-full h-72 resize-none bg-[#F2F1F1] text-md focus:outline-none'></textarea>
                </div>

                <div>
                    <input type="text" className='bg-[#F2F1F1] h-14 px-4 w-full text-md focus:outline-none' placeholder='Phone Number' />
                </div>

                <div>
                    <input type="text" className='bg-[#F2F1F1] h-14 px-4 w-full text-md focus:outline-none' placeholder='Email'/>
                </div>

                <div>
                    <input type="text" className='bg-[#F2F1F1] h-14 px-4 w-full text-md focus:outline-none' placeholder='Password' />
                </div>

                <h2 className='text-xl text-blue-bg'>Payment Information</h2>

                <div>
                    <input type="text" className='bg-[#F2F1F1] h-14 px-4 w-full text-md focus:outline-none' placeholder='Account Name' />
                </div>
                <div>
                    <input type="text" className='bg-[#F2F1F1] h-14 px-4 w-full text-md focus:outline-none' placeholder='Account Number' />
                </div>
                <div>
                    <input type="text" className='bg-[#F2F1F1] h-14 px-4 w-full text-md focus:outline-none' placeholder='Bank Name' />
                </div>

                <div className=''>
                  <button className='bg-blue-bg text-white py-3 px-4 rounded-3xl font-bold w-28'>Save</button>
                </div>
              </form>
            </div>  

        {/* right */}
            <div className='w-3/12 flex flex-col gap-y-3'>
              <div>
                <label htmlFor="" className='text-md'>Set hourly Rate</label>
                <select name="Rate" id="" className='bg-[#F2F1F1] h-14 px-4 w-full text-md focus:outline-none'>
                  <option value="Select Rate">$30/hr</option>
                  <option value="Select Rate">$60/hr</option>
                  <option value="Select Rate">$90/hr</option>
                </select>
              </div>
            
              <div>
                <label  className='text-md' htmlFor="">Paid</label>
                <input type="text" placeholder='Est % Paid' className='bg-[#F2F1F1] h-14 px-4 w-full text-md focus:outline-none' />
              </div>

              <div className='bg-[#F2F1F1]'>
                <label  className='text-md' htmlFor="">Set Rates Per Hour</label>
                <input type="range" className='slider bg-[#F2F1F1] h-14 px-4 w-full text-md focus:outline-none' min="0" max="10"/>
              </div>

              <div className='bg-[#F2F1F1]  px-4 w-full text-md focus:outline-none py-3'>
                <h2 className='my-3 text-[30px]'>Subject offered</h2>
                <div className='flex flex-col gap-y-3' >
                  <p>Math</p>
                  <p>English</p>
                  <p>Chemistry</p>
                  <p>Physics</p>
                  <p>Biology</p>
                  <p>Botany</p>
                  <p>P.E</p>
                  <p>ICT</p>
                </div>
              </div>
            </div>
        </div>
      </section>
    </TutorAdminLayout>
  )
}

export default TutorsProfile