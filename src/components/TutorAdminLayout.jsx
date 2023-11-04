import React from 'react'
import TutorsSideBar from './TutorsSideBar'
import Footer from '../pages/Footer'
import MainFooter from './MainFooter'
import TutorPageHeader from './TutorPageHeader'

const TutorAdminLayout = ({children}) => {
  return (
    <>
        <div className='flex '>
            <TutorsSideBar/>
            <div className='w-10/12 p-4'>
                <TutorPageHeader/>
                <main className=''>
                    {children}
                </main>
            </div>
        </div>
        <MainFooter/>
    </>
  )
}

export default TutorAdminLayout