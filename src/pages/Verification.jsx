import React from 'react'
import Layout from '../components/Layout'
import img from "../assets/Add_Image.png"
import img2 from "../assets/Import_Pdf.png"
import { Link } from 'react-router-dom'

const Verification = () => {
  return (
    <Layout>
        <section className='flex  flex-col items-center'>
            <h2 className='text-lg text-center my-4'>Verification & Confirmation</h2>
            <form action="" className='w-full max-w-[500px]'>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-blue-bg font-bold'>Means of Identity</label>
                        <select name="" id="" className='bg-ash focus:outline-none h-10'>
                            <option value=""></option>
                        </select>
                    </div>
                    <div onClick={()=>document.querySelector(".upload").click()} className='flex justify-end items-center mt-3'>
                        <img src={img} alt="upload" />
                        <span>Upload Your document</span>
                        <input type="file" className='upload' hidden/>
                    </div> 

                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-blue-bg font-bold'>What is your highest Educational Qualification?</label>
                        <select name="" id="" className='bg-ash focus:outline-none h-10'>
                            <option value=""></option>
                        </select>
                    </div>
                    <div onClick={()=>document.querySelector(".upload").click()} className='flex justify-end items-center mt-3'>
                        <img src={img2} alt="upload" />
                        <span>Upload Your document</span>
                        <input type="file" className='upload' hidden/>
                    </div>

                    <div className='flex space-x-2 mt-9'>
                        <input type="checkbox" name="" id="" className='w-5 h-5'/>
                        <span className='font-bold'>To ensure a secure learning environment, 
a background check may be required.</span>
                    </div>

                <div className='flex flex-row items-center justify-end space-x-3 mt-5'>
                  <Link to={"/verificationemail"} className=' my-2 text-black py-2 rounded-md font-bold flex items-center'>Next
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"></path></svg>
                  
                  </Link>
                </div>

                    
            </form>

        </section>
    </Layout>
  )
}

export default Verification