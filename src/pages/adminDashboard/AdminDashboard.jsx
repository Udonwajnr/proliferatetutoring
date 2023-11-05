import React from 'react'
import AdminLayout from '../../components/AdminComponent/AdminLayout'
import {CartesianGrid,XAxis, YAxis,Tooltip,Legend,Bar,Line,ComposedChart,LineChart } from 'recharts'
import { Area } from 'recharts'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
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
    <AdminLayout>
      
      <section>

      <div className='flex space-x-4'>
        <div className='w-10/12'>
            <div className='flex justify-between'>

              <div className='bg-[#67C4CE] w-60 h-60 flex flex-col justify-between p-5 rounded-md'>
                <h2 className='text-[30px] text-white'>Students</h2>
                <span className='text-[50px] text-white font-bold'>300</span>
              </div>

              <div className='bg-[#186BAD] w-60 h-60 flex flex-col justify-between p-5 rounded-md'>
                <h2 className='text-[30px] text-white'>Tutors</h2>
                <span className='text-[50px] text-white font-bold'>300</span>
              </div>

              <div className='bg-[#898A8B] w-60 h-60 flex flex-col justify-between p-5 rounded-md'>
                <h2 className='text-[30px] text-white'>Classes</h2>
                <span className='text-[50px] text-white font-bold'>300</span>
              </div>
            </div>
        {/* graph */}
            <div className='my-10'>
              <div className='my-5'>
                <h1 className='text-[35px] font-bold'>Usage Graph</h1>
              </div>
              <ComposedChart className='' width={1000} height={500} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={35} fill="#67C4CE" />
                <Line type="monotone" dataKey="uv" stroke="#186BAD" strokeWidth={3}  />
              </ComposedChart>
            </div>

        </div>

        {/* user info */}
        <div className='w-2/12  '>
          <div className='bg-[#F2F1F1] px-5 h-3/6 rounded-lg'>
            <h2 className='text-[35px] font-bold'>User Info</h2>
            <div className='flex items-end space-x-5'>
              <div className='flex flex-col items-center'>
                <div className='bg-[#67C4CE] h-48 w-20 flex justify-center items-center text-white font-bold rounded-lg'>70%</div>
                  <span className='text-[#898A8B] font-bold'>Male</span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='bg-blue-bg h-36 w-20 flex justify-center items-center text-white font-bold rounded-lg'>60%</div>
                <span className='text-[#898A8B] font-bold'>Female</span>

              </div>
            </div>

          </div>
        
        <div className='flex flex-col gap-y-5 mt-10'>
          <div className='flex items-center gap-x-5'>
            <div className='w-10 h-10 bg-blue-bg'></div>
            <span className='text-[#898A8B] font-bold'>Tutor</span>
          </div>

          <div className='flex items-center gap-x-5'>
            <div className='w-10 h-10 bg-[#67C4CE]'></div>
            <span className='text-[#898A8B] font-bold'>Student</span>
          </div>

        </div>
        </div>
        

      </div>
      </section>
    </AdminLayout>
  )
}

export default AdminDashboard