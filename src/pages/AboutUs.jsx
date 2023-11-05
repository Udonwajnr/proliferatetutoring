import React from 'react'
import MainLayout from '../components/MainLayout'
import pic from '../assets/pic.png'
import boy2 from '../assets/boy2.png'
import square from '../assets/square.png'
import teacher from '../assets/ChalkboardTeacher.png'
import book from '../assets/vector.png'
import world from '../assets/world.png'
import vector from '../assets/vector3.png'
import square2 from '../assets/square2.png'
import girl from '../assets/girl.png'
import { Link } from 'react-router-dom'


const AboutUs = () => {
  return (
    <MainLayout>
        <section>
                <div className='relative'>
                    <img src={pic} alt="" className='w-full h-full'/>
                    <div className='absolute text-center top-[50%] w-full'>
                        <h3 className='text-white font-bold text-[24px]'>ABOUT US</h3>
                    </div>
                </div>
        </section>

        <section>
            <div className='h-[600px]'>
                    <div className='flex items-center space-x-10'>
                        <div className='relative w-6/12'>
                            <img src={boy2} alt="boy" className='absolute top-10 left-12' />
                            <img src={square} alt="square" />
                        </div>
                        <div className='w-6/12'>
                            <h2 className='text-blue-bg my-4 text-[40px] font-bold'>ABOUT US</h2>
                            <p className='text-[20px]'>
                            Welcome To Proliferate Online Tutoring Service 
                            Where Your Child Will Experience Exponential Growth 
                            With Our Comprehensive Tutoring Service! We have a 
                            large team of passionate educators and experts who are 
                            dedicated to making quality education accessible to all. 

                            We understand that each student is unique, with their own 
                            strengths and challenges, and that's why we offer a diverse 
                            range of experienced tutors specializing in various subjects
                            and educational levels. Whether you need help with complex 
                            math problems, computing, reading, writing, mastering a 
                            foreign language, or acing a science project, we've got you 
                            covered.    
                            </p>
                        </div>
                    </div>
            </div>
        </section>


        <section className='mt-10 '>
                <div className='h-[450px] flex flex-col space-y-6 justify-between  bg-[#F2F1F1] py-7'>
                    <h2 className='text-blue-bg text-center font-bold text-[40px]'>
                            PROLIFERATE TUTORING BEYOND A BUSINESS. IT'S A VISION 
                    </h2>
                        
                    <div className='flex justify-around  py-4'> 
                        <div className='max-w-[600px]  shadow-md py-5 px-5 bg-white '>
                            <h2 className='text-blue-bg uppercase font-bold text-[30px] text-center'>OUR VISION</h2>

                            <p className='my-2 text-center'>
                                Our vision is to create a world where knowledge knows no bounds, where anyone can effortlessly access a diverse pool of expert tutors. .
                            </p>
                        </div>
                
                        <div className='max-w-[600px] py-5  shadow-md py-3 px-5 bg-white'>
                            <h2 className='text-blue-bg font-bold text-[30px] text-center'>OUR MISSION</h2>

                            <p className=' my-9  text-center'>
                            Our mission is to empower learners with the knowledge and skills they need to succeed, bridging the gap between aspiration and achievement.
                            </p>
                        </div>
            </div>
                </div>            
        </section>


        <section className='px-10 '>
            <div className='flex items-center h-[600px]'>
                <div className=' w-10/12 flex flex-col py-3'>
                    <h2 className='text-blue-bg text-[40px] font-bold '>UNLEASH YOUR ACADEMIC POTENTIAL ONE SESSION AT A TIME</h2>
                    <p className='text-[20px] w-[900px] mt-10'>
                        PROLIFERATE® is your gateway to unlocking the power of limitless learning.  We believe that the path to academic excellence and life’s successes doesn't have to be long and arduous. By providing access to experienced mentors and expert tutors, we offer you the opportunity to fast-track your learning journey in any subject area of your interest.
                    </p>
                </div>

                <div>
                    <div className='relative '>
                        <img src={girl} alt="boy" className='absolute top-4 ' />
                        <img src={square2} alt="square" />
                    </div>
                </div>
            </div>

        </section>


        {/*  */}

        <section className=''>
            <div className=' h-[500px]  flex justify-between flex-col space-y-10 bg-[#F2F1F1] py-9'>
                    <h2 className='uppercase text-blue-bg text-center  text-[40px] font-bold'>Breaking Barriers <br /> Building Brighter Futures One Session at a Time.</h2>
                <div className='flex space-x-4 items-center justify-around'>
                    <div>
                        <img src={teacher} alt="teacher" />
                        <p className='font-bold text-blue-bg text-[50px]'>55+</p>
                        <span className='text-[#898A8B] text-[20px] font-bold'>TUTORS</span>
                    </div>

                    <div>
                        <img src={book} alt="book" />
                        <p className='font-bold text-blue-bg text-[50px]'>5+</p>
                        <span className='text-[#898A8B] text-[20px] font-bold'>SUBJECTS</span>
                    </div>

                    <div>
                        <img src={world} alt="world" />
                        <p className='font-bold text-[50px] text-blue-bg'>5+</p>
                        <span className='text-[#898A8B] text-[20px] font-bold'>COUNTRIES</span>
                    </div>

                    <div>
                        <img src={vector} alt="" />
                        <p className='font-bold text-blue-bg text-[50px]'>50+</p>
                        <span className='text-[#898A8B] text-[20px] font-bold'>STUDENTS</span>
                    </div>



                </div>
            </div>
        </section>
        
        <section>
            <div className='flex flex-col space-y-10 py-10 w-[900px] m-auto'>
                <div>
                    <h2 className='text-blue-bg font-bold text-center text-[40px]'>Commitment to our learners</h2>

                    <article className='text-center my-3 text-[18px]'>
                    We are committed to nurturing a positive and supportive learning environment. We strive to instill in our students the confidence to face challenges head-on and embrace the joy of learning. As partners in your academic journey, we celebrate your successes and are dedicated to overcoming any obstacles together.
                    </article>

                    <div className='flex items-center justify-center my-3'>
                        <button className='bg-blue-bg text-white inline-block rounded-md font-bold text-center py-2 px-4 text-md'>Become a Student</button>
                    </div>
                </div>
                
                <div>
                    <h2 className='text-blue-bg font-bold text-center  text-[35px]'>Join Our Community of Educators: 
                Become a PROLIFERATE® Online Tutor Today!</h2>

                    <p className='text-center my-3 text-[18px]'>
                        Embrace your unique voice and share your wisdom at PROLIFERATE®, where we believe everyone has something valuable to offer as an online tutor. Join us now!
                    </p>
                    <div className='flex items-center justify-center my-3'>
                        <Link to={"/"} className='bg-blue-bg text-white inline-block rounded-md font-bold text-center py-2 px-5 text-md'>Become a Tutor</Link>
                    </div>

                </div>
            </div>
        </section>

        
    </MainLayout>
  )
}

export default AboutUs