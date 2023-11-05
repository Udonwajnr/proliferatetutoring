import React from 'react'
import MainLayout from '../components/MainLayout'
import img from "../assets/p.png"
import img2 from "../assets/o.png"
import img3 from "../assets/q.png"
import img4 from "../assets/r.png"

const OurProgram = () => {
  return (
    <MainLayout>
            <section className='ourProgram'>
               <div className='relative tutor h-[600px] px-10 flex items-center'>
                    <div className=' text-left w-[900px] '>
                        <h3 className='text-white font-bold text-[80px]'>Our Programs</h3>
                        <p className='text-white text-md'>
                        Welcome to Proliferate.ai's comprehensive educational program, designed to empower students and learners of all ages to reach their full potential. Our program encompasses a wide range of services and resources, tailored to meet your educational needs and goals.
                        </p>
                    </div>
                </div>
        </section>

        <section className='px-10'>
            <div>
                    <h2 className='text-[40px] text-blue-bg'>What sets our program Apart</h2>
                    <p>At Proliferate.ai, we believe in the transformative power of education. Our program is designed to provide you with the tools, support, and opportunities you need to excel in your educational journey.</p>
            </div>
            <div className='grid grid-cols-3 gap-4'>
               
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


        <section className='relative px-10'>
            <div className='w-40 h-40 bg-blue-bg'></div>

            <div className='relative py-16 px-32 bg-white shadow-lg mx-10 my-4'>
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
            
            <div className='flex relative z-20 justify-end'>
                <div className=' w-40 h-40 bg-blue-bg relative'></div>

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