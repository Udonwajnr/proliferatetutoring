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


const AboutUs = () => {
  return (
    <MainLayout>
        <div className='absolute right-0 top-[58%] w-64'>
            <img src={girl} alt="boy" className='absolute top-4 ' />
            <img src={square2} alt="square" />
        </div>

        <section>
                <div className='relative'>
                    <img src={pic} alt="" className='w-full h-full'/>
                    <div className='absolute text-center top-[50%] w-full'>
                        <h3 className='text-white font-bold'>ABOUT US</h3>
                    </div>
                </div>
        </section>

        <section>
            <div>
                    <div className='flex items-center space-x-10'>
                        <div className='relative w-6/12'>
                            <img src={boy2} alt="boy" className='absolute top-10 left-12' />
                            <img src={square} alt="square" />
                        </div>
                        <div className='w-6/12'>
                            <h2 className='text-blue-bg my-4'>ABOUT US</h2>
                            <p>
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
                <div className='flex flex-col space-y-6 justify-between  bg-[#F2F1F1] h-64 py-7'>
                    <p className='text-blue-bg text-center font-bold'>
                            PROLIFERATE TUTORING BEYOND A BUSINESS. IT'S A VISION 
                    </p>
                        
                    <p className='font-bold text-center'>
                        SEE OUR VISION STATEMENT & PURPOSE
                   </p>
                </div>            
        </section>

        <section>
            <div className='h-80  flex flex-col justify-between py-3'>
                <p className='text-blue-bg text-center font-bold'>UNLEASH YOUR ACADEMIC POTENTIAL ONE SESSION AT A TIME</p>

                <p className='uppercase font-bold w-[900px] m-auto text-center'>
                    PROLIFERATE® is your gateway to unlocking the power of limitless learning.  We believe that the path to academic excellence and life’s successes doesn't have to be long and arduous. By providing access to experienced mentors and expert tutors, we offer you the opportunity to fast-track your learning journey in any subject area of your interest.
                </p>
            </div>

        </section>


        <section>
            <div className='flex justify-around items-center bg-[#F8F7F7] h-[500px]  py-4'> 
                <div className='max-w-[600px] h-[350px] shadow-xl py-3 px-5 bg-white '>
                    <h2 className='text-blue-bg uppercase font-bold'>OUR VISION</h2>

                    <p className='uppercase font-bold my-9'>
                    Our vision is to create a world where knowledge knows no bounds, where anyone can effortlessly access a diverse pool of expert tutors. Through cutting-edge technology and innovation, we are committed to providing a seamless platform that connects learners with exceptional tutors. We strive to make learning opportunities readily available to all, fostering a nurturing environment that empowers individuals to achieve their educational goals with confidence and ease.
                    </p>
                </div>
                
                <div className='max-w-[600px] h-[350px] shadow-xl py-3 px-5 bg-white'>
                    <h2 className='text-blue-bg font-bold'>OUR MISSION</h2>

                    <p className='uppercase font-bold my-9'>
                    Our mission is to empower learners with the knowledge and skills they need to succeed, bridging the gap between aspiration and achievement.
                    </p>
                </div>
            </div>

        </section>

        <section>
            <div className='h-96 flex justify-between flex-col py-6'>
                <h2 className='uppercase text-center text-blue-bg font-bold'>Unleash Your Academic Potential, <br /> One session at a time</h2>
                <p className='uppercase my-10 w-[900px] m-auto font-bold text-center'>
                PROLIFERATE® is your gateway to unlocking the power of limitless learning.  We believe that the path to academic excellence and life’s successes doesn't have to be long and arduous. By providing access to experienced mentors and expert tutors, we offer you the opportunity to fast-track your learning journey in any subject area of your interest.
                </p>
            </div>
        </section>

        {/*  */}

        <section>
            <div className='h-96 flex justify-between flex-col bg-[#F2F1F1] py-9'>
                    <h2 className='uppercase text-blue-bg font-bold text-center'>Breaking Barriers <br /> Building Brighter Futures One Session at a Time.</h2>
                <div className='flex space-x-4 items-center justify-around'>
                    <div>
                        <img src={teacher} alt="teacher" />
                        <p className='font-bold text-blue-bg'>55+</p>
                        <span className='text-[#898A8B] font-bold'>TUTORS</span>
                    </div>

                    <div>
                        <img src={book} alt="book" />
                        <p className='font-bold text-blue-bg'>5+</p>
                        <span className='text-[#898A8B] font-bold'>SUBJECTS</span>
                    </div>

                    <div>
                        <img src={world} alt="world" />
                        <p className='font-bold text-blue-bg'>5+</p>
                        <span className='text-[#898A8B] font-bold'>COUNTRIES</span>
                    </div>

                    <div>
                        <img src={vector} alt="" />
                        <p className='font-bold text-blue-bg'>50+</p>
                        <span className='text-[#898A8B] font-bold'>STUDENTS</span>
                    </div>



                </div>
            </div>
        </section>
        
        <section>
            <div className='flex flex-col space-y-14 py-5 w-[900px] m-auto'>
                <h2 className='text-blue-bg font-bold text-center uppercase'>Commitment to our learners</h2>

                <article className='font-bold text-center uppercase'>
                We are committed to nurturing a positive and supportive learning environment. We strive to instill in our students the confidence to face challenges head-on and embrace the joy of learning. As partners in your academic journey, we celebrate your successes and are dedicated to overcoming any obstacles together.
                </article>

                <p className='text-blue-bg font-bold text-center uppercase'>become a student</p>

                <p className='text-blue-bg font-bold text-center uppercase'>Join Our Community of Educators: 
Become a PROLIFERATE® Online Tutor Today!</p>

                <p className='font-bold text-center uppercase'>
                    Embrace your unique voice and share your wisdom at PROLIFERATE®, where we believe everyone has something valuable to offer as an online tutor. Join us now!
                </p>

                <p className='text-blue-bg font-bold text-center uppercase'>Become a Tutor</p>
            </div>
        </section>

        
    </MainLayout>
  )
}

export default AboutUs