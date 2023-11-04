import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

const VerifyEmail = () => {
  return (
    <Layout>
    <section className='flex  flex-col items-center justify-center'>
        <div className='w-full flex justify-center flex-col text-center'>
            <h2 className='text-lg text-center my-4'>Verify Email</h2>
            <p className='text-[30px] my-4'>Check your inbox for an email from Proliferate.ai 
                and click the verification link to confirm your email address.
            </p>
            <Link to={"/tutor/dashboard"} className='text-md bg-blue-bg text-center text-white font-bold w-[400px] py-2 rounded-lg m-auto'>Confirm Email</Link>

        </div>
            </section>
    </Layout>
  )
}

export default VerifyEmail