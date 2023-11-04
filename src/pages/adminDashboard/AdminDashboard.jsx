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


        <div>
          <ComposedChart className='' width={576} height={450} data={data}>
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
      </section>
    </AdminLayout>
  )
}

export default AdminDashboard