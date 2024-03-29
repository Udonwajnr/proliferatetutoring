import React from 'react'
import MainLayout from '../components/MainLayout'
import pic from '../assets/pic.png'
import pic1 from '../assets/Ellipse.png'


const TutorScreen = () => {
  return (
    <MainLayout>
        <section className=''>
               <div className='relative tutor h-[600px] px-10 flex items-center'>
                    <div className=' text-left w-[600px] '>
                        <h3 className='text-white font-bold text-[80px]'>Meet Our Prolific Tutors</h3>
                        <p className='text-white text-md'>
                        A Personal Tutor is not just a teacher, but a guide, a mentor and a trainer for life
                        </p>
                    </div>
                </div>
        </section>

        <section className='px-10 py-10'>
            <div>
                <h2 className='text-blue-bg font-bold text-[35px] text-center'>
                Unlock Your Full Potential with Our Prolific Tutors
                </h2>
                <p className='py-4'>
                Our team of experienced tutors are here to help you achieve your academic goals and reach your full potential. We understand that every student is unique, with different learning styles and needs, and that’s why we offer personalized tutoring services to ensure that you get the support you need to succeed.Our tutors are highly qualified and experienced in their respective fields, and they are passionate about helping students like you achieve academic success. Whether you need help with math, english, french or other languages, coding, science, writing, or test preparation or homework help, we have a tutor who can guide you through the complexities of the subject matter and help you build the skills you need to succeed.
                </p>
            </div>
        </section>

        <section className='px-10 '>
            <hr  className='border w-9/12 m-auto my-10'/>
            <div>
                <h1 className='text-blue-bg font-bold text-[30px] text-center'>Schedule a call today and take the first step towards achieving your child's academic goals!</h1>
            </div>
            <div className='flex my-6 justify-center items-center'>
                <input type="text" className='border h-14 px-5  focus:outline-none w-9/12 ' placeholder='Search by grades, subject, availability....' />
                <button className='bg-blue-bg text-white py-2 w-44 h-14 font-bold '>Search</button>
            </div>
        </section>

        <section className='flex px-10 py-10 gap-x-5 mt-10'>
            {/* left */}
            <div className='w-2/12 p-3 border'>
                <form action="">
                    <div className='mt-2'>
                        <select name="" id="" className='w-full h-10 bg-transparent border'>
                            <option value="" className='font-bold'>Grade</option>
                        </select>
                    </div>

                    <div className='mt-2'>
                        <select name="" id="" className='w-full h-10 bg-transparent border'>
                            <option value="" className='font-bold'>Subject</option>
                        </select>
                    </div>

                    <div className='mt-10 flex flex-col'>
                        <label htmlFor="my-2">Price Range</label>
                        <input type="range" className='my-3' />

                        <div className='flex gap-x-3 flex-wrap my-3'>
                            <input type="text" className='h-10 w-28 border px-2 bg-[#E6E6E6]' placeholder='0' />
                            <input type="text" className='h-10 w-28 border px-2  bg-[#E6E6E6]' placeholder='1000'/>
                        </div>
                         
                         <button className='bg-[#23A6F0] text-white px-3 py-2 rounded-md'>Filter</button>
                    </div>

                    {/* tags */}
                    <div className='mt-10'>
                      <label htmlFor="">Popular Tags</label>
                      <div className='flex flex-wrap gap-4 my-4 '>
                        <div className='border px-3 py-2 border-[#23A6F0] text-[#23A6F0] flex items-center gap-x-3'> Math (9) <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"></path></svg> </div>  
                        <div className='border p-2  border-[#23A6F0] text-[#23A6F0] flex items-center gap-x-3'> English (15) <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"></path></svg></div>  
                        <div className='border p-2 border-[#23A6F0] text-[#23A6F0] flex items-center gap-x-3'> Science <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"></path></svg></div>  
                            <div className='border p-2 border-[#23A6F0] text-[#23A6F0] flex items-center gap-x-3'>French <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"></path></svg></div>  
                      </div>  
                    </div>
                    
                </form>
            </div>

            {/* right */}

            <div className='flex flex-wrap gap-4 justify-start w-10/12 items-start'>
                {/* profile card */}
                <div className='w-[350px] shadow-md px-3 py-3'>
                    <div className='flex items-center gap-x-3'>
                        <img src={pic1} alt="" />
                        <div>
                            <h2 className='uppercase'>BaMidele Moses</h2>
                            <span>BSc. BIOCHEMISTRY</span>
                        </div>
                    </div>
                    <hr className='my-2'/>
                    <div>
                        <div className='flex gap-x-2'>
                            <span>Subjects:</span>
                            <span>General Reasoning, Science and Mathematics</span>

                        </div>
                        
                        <div className='flex gap-x-2'>
                            <span>Grade:</span>
                            <span>1-12</span>

                        </div>
                        <div className='flex gap-x-2'>
                        <span>Experience:</span>
                        <span>
                         13+ years
                        </span>
                        </div>
                        <div className='flex gap-x-2'>
                            <span>Bio:</span>
                            <span>I authored a math and quantitative reasoning book currently incorporated in schools' curiculum. I have successfully transformed 'F' students to 'A' students and on several .......</span>
                        </div>             
                    </div>
                    <button className='text-white bg-blue-bg py-2 px-2 font-bold my-5 rounded-lg'>View Full Profile</button>
                </div>

                <div className='w-[350px] shadow-md px-3 py-3'>
                    <div className='flex items-center gap-x-3'>
                        <img src={pic1} alt="" />
                        <div>
                            <h2 className='uppercase'>BaMidele Moses</h2>
                            <span>BSc. BIOCHEMISTRY</span>
                        </div>
                    </div>
                    <hr className='my-2'/>
                    <div>
                        <div className='flex gap-x-2'>
                            <span>Subjects:</span>
                            <span>General Reasoning, Science and Mathematics</span>

                        </div>
                        
                        <div className='flex gap-x-2'>
                            <span>Grade:</span>
                            <span>1-12</span>

                        </div>
                        <div className='flex gap-x-2'>
                        <span>Experience:</span>
                        <span>
                         13+ years
                        </span>
                        </div>
                        <div className='flex gap-x-2'>
                            <span>Bio:</span>
                            <span>I authored a math and quantitative reasoning book currently incorporated in schools' curiculum. I have successfully transformed 'F' students to 'A' students and on several .......</span>
                        </div>             
                    </div>
                    <button className='text-white bg-blue-bg py-2 px-2 font-bold my-5 rounded-lg'>View Full Profile</button>
                </div>
                <div className='w-[350px] shadow-md px-3 py-3'>
                    <div className='flex items-center gap-x-3'>
                        <img src={pic1} alt="" />
                        <div>
                            <h2 className='uppercase'>BaMidele Moses</h2>
                            <span>BSc. BIOCHEMISTRY</span>
                        </div>
                    </div>
                    <hr className='my-2'/>
                    <div>
                        <div className='flex gap-x-2'>
                            <span>Subjects:</span>
                            <span>General Reasoning, Science and Mathematics</span>

                        </div>
                        
                        <div className='flex gap-x-2'>
                            <span>Grade:</span>
                            <span>1-12</span>

                        </div>
                        <div className='flex gap-x-2'>
                        <span>Experience:</span>
                        <span>
                         13+ years
                        </span>
                        </div>
                        <div className='flex gap-x-2'>
                            <span>Bio:</span>
                            <span>I authored a math and quantitative reasoning book currently incorporated in schools' curiculum. I have successfully transformed 'F' students to 'A' students and on several .......</span>
                        </div>             
                    </div>
                    <button className='text-white bg-blue-bg py-2 px-2 font-bold my-5 rounded-lg'>View Full Profile</button>
                </div>
                <div className='w-[350px] shadow-md px-3 py-3'>
                    <div className='flex items-center gap-x-3'>
                        <img src={pic1} alt="" />
                        <div>
                            <h2 className='uppercase'>BaMidele Moses</h2>
                            <span>BSc. BIOCHEMISTRY</span>
                        </div>
                    </div>
                    <hr className='my-2'/>
                    <div>
                        <div className='flex gap-x-2'>
                            <span>Subjects:</span>
                            <span>General Reasoning, Science and Mathematics</span>

                        </div>
                        
                        <div className='flex gap-x-2'>
                            <span>Grade:</span>
                            <span>1-12</span>

                        </div>
                        <div className='flex gap-x-2'>
                        <span>Experience:</span>
                        <span>
                         13+ years
                        </span>
                        </div>
                        <div className='flex gap-x-2'>
                            <span>Bio:</span>
                            <span>I authored a math and quantitative reasoning book currently incorporated in schools' curiculum. I have successfully transformed 'F' students to 'A' students and on several .......</span>
                        </div>             
                    </div>
                    <button className='text-white bg-blue-bg py-2 px-2 font-bold my-5 rounded-lg'>View Full Profile</button>
                </div>
                <div className='w-[350px] shadow-md px-3 py-3'>
                    <div className='flex items-center gap-x-3'>
                        <img src={pic1} alt="" />
                        <div>
                            <h2 className='uppercase'>BaMidele Moses</h2>
                            <span>BSc. BIOCHEMISTRY</span>
                        </div>
                    </div>
                    <hr className='my-2'/>
                    <div>
                        <div className='flex gap-x-2'>
                            <span>Subjects:</span>
                            <span>General Reasoning, Science and Mathematics</span>

                        </div>
                        
                        <div className='flex gap-x-2'>
                            <span>Grade:</span>
                            <span>1-12</span>

                        </div>
                        <div className='flex gap-x-2'>
                        <span>Experience:</span>
                        <span>
                         13+ years
                        </span>
                        </div>
                        <div className='flex gap-x-2'>
                            <span>Bio:</span>
                            <span>I authored a math and quantitative reasoning book currently incorporated in schools' curiculum. I have successfully transformed 'F' students to 'A' students and on several .......</span>
                        </div>             
                    </div>
                    <button className='text-white bg-blue-bg py-2 px-2 font-bold my-5 rounded-lg'>View Full Profile</button>
                </div>
                <div className='w-[350px] shadow-md px-3 py-3'>
                    <div className='flex items-center gap-x-3'>
                        <img src={pic1} alt="" />
                        <div>
                            <h2 className='uppercase'>BaMidele Moses</h2>
                            <span>BSc. BIOCHEMISTRY</span>
                        </div>
                    </div>
                    <hr className='my-2'/>
                    <div>
                        <div className='flex gap-x-2'>
                            <span>Subjects:</span>
                            <span>General Reasoning, Science and Mathematics</span>

                        </div>
                        
                        <div className='flex gap-x-2'>
                            <span>Grade:</span>
                            <span>1-12</span>

                        </div>
                        <div className='flex gap-x-2'>
                        <span>Experience:</span>
                        <span>
                         13+ years
                        </span>
                        </div>
                        <div className='flex gap-x-2'>
                            <span>Bio:</span>
                            <span>I authored a math and quantitative reasoning book currently incorporated in schools' curiculum. I have successfully transformed 'F' students to 'A' students and on several .......</span>
                        </div>             
                    </div>
                    <button className='text-white bg-blue-bg py-2 px-2 font-bold my-5 rounded-lg'>View Full Profile</button>
                </div>

                <div className='w-[350px] shadow-md px-3 py-3'>
                    <div className='flex items-center gap-x-3'>
                        <img src={pic1} alt="" />
                        <div>
                            <h2 className='uppercase'>BaMidele Moses</h2>
                            <span>BSc. BIOCHEMISTRY</span>
                        </div>
                    </div>
                    <hr className='my-2'/>
                    <div>
                        <div className='flex gap-x-2'>
                            <span>Subjects:</span>
                            <span>General Reasoning, Science and Mathematics</span>

                        </div>
                        
                        <div className='flex gap-x-2'>
                            <span>Grade:</span>
                            <span>1-12</span>

                        </div>
                        <div className='flex gap-x-2'>
                        <span>Experience:</span>
                        <span>
                         13+ years
                        </span>
                        </div>
                        <div className='flex gap-x-2'>
                            <span>Bio:</span>
                            <span>I authored a math and quantitative reasoning book currently incorporated in schools' curiculum. I have successfully transformed 'F' students to 'A' students and on several .......</span>
                        </div>             
                    </div>
                    <button className='text-white bg-blue-bg py-2 px-2 font-bold my-5 rounded-lg'>View Full Profile</button>
                </div>

                <div className='w-[350px] shadow-md px-3 py-3'>
                    <div className='flex items-center gap-x-3'>
                        <img src={pic1} alt="" />
                        <div>
                            <h2 className='uppercase'>BaMidele Moses</h2>
                            <span>BSc. BIOCHEMISTRY</span>
                        </div>
                    </div>
                    <hr className='my-2'/>
                    <div>
                        <div className='flex gap-x-2'>
                            <span>Subjects:</span>
                            <span>General Reasoning, Science and Mathematics</span>

                        </div>
                        
                        <div className='flex gap-x-2'>
                            <span>Grade:</span>
                            <span>1-12</span>

                        </div>
                        <div className='flex gap-x-2'>
                        <span>Experience:</span>
                        <span>
                         13+ years
                        </span>
                        </div>
                        <div className='flex gap-x-2'>
                            <span>Bio:</span>
                            <span>I authored a math and quantitative reasoning book currently incorporated in schools' curiculum. I have successfully transformed 'F' students to 'A' students and on several .......</span>
                        </div>             
                    </div>
                    <button className='text-white bg-blue-bg py-2 px-2 font-bold my-5 rounded-lg'>View Full Profile</button>
                </div>

                <div className='w-[350px] shadow-md px-3 py-3'>
                    <div className='flex items-center gap-x-3'>
                        <img src={pic1} alt="" />
                        <div>
                            <h2 className='uppercase'>BaMidele Moses</h2>
                            <span>BSc. BIOCHEMISTRY</span>
                        </div>
                    </div>
                    <hr className='my-2'/>
                    <div>
                        <div className='flex gap-x-2'>
                            <span>Subjects:</span>
                            <span>General Reasoning, Science and Mathematics</span>

                        </div>
                        
                        <div className='flex gap-x-2'>
                            <span>Grade:</span>
                            <span>1-12</span>

                        </div>
                        <div className='flex gap-x-2'>
                        <span>Experience:</span>
                        <span>
                         13+ years
                        </span>
                        </div>
                        <div className='flex gap-x-2'>
                            <span>Bio:</span>
                            <span>I authored a math and quantitative reasoning book currently incorporated in schools' curiculum. I have successfully transformed 'F' students to 'A' students and on several .......</span>
                        </div>             
                    </div>
                    <button className='text-white bg-blue-bg py-2 px-2 font-bold my-5 rounded-lg'>View Full Profile</button>
                </div>
                
                            
            
            </div>
        </section>

    </MainLayout>
  )
}

export default TutorScreen