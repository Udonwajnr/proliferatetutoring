import React from 'react'
import img1 from "../assets/girl_giving_an_online_lesson.png"
import img2 from '../assets/young_boys _and_young_girl_jumping.png'
import img3 from "../assets/boy_and_girl_sitting_in_front_of_laptop.png"
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

const SignUpOptions = () => {
  return (
    <Layout>
        <section className='flex justify-between h-[80vh] items-center'>
            <Link className='hover:bg-ash cursor-pointer transition duration-100 hover:transition hover:duration-100' to={"/register"}>
                <div className='border p-5 rounded-xl w-64'>
                    <div className='flex justify-center flex-col items-center'>
                        <h2 className='font-bold text-[36px]'>As Student</h2>
                        <img src={img3} alt="" />
                        <Link to={"/register"} className='text-white bg-blue-bg font-bold px-5 py-2 rounded-lg mt-4' >Sign Up</Link>
                    </div>
                </div>
            </Link>

            <Link className='hover:bg-ash cursor-pointer transition duration-100 hover:transition hover:duration-100' to={"/signuptutor"}>
                <div className='border p-5 rounded-xl w-64 '>
                    <div className='flex justify-center flex-col items-center'>
                        <h2 className='font-bold text-[36px]'>As Tutor</h2>
                        <img src={img1} alt="" />
                        <Link to={"/signuptutor"} className='text-white bg-blue-bg font-bold px-5 py-2 rounded-lg mt-4'>Sign Up</Link>
                    </div>
                </div>
            </Link>

            <Link className='hover:bg-ash cursor-pointer transition duration-100 hover:transition hover:duration-100' to={"/register"}>
                <div className='border p-5 rounded-xl w-64 hover:bg-ash cursor-pointer transition duration-100 hover:transition hover:duration-100'>
                    <div className='flex justify-center flex-col items-center'>
                        <h2 className='font-bold text-[36px]'>As Group</h2>
                        <img src={img2} alt="" />
                        <Link to={"/register"} className='text-white bg-blue-bg font-bold px-5 py-2 rounded-lg mt-4'>Sign Up</Link>
                    </div>
                </div>
            </Link>
            
        </section>    
    </Layout>
  )
}

export default SignUpOptions