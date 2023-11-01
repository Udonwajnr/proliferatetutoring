import React from 'react'
import TutorAdminLayout from '../../components/TutorAdminLayout'
import img1 from '../../assets/img.png'
import {CartesianGrid,XAxis, YAxis,Tooltip,Legend,Bar,Line,ComposedChart } from 'recharts'
import { Area } from 'recharts'
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
                    <h1 className='text-[40px] text-white font-bold'>Welcome bak,Charles</h1>
                    <p className='text-white text-[20px]'>
                    You have 27 new student added to your domain. Please reach out to the Head Teacher if you want them excluded from your domain.
                    </p>
                </div>
                <img src={img1} alt=""  />
            </div>
        </section>


        <section>
            <div className='flex'>
                {/* barchat */}
                <div className='shadow-lg'>
                    <div className='flex justify-between'>
                        <h2>Student Statistic</h2>
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
                    <ComposedChart width={730} height={450} data={data}>
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
                <div>
                    <h1>Class Progress</h1>
                    <div>
                        <div className='bg-[#F0F7FF]'>
                            <span></span>
                                <div className='bg-white w-[] h-32 rounded-full p-2 relative border-8 border-gray-950'>
                                    <div className='bg-transparent absolute w-32 h-32  p-2  top-0 left-0  rounded-full '>

                                    </div>
                                </div>
                        </div>


                    </div>
                </div>



                <div>
                </div>    
            </div>

        </section>
    </TutorAdminLayout>
  )
}

export default DashBoardTutor