import React from 'react'
import MainLayout from '../components/MainLayout'
import img from "../assets/p.png"
import img2 from "../assets/o.png"
import img3 from "../assets/q.png"
import img4 from "../assets/r.png"
import { Link } from 'react-router-dom'
import img5 from "../assets/girl_giving_an_online_lesson.png"
import img6 from '../assets/young_boys _and_young_girl_jumping.png'
import img7 from "../assets/boy_and_girl_sitting_in_front_of_laptop.png"
import Layout from '../components/Layout'

const OurProgram = () => {
  return (
    <MainLayout>
            <section className='ourProgram'>
               <div className='relative tutor h-[600px] px-10 flex items-center'>
                    <div className=' text-left w-[900px] '>
                        <h3 className='text-white font-bold text-[80px]'>Our Programs</h3>
                        <p className='text-[20px]'>
                        Welcome to Proliferate.ai's comprehensive educational program, designed to empower students and learners of all ages to reach their full potential. Our program encompasses a wide range of services and resources, tailored to meet your educational needs and goals.
                        </p>
                    </div>
                </div>
        </section>

        <section className='px-10'>
            <div>
                    <h2 className='text-[40px] text-blue-bg font-bold'>What sets our program Apart</h2>
                    <p className='text-[20px]'>At Proliferate.ai, we believe in the transformative power of education. Our program is designed to provide you with the tools, support, and opportunities you need to excel in your educational journey.</p>
            </div>
            <div className='grid grid-cols-3 gap-4 my-4'>
               
                <div className='border rounded-md px-4 py-5  bg-[#FAFAFA]'>
                    <div className='flex flex-col justify-center items-center space-y-4'>
                      <img src={img} alt="" />
                      <h2 className='font-bold text-[25px] text-center'>Personalized Learning Experience</h2>
                      <p className='text-center'>
                      We understand that every learner is unique. That's why our program offers personalized learning experiences to match your individual needs. Whether you're a K-12 student, college learner, or an adult seeking personal or professional development, we have a solution tailored for you.
                      </p>
                    </div>
                </div>

                <div className='border rounded-md px-4 py-5  bg-[#FAFAFA]'>
                    <div className='flex flex-col justify-center items-center space-y-4'>
                      <img src={img2} alt="" />
                      <h2 className='font-bold text-[25px] text-center'>Personalized Learning Experience</h2>
                      <p className='text-center'>
                      We understand that every learner is unique. That's why our program offers personalized learning experiences to match your individual needs. Whether you're a K-12 student, college learner, or an adult seeking personal or professional development, we have a solution tailored for you.
                      </p>
                    </div>
                </div>

                <div className='border rounded-md px-4 py-5  bg-[#FAFAFA]'>
                    <div className='flex flex-col justify-center items-center space-y-4'>
                      <img src={img3} alt="" />
                      <h2 className='font-bold text-[25px] text-center'>Personalized Learning Experience</h2>
                      <p className='text-center'>
                      We understand that every learner is unique. That's why our program offers personalized learning experiences to match your individual needs. Whether you're a K-12 student, college learner, or an adult seeking personal or professional development, we have a solution tailored for you.
                      </p>
                    </div>
                </div>


                <div className='border rounded-md px-4 py-5 bg-[#FAFAFA]'>
                    <div className='flex flex-col justify-center items-center space-y-4'>
                      <img src={img4} alt="" />
                      <h2 className='font-bold text-[25px] text-center'>Personalized Learning Experience</h2>
                      <p className='text-center'>
                      We understand that every learner is unique. That's why our program offers personalized learning experiences to match your individual needs. Whether you're a K-12 student, college learner, or an adult seeking personal or professional development, we have a solution tailored for you.
                      </p>
                    </div>
                </div>
            </div>
        </section>


        <section className='relative px-10 pb-32 mt-14'>
           <div>
                <div className='w-40 h-40 bg-blue-bg absolute top-0 rounded-2xl'></div>
            
                    <div className='relative py-16 px-32 top-11 bg-white shadow-2xl mx-24 my-4'>
                        <div className='my-5'>
                            <h2 className='text-blue-bg font-bold text-[35px]'>Key Features of Our Program.</h2>
                            <p className='font-bold text-[18px]'>Our program encompasses a variety of key features to enhance your learning experience:</p>
                        </div>
                        
                        <ul className='list-decimal text-[20px] flex flex-col space-y-5'>
                            <li className='text-blue-bg font-bold'>
                                One-on-One Tutoring:
                                <ul className='list-disc text-black font-bold ml-7'>
                                    <li>
                                        Personalized support with dedicated tutors.
                                    </li>

                                    <li>
                                        Group Tutoring: Collaborative learning in tutor-led group sessions.
                                    </li>
                                    <li>
                                        Subject-Specific Tutoring: Support for a wide range of subjects and topics.
                                    </li>
                                </ul>
                            </li>

                            <li className='text-blue-bg font-bold'>
                                    Educational Resources
                                <ul className='list-disc text-black font-bold ml-7'>
                                    <li>
                                    Library of Materials: Access to textbooks, study guides, and educational materials.
                                    </li>

                                    <li>
                                    Online Resources: A vast collection of online resources to aid your learning.
                                    </li>
                                </ul>
                            </li>

                            <li className='text-blue-bg font-bold'>
                            Personalized Support
                                <ul className='list-disc text-black font-bold ml-7'>
                                    <li>
                                    Mentoring and Academic Guidance: Mentorship to help you set and achieve educational and career goals.
                                    </li>

                                    <li>
                                    Career and College Counselling: Guidance on college applications and career choices.
                                    </li>
                                </ul>
                            </li>

                            <li className='text-blue-bg font-bold'>
                            Flexible Learning Options
                                <ul className='list-disc text-black font-bold ml-7'>
                                    <li>
                                        Self-Paced Learning: Study at your own pace using our resources.
                                    </li>   
                                    <li>
                                    Test Preparation: Courses and materials for standardized tests.
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                
                <div className=' w-40 h-40 bg-blue-bg absolute bottom-0 right-10 -z-10 rounded-2xl'></div>
           </div>
        </section>

        <section className='p-10 '>
            <div>
                <h2 className='text-[40px] text-blue-bg font-bold'>Who Can Benefit from Our Program?</h2>
                <p className='text-[20px]'>Proliferate.ai's program is designed for a broad spectrum of students and learners, including:</p>
            </div>

            <div className='flex justify-between mt-5'>
                <Link className='hover:bg-ash cursor-pointer transition duration-100 hover:transition hover:duration-100' to={"/register"}>
                    <div className='border p-5 rounded-xl w-64'>
                        <div className='flex justify-center flex-col items-center'>
                            <h2 className='font-bold text-[36px]'>As Student</h2>
                            <img src={img7} alt="" />
                            <Link to={"/register"} className='text-white bg-blue-bg font-bold px-5 py-2 rounded-lg mt-4' >Sign Up</Link>
                        </div>
                    </div>
                </Link>

                <Link className='hover:bg-ash cursor-pointer transition duration-100 hover:transition hover:duration-100' to={"/signuptutor"}>
                    <div className='border p-5 rounded-xl w-64 '>
                        <div className='flex justify-center flex-col items-center'>
                            <h2 className='font-bold text-[36px]'>As Tutor</h2>
                            <img src={img5} alt="" />
                            <Link to={"/signuptutor"} className='text-white bg-blue-bg font-bold px-5 py-2 rounded-lg mt-4'>Sign Up</Link>
                        </div>
                    </div>
                </Link>

                <Link className='hover:bg-ash cursor-pointer transition duration-100 hover:transition hover:duration-100' to={"/register"}>
                    <div className='border p-5 rounded-xl w-64 hover:bg-ash cursor-pointer transition duration-100 hover:transition hover:duration-100'>
                        <div className='flex justify-center flex-col items-center'>
                            <h2 className='font-bold text-[36px]'>As Group</h2>
                            <img src={img6} alt="" />
                            <Link to={"/register"} className='text-white bg-blue-bg font-bold px-5 py-2 rounded-lg mt-4'>Sign Up</Link>
                        </div>
                    </div>
                </Link>

            </div>

        </section>    


    </MainLayout>
  )
}
export default OurProgram

// Key Features of Our Program


// 1. Tutoring Services
// One-on-One Tutoring: Personalized support with dedicated tutors.
// Group Tutoring: Collaborative learning in tutor-led group sessions.
// Subject-Specific Tutoring: Support for a wide range of subjects and topics.

// 2. Educational Resources
// Library of Materials: Access to textbooks, study guides, and educational materials.
// Online Resources: A vast collection of online resources to aid your learning.

// 3. Personalized Support
// Mentoring and Academic Guidance: Mentorship to help you set and achieve educational and career goals.
// Career and College Counselling: Guidance on college applications and career choices.

// 4. Flexible Learning Options
// Self-Paced Learning: Study at your own pace using our resources.
// Test Preparation: Courses and materials for standardized tests.