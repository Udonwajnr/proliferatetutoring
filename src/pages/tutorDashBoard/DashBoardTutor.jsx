import React from 'react'
import TutorAdminLayout from '../../components/TutorAdminLayout'
import img1 from '../../assets/img.png'
import {CartesianGrid,XAxis, YAxis,Tooltip,Legend,Bar,Line,ComposedChart,LineChart } from 'recharts'
import { Area } from 'recharts'
import { Link } from 'react-router-dom'
const DashBoardTutor = () => {
    
        const data = [
            {
              "name": "Class A",
              "uv": 4000,
              "pv": 2400,
              "amt": 2400
            },
            {
              "name": "Class B",
              "uv": 3000,
              "pv": 1398,
              "amt": 2210
            },
            {
              "name": "Class C",
              "uv": 2000,
              "pv": 9800,
              "amt": 2290
            },
            {
              "name": "Class D",
              "uv": 2780,
              "pv": 3908,
              "amt": 2000
            },
            {
              "name": "Class E",
              "uv": 1890,
              "pv": 4800,
              "amt": 2181
            },
            {
              "name": "Class F",
              "uv": 2390,
              "pv": 3800,
              "amt": 2500
            },
            {
              "name": "Class G",
              "uv": 3490,
              "pv": 4300,
              "amt": 2100
            }
          ]
      
  return (
    <TutorAdminLayout>
        <section>
            <div className='relative bg-blue-bg flex justify-between rounded-lg items-center'>
                <div className='p-5'>
                    <h1 className='text-[40px] text-white font-bold'>Welcome back,Charles</h1>
                    <p className='text-white text-[20px]'>
                    You have 27 new student added to your domain. Please reach out to the Head Teacher if you want them excluded from your domain.
                    </p>
                </div>
                <img src={img1} alt=""  />
            </div>
        </section>


        <section>
            <div className='flex bg-[#f4f4f4] justify-between gap-x-4 h-[600px] py-4'>
                {/* barchat */}
                <div className='shadow-lg  w-4/12 bg-white'>
                    <div className='flex justify-between px-6'>
                      
                        <h2 className='text-[20px] my-2'>Student Statistic</h2>
                        <div className='flex items-center space-x-4'>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.46682 0.141546C5.20038 0.141546 4.93496 0.246881 4.73565 0.456518L0.807242 4.5873C0.422842 4.99314 0.427927 5.63651 0.820462 6.03513L4.88819 10.1659C5.28479 10.5697 5.92851 10.5697 6.32613 10.1659C6.72273 9.76213 6.72273 9.10947 6.32613 8.70568L2.96517 5.29263L6.19799 1.89196C6.58849 1.48095 6.57731 0.827255 6.17359 0.431733C5.97528 0.237587 5.72105 0.141546 5.46682 0.141546Z" fill="#2E3A59"/>
                        </svg>

                            <span>
                             Sept 2022
                            </span>

                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.89316 0.142555C1.63283 0.142555 1.37249 0.24376 1.17419 0.445135C0.776572 0.848919 0.776572 1.50158 1.17419 1.90536L4.53515 5.31842L1.30131 8.71908C0.911823 9.1301 0.92301 9.78379 1.32673 10.1793C1.73147 10.5748 2.37519 10.5635 2.76467 10.1545L6.69206 6.02375C7.07748 5.6179 7.07239 4.97453 6.67986 4.57591L2.61213 0.445135C2.41383 0.24376 2.1535 0.142555 1.89316 0.142555Z" fill="#2E3A59"/>
                            </svg>


                        </div>
                    </div>
                      <ComposedChart className='' width={510} height={450} data={data}>
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              <CartesianGrid stroke="#f5f5f5" />
                              <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                              <Bar dataKey="pv" barSize={35} fill="#413ea0" />
                              <Line type="monotone" dataKey="uv" stroke="#018183" strokeWidth={3}  />
                      </ComposedChart>
                </div>


          {/* progress */}
                <div className='w-4/12 px-6 py-2 bg-white overflow-y-auto classProgress'>
                    <h1 className='text-[20px] my-2'>Class Progress</h1>
                    <div className=' px-2 flex flex-col gap-y-5'>
                      <div className='bg-[#F0F7FF] flex items-center justify-between px-5 py-3 rounded-lg'>
                        <div>
                          <h2 className='text-[16px] '>Class A</h2>
                          <span className='text-[#9E9E9E] text-[16px]'>78 Registered</span>
                        </div>

                        <div className='circular-progress bg-[conic-gradient(#7d2ae8 3.6deg, #ededed 0deg)]'>
                            <span className='progress-value text-[18px]'>32%</span>
                        </div>
                      </div>   

                      <div className='bg-[#F0F7FF] flex items-center justify-between px-5 py-3 rounded-lg'>
                        <div>
                          <h2 className='text-[16px] '>Class A</h2>
                          <span className='text-[#9E9E9E] text-[16px]'>78 Registered</span>
                        </div>

                        <div className='circular-progress bg-[conic-gradient(#7d2ae8 3.6deg, #ededed 0deg)]'>
                            <span className='progress-value text-[18px]'>32%</span>
                        </div>
                      </div>


                      <div className='bg-[#F0F7FF] flex items-center justify-between px-5 py-3 rounded-lg'>
                        <div>
                          <h2 className='text-[16px] '>Class A</h2>
                          <span className='text-[#9E9E9E] text-[16px]'>78 Registered</span>
                        </div>

                        <div className='circular-progress bg-[conic-gradient(#7d2ae8 3.6deg, #ededed 0deg)]'>
                            <span className='progress-value text-[18px]'>32%</span>
                        </div>
                      </div>

                      <div className='bg-[#F0F7FF] flex items-center justify-between px-5 py-3 rounded-lg'>
                        <div>
                          <h2 className='text-[16px] '>Class A</h2>
                          <span className='text-[#9E9E9E] text-[16px]'>78 Registered</span>
                        </div>

                        <div className='circular-progress bg-[conic-gradient(#7d2ae8 3.6deg, #ededed 0deg)]'>
                            <span className='progress-value text-[18px]'>32%</span>
                        </div>
                      </div>
                      
                    </div>
                </div>

          {/* upcoming activities */}

                <div className='w-4/12 bg-white px-6 py-2 overflow-y-auto classProgress'>
                  <div className='flex justify-between my-2'>
                    <h1 className='text-[20px]'>Upcoming Activities</h1>
                    <Link to={"/"} className='text-blue-bg font-bold'>See all</Link>
                  </div>

                  <div className='flex flex-col gap-y-3 overflow-auto'>
                    <div className='flex items-center justify-between bg-[#F0F7FF] py-5 rounded-lg px-4'>
                      <div className='text-white p-3 rounded-md bg-blue-bg 1/12'><span>31</span></div>
                    
                      <div className='w-7/12 flex flex-col justify-center items-center'>
                        <h2 className='text-[16px]'>Meeting with the VC</h2>
                        <Link to={"/"} className='font-bold text-blue-bg '>www.google.com</Link>
                      </div>

                      <div className='flex flex-col w-3/12'>
                        <div>
                          <span className='w-10 h-10 rounded-full bg-blue-bg'></span>
                          <span className='text-[#8A8A8A]'>10AM-11AM</span>
                        </div>
                        <span className='text-[#FF1515] text-[13px]'>Due Soon</span>
                      </div>
                    </div>

                    <div className='flex items-center justify-between bg-[#F0F7FF] py-5 rounded-lg px-4'>
                      <div className='text-white p-3 rounded-md bg-blue-bg 1/12'><span>31</span></div>
                    
                      <div className='w-7/12 flex flex-col justify-center items-center'>
                        <h2 className='text-[16px]'>Meeting with the VC</h2>
                        <Link to={"/"} className='font-bold text-blue-bg '>www.google.com</Link>
                      </div>

                      <div className='flex flex-col w-3/12'>
                        <div>
                          <span className='w-10 h-10 rounded-full bg-blue-bg'></span>
                          <span className='text-[#8A8A8A]'>10AM-11AM</span>
                        </div>
                        <span className='text-[#FF1515] text-[13px]'>Due Soon</span>
                      </div>
                    </div>

                    <div className='flex items-center justify-between bg-[#F0F7FF] py-5 rounded-lg px-4'>
                      <div className='text-white p-3 rounded-md bg-blue-bg 1/12'><span>31</span></div>
                    
                      <div className='w-7/12 flex flex-col justify-center items-center'>
                        <h2 className='text-[16px]'>Meeting with the VC</h2>
                        <Link to={"/"} className='font-bold text-blue-bg '>www.google.com</Link>
                      </div>

                      <div className='flex flex-col w-3/12'>
                        <div>
                          <span className='w-10 h-10 rounded-full bg-blue-bg'></span>
                          <span className='text-[#8A8A8A]'>10AM-11AM</span>
                        </div>
                        <span className='text-[#FF1515] text-[13px]'>Due Soon</span>
                      </div>
                    </div>

                  </div>

                </div>    

          {/* upcoming activities ending */}
            </div>
        </section>


        <section className='bg-[#f4f4f4] h-[600px]'>
          <div className='flex  gap-x-4 h-[600px]'>
            {/* graph */}
            <div className='w-4/12 bg-white'>
              <div className='flex justify-between px-6'>
                  <h2 className='text-[20px] my-2'>Student Statistic</h2>
                  <div className='flex items-center space-x-4'>
                  <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.46682 0.141546C5.20038 0.141546 4.93496 0.246881 4.73565 0.456518L0.807242 4.5873C0.422842 4.99314 0.427927 5.63651 0.820462 6.03513L4.88819 10.1659C5.28479 10.5697 5.92851 10.5697 6.32613 10.1659C6.72273 9.76213 6.72273 9.10947 6.32613 8.70568L2.96517 5.29263L6.19799 1.89196C6.58849 1.48095 6.57731 0.827255 6.17359 0.431733C5.97528 0.237587 5.72105 0.141546 5.46682 0.141546Z" fill="#2E3A59"/>
                  </svg>
                  
                  <span>
                    Sept 2022
                  </span>

                  <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.89316 0.142555C1.63283 0.142555 1.37249 0.24376 1.17419 0.445135C0.776572 0.848919 0.776572 1.50158 1.17419 1.90536L4.53515 5.31842L1.30131 8.71908C0.911823 9.1301 0.92301 9.78379 1.32673 10.1793C1.73147 10.5748 2.37519 10.5635 2.76467 10.1545L6.69206 6.02375C7.07748 5.6179 7.07239 4.97453 6.67986 4.57591L2.61213 0.445135C2.41383 0.24376 2.1535 0.142555 1.89316 0.142555Z" fill="#2E3A59"/>
                  </svg>


              </div>
            </div>
          <div>

              <LineChart width={510} height={450} data={data}

                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
              </div>
            </div>

            {/* graph ending*/}

            {/* waiting room */}
            <div className='w-4/12 bg-white'>
              <div className='flex justify-between my-2 px-6'>
                      <h1 className='text-[20px]'>Waiting Room</h1>
                      <Link to={"/"} className='text-blue-bg font-bold'>See all</Link>
              </div>
              <div>
                <div className='flex flex-col gap-y-3 overflow-auto border-t'>
                        <div className='flex items-center justify-between bg-white py-5 rounded-lg px-4 border-t'>
                          <div className='bg-[#F0F7FF] p-3 rounded-md text-[#186BAD]'><span>AA</span></div>
                        
                          <div className='w-7/12 flex flex-col justify-center items-center'>
                            <h2 className='text-[25px]'>Meeting with the VC</h2>
                            <small>Hello, Mr John  i am yet to get your class b res...</small>
                          </div>

                          <div className='flex flex-col w-3/12'>
                              <span className='text-[#8A8A8A]'>10AM-11AM</span>
                          </div>
                        </div>
                  
                        <div className='flex items-center justify-between bg-white py-5 rounded-lg px-4 border-t'>
                          <div className='bg-[#F0F7FF] p-3 rounded-md text-[#186BAD]'><span>AA</span></div>
                        
                          <div className='w-7/12 flex flex-col justify-center items-center'>
                            <h2 className='text-[25px]'>Meeting with the VC</h2>
                            <small>Hello, Mr John  i am yet to get your class b res...</small>
                          </div>

                          <div className='flex flex-col w-3/12'>
                              <span className='text-[#8A8A8A]'>10AM-11AM</span>
                          </div>
                        </div>
                        
                        <div className='flex items-center justify-between bg-white py-5 rounded-lg px-4 border-t'>
                          <div className='bg-[#F0F7FF] p-3 rounded-md text-[#186BAD]'><span>AA</span></div>
                        
                          <div className='w-7/12 flex flex-col justify-center items-center'>
                            <h2 className='text-[25px]'>Meeting with the VC</h2>
                            <small>Hello, Mr John  i am yet to get your class b res...</small>
                          </div>

                          <div className='flex flex-col w-3/12'>
                              <span className='text-[#8A8A8A]'>10AM-11AM</span>
                          </div>
                        </div>              
                </div>
              </div>
            </div>
            {/* waiting room ending*/}

          {/* documents  */}
            <div className='w-4/12 bg-white'>
              <div className='flex justify-between my-2 px-6'>
                      <h1 className='text-[20px]'>Documents</h1>
                      <Link to={"/"} className='text-blue-bg font-bold'>See all</Link>
              </div>
              <div>
                <div className='flex flex-col gap-y-3 overflow-auto border-t'>
                        <div className='flex items-center justify-between bg-white py-5 rounded-lg px-4 border-t'>
                          <div className='w-2/12  rounded-md text-[#186BAD]'>
                            <div className='bg-[#F0F7FF] p-3 inline-block rounded-lg'>
                                <svg width="25" height="25" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.324219 3.04586C0.324219 2.49808 0.5385 1.97274 0.919923 1.58541C1.30135 1.19807 1.81867 0.980469 2.35808 0.980469C2.35808 1.80213 2.6795 2.59014 3.25164 3.17114C3.82377 3.75215 4.59975 4.07855 5.40887 4.07855H7.44274C8.25186 4.07855 9.02784 3.75215 9.59997 3.17114C10.1721 2.59014 10.4935 1.80213 10.4935 0.980469C11.0329 0.980469 11.5503 1.19807 11.9317 1.58541C12.3131 1.97274 12.5274 2.49808 12.5274 3.04586V14.4055C12.5274 14.9533 12.3131 15.4786 11.9317 15.8659C11.5503 16.2533 11.0329 16.4709 10.4935 16.4709H2.35808C1.81867 16.4709 1.30135 16.2533 0.919923 15.8659C0.5385 15.4786 0.324219 14.9533 0.324219 14.4055V3.04586ZM3.37501 7.17664C3.1053 7.17664 2.84664 7.28544 2.65593 7.4791C2.46522 7.67277 2.35808 7.93544 2.35808 8.20933C2.35808 8.48322 2.46522 8.74589 2.65593 8.93956C2.84664 9.13322 3.1053 9.24202 3.37501 9.24202H3.38518C3.65489 9.24202 3.91355 9.13322 4.10426 8.93956C4.29497 8.74589 4.40211 8.48322 4.40211 8.20933C4.40211 7.93544 4.29497 7.67277 4.10426 7.4791C3.91355 7.28544 3.65489 7.17664 3.38518 7.17664H3.37501ZM6.4258 7.17664C6.1561 7.17664 5.89744 7.28544 5.70673 7.4791C5.51601 7.67277 5.40887 7.93544 5.40887 8.20933C5.40887 8.48322 5.51601 8.74589 5.70673 8.93956C5.89744 9.13322 6.1561 9.24202 6.4258 9.24202H9.4766C9.7463 9.24202 10.005 9.13322 10.1957 8.93956C10.3864 8.74589 10.4935 8.48322 10.4935 8.20933C10.4935 7.93544 10.3864 7.67277 10.1957 7.4791C10.005 7.28544 9.7463 7.17664 9.4766 7.17664H6.4258ZM3.37501 11.3074C3.1053 11.3074 2.84664 11.4162 2.65593 11.6099C2.46522 11.8036 2.35808 12.0662 2.35808 12.3401C2.35808 12.614 2.46522 12.8767 2.65593 13.0703C2.84664 13.264 3.1053 13.3728 3.37501 13.3728H3.38518C3.65489 13.3728 3.91355 13.264 4.10426 13.0703C4.29497 12.8767 4.40211 12.614 4.40211 12.3401C4.40211 12.0662 4.29497 11.8036 4.10426 11.6099C3.91355 11.4162 3.65489 11.3074 3.38518 11.3074H3.37501ZM6.4258 11.3074C6.1561 11.3074 5.89744 11.4162 5.70673 11.6099C5.51601 11.8036 5.40887 12.0662 5.40887 12.3401C5.40887 12.614 5.51601 12.8767 5.70673 13.0703C5.89744 13.264 6.1561 13.3728 6.4258 13.3728H9.4766C9.7463 13.3728 10.005 13.264 10.1957 13.0703C10.3864 12.8767 10.4935 12.614 10.4935 12.3401C10.4935 12.0662 10.3864 11.8036 10.1957 11.6099C10.005 11.4162 9.7463 11.3074 9.4766 11.3074H6.4258Z" fill="#186BAD"/>
                                </svg>
                            </div>

                          </div>
                          
                          <div className='w-10/12 flex flex-col justify-center '>
                            <h2 className='font-bold'>Class A 1st Semester result</h2>
                              <span className='text-[#8A8A8A]'>04 may, 09:20am</span>
                          </div>
                        </div>

                        <div className='flex items-center justify-between bg-white py-5 rounded-lg px-4 border-t'>
                          <div className='w-2/12  rounded-md text-[#186BAD]'>
                            <div className='bg-[#F0F7FF] p-3 inline-block rounded-lg'>
                                <svg width="25" height="25" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.324219 3.04586C0.324219 2.49808 0.5385 1.97274 0.919923 1.58541C1.30135 1.19807 1.81867 0.980469 2.35808 0.980469C2.35808 1.80213 2.6795 2.59014 3.25164 3.17114C3.82377 3.75215 4.59975 4.07855 5.40887 4.07855H7.44274C8.25186 4.07855 9.02784 3.75215 9.59997 3.17114C10.1721 2.59014 10.4935 1.80213 10.4935 0.980469C11.0329 0.980469 11.5503 1.19807 11.9317 1.58541C12.3131 1.97274 12.5274 2.49808 12.5274 3.04586V14.4055C12.5274 14.9533 12.3131 15.4786 11.9317 15.8659C11.5503 16.2533 11.0329 16.4709 10.4935 16.4709H2.35808C1.81867 16.4709 1.30135 16.2533 0.919923 15.8659C0.5385 15.4786 0.324219 14.9533 0.324219 14.4055V3.04586ZM3.37501 7.17664C3.1053 7.17664 2.84664 7.28544 2.65593 7.4791C2.46522 7.67277 2.35808 7.93544 2.35808 8.20933C2.35808 8.48322 2.46522 8.74589 2.65593 8.93956C2.84664 9.13322 3.1053 9.24202 3.37501 9.24202H3.38518C3.65489 9.24202 3.91355 9.13322 4.10426 8.93956C4.29497 8.74589 4.40211 8.48322 4.40211 8.20933C4.40211 7.93544 4.29497 7.67277 4.10426 7.4791C3.91355 7.28544 3.65489 7.17664 3.38518 7.17664H3.37501ZM6.4258 7.17664C6.1561 7.17664 5.89744 7.28544 5.70673 7.4791C5.51601 7.67277 5.40887 7.93544 5.40887 8.20933C5.40887 8.48322 5.51601 8.74589 5.70673 8.93956C5.89744 9.13322 6.1561 9.24202 6.4258 9.24202H9.4766C9.7463 9.24202 10.005 9.13322 10.1957 8.93956C10.3864 8.74589 10.4935 8.48322 10.4935 8.20933C10.4935 7.93544 10.3864 7.67277 10.1957 7.4791C10.005 7.28544 9.7463 7.17664 9.4766 7.17664H6.4258ZM3.37501 11.3074C3.1053 11.3074 2.84664 11.4162 2.65593 11.6099C2.46522 11.8036 2.35808 12.0662 2.35808 12.3401C2.35808 12.614 2.46522 12.8767 2.65593 13.0703C2.84664 13.264 3.1053 13.3728 3.37501 13.3728H3.38518C3.65489 13.3728 3.91355 13.264 4.10426 13.0703C4.29497 12.8767 4.40211 12.614 4.40211 12.3401C4.40211 12.0662 4.29497 11.8036 4.10426 11.6099C3.91355 11.4162 3.65489 11.3074 3.38518 11.3074H3.37501ZM6.4258 11.3074C6.1561 11.3074 5.89744 11.4162 5.70673 11.6099C5.51601 11.8036 5.40887 12.0662 5.40887 12.3401C5.40887 12.614 5.51601 12.8767 5.70673 13.0703C5.89744 13.264 6.1561 13.3728 6.4258 13.3728H9.4766C9.7463 13.3728 10.005 13.264 10.1957 13.0703C10.3864 12.8767 10.4935 12.614 10.4935 12.3401C10.4935 12.0662 10.3864 11.8036 10.1957 11.6099C10.005 11.4162 9.7463 11.3074 9.4766 11.3074H6.4258Z" fill="#186BAD"/>
                                </svg>
                            </div>

                          </div>
                          
                          <div className='w-10/12 flex flex-col justify-center '>
                            <h2 className='font-bold'>Class A 1st Semester result</h2>
                              <span className='text-[#8A8A8A]'>04 may, 09:20am</span>
                          </div>
                        </div>

                        <div className='flex items-center justify-between bg-white py-5 rounded-lg px-4 border-t'>
                          <div className='w-2/12  rounded-md text-[#186BAD]'>
                            <div className='bg-[#F0F7FF] p-3 inline-block rounded-lg'>
                                <svg width="25" height="25" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.324219 3.04586C0.324219 2.49808 0.5385 1.97274 0.919923 1.58541C1.30135 1.19807 1.81867 0.980469 2.35808 0.980469C2.35808 1.80213 2.6795 2.59014 3.25164 3.17114C3.82377 3.75215 4.59975 4.07855 5.40887 4.07855H7.44274C8.25186 4.07855 9.02784 3.75215 9.59997 3.17114C10.1721 2.59014 10.4935 1.80213 10.4935 0.980469C11.0329 0.980469 11.5503 1.19807 11.9317 1.58541C12.3131 1.97274 12.5274 2.49808 12.5274 3.04586V14.4055C12.5274 14.9533 12.3131 15.4786 11.9317 15.8659C11.5503 16.2533 11.0329 16.4709 10.4935 16.4709H2.35808C1.81867 16.4709 1.30135 16.2533 0.919923 15.8659C0.5385 15.4786 0.324219 14.9533 0.324219 14.4055V3.04586ZM3.37501 7.17664C3.1053 7.17664 2.84664 7.28544 2.65593 7.4791C2.46522 7.67277 2.35808 7.93544 2.35808 8.20933C2.35808 8.48322 2.46522 8.74589 2.65593 8.93956C2.84664 9.13322 3.1053 9.24202 3.37501 9.24202H3.38518C3.65489 9.24202 3.91355 9.13322 4.10426 8.93956C4.29497 8.74589 4.40211 8.48322 4.40211 8.20933C4.40211 7.93544 4.29497 7.67277 4.10426 7.4791C3.91355 7.28544 3.65489 7.17664 3.38518 7.17664H3.37501ZM6.4258 7.17664C6.1561 7.17664 5.89744 7.28544 5.70673 7.4791C5.51601 7.67277 5.40887 7.93544 5.40887 8.20933C5.40887 8.48322 5.51601 8.74589 5.70673 8.93956C5.89744 9.13322 6.1561 9.24202 6.4258 9.24202H9.4766C9.7463 9.24202 10.005 9.13322 10.1957 8.93956C10.3864 8.74589 10.4935 8.48322 10.4935 8.20933C10.4935 7.93544 10.3864 7.67277 10.1957 7.4791C10.005 7.28544 9.7463 7.17664 9.4766 7.17664H6.4258ZM3.37501 11.3074C3.1053 11.3074 2.84664 11.4162 2.65593 11.6099C2.46522 11.8036 2.35808 12.0662 2.35808 12.3401C2.35808 12.614 2.46522 12.8767 2.65593 13.0703C2.84664 13.264 3.1053 13.3728 3.37501 13.3728H3.38518C3.65489 13.3728 3.91355 13.264 4.10426 13.0703C4.29497 12.8767 4.40211 12.614 4.40211 12.3401C4.40211 12.0662 4.29497 11.8036 4.10426 11.6099C3.91355 11.4162 3.65489 11.3074 3.38518 11.3074H3.37501ZM6.4258 11.3074C6.1561 11.3074 5.89744 11.4162 5.70673 11.6099C5.51601 11.8036 5.40887 12.0662 5.40887 12.3401C5.40887 12.614 5.51601 12.8767 5.70673 13.0703C5.89744 13.264 6.1561 13.3728 6.4258 13.3728H9.4766C9.7463 13.3728 10.005 13.264 10.1957 13.0703C10.3864 12.8767 10.4935 12.614 10.4935 12.3401C10.4935 12.0662 10.3864 11.8036 10.1957 11.6099C10.005 11.4162 9.7463 11.3074 9.4766 11.3074H6.4258Z" fill="#186BAD"/>
                                </svg>
                            </div>

                          </div>
                          
                          <div className='w-10/12 flex flex-col justify-center '>
                            <h2 className='font-bold'>Class A 1st Semester result</h2>
                              <span className='text-[#8A8A8A]'>04 may, 09:20am</span>
                          </div>
                        </div>

                        <div className='flex items-center justify-between bg-white py-5 rounded-lg px-4 border-t'>
                          <div className='w-2/12  rounded-md text-[#186BAD]'>
                            <div className='bg-[#F0F7FF] p-3 inline-block rounded-lg'>
                                <svg width="25" height="25" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.324219 3.04586C0.324219 2.49808 0.5385 1.97274 0.919923 1.58541C1.30135 1.19807 1.81867 0.980469 2.35808 0.980469C2.35808 1.80213 2.6795 2.59014 3.25164 3.17114C3.82377 3.75215 4.59975 4.07855 5.40887 4.07855H7.44274C8.25186 4.07855 9.02784 3.75215 9.59997 3.17114C10.1721 2.59014 10.4935 1.80213 10.4935 0.980469C11.0329 0.980469 11.5503 1.19807 11.9317 1.58541C12.3131 1.97274 12.5274 2.49808 12.5274 3.04586V14.4055C12.5274 14.9533 12.3131 15.4786 11.9317 15.8659C11.5503 16.2533 11.0329 16.4709 10.4935 16.4709H2.35808C1.81867 16.4709 1.30135 16.2533 0.919923 15.8659C0.5385 15.4786 0.324219 14.9533 0.324219 14.4055V3.04586ZM3.37501 7.17664C3.1053 7.17664 2.84664 7.28544 2.65593 7.4791C2.46522 7.67277 2.35808 7.93544 2.35808 8.20933C2.35808 8.48322 2.46522 8.74589 2.65593 8.93956C2.84664 9.13322 3.1053 9.24202 3.37501 9.24202H3.38518C3.65489 9.24202 3.91355 9.13322 4.10426 8.93956C4.29497 8.74589 4.40211 8.48322 4.40211 8.20933C4.40211 7.93544 4.29497 7.67277 4.10426 7.4791C3.91355 7.28544 3.65489 7.17664 3.38518 7.17664H3.37501ZM6.4258 7.17664C6.1561 7.17664 5.89744 7.28544 5.70673 7.4791C5.51601 7.67277 5.40887 7.93544 5.40887 8.20933C5.40887 8.48322 5.51601 8.74589 5.70673 8.93956C5.89744 9.13322 6.1561 9.24202 6.4258 9.24202H9.4766C9.7463 9.24202 10.005 9.13322 10.1957 8.93956C10.3864 8.74589 10.4935 8.48322 10.4935 8.20933C10.4935 7.93544 10.3864 7.67277 10.1957 7.4791C10.005 7.28544 9.7463 7.17664 9.4766 7.17664H6.4258ZM3.37501 11.3074C3.1053 11.3074 2.84664 11.4162 2.65593 11.6099C2.46522 11.8036 2.35808 12.0662 2.35808 12.3401C2.35808 12.614 2.46522 12.8767 2.65593 13.0703C2.84664 13.264 3.1053 13.3728 3.37501 13.3728H3.38518C3.65489 13.3728 3.91355 13.264 4.10426 13.0703C4.29497 12.8767 4.40211 12.614 4.40211 12.3401C4.40211 12.0662 4.29497 11.8036 4.10426 11.6099C3.91355 11.4162 3.65489 11.3074 3.38518 11.3074H3.37501ZM6.4258 11.3074C6.1561 11.3074 5.89744 11.4162 5.70673 11.6099C5.51601 11.8036 5.40887 12.0662 5.40887 12.3401C5.40887 12.614 5.51601 12.8767 5.70673 13.0703C5.89744 13.264 6.1561 13.3728 6.4258 13.3728H9.4766C9.7463 13.3728 10.005 13.264 10.1957 13.0703C10.3864 12.8767 10.4935 12.614 10.4935 12.3401C10.4935 12.0662 10.3864 11.8036 10.1957 11.6099C10.005 11.4162 9.7463 11.3074 9.4766 11.3074H6.4258Z" fill="#186BAD"/>
                                </svg>
                            </div>

                          </div>
                          
                          <div className='w-10/12 flex flex-col justify-center '>
                            <h2 className='font-bold'>Class A 1st Semester result</h2>
                              <span className='text-[#8A8A8A]'>04 may, 09:20am</span>
                          </div>
                        </div>
                </div>
              </div>
            </div>
          {/* documents ending*/}

          </div>
        </section>
    </TutorAdminLayout>
  )
}

export default DashBoardTutor