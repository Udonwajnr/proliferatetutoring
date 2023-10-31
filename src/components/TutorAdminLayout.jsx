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
            <div>
                <TutorPageHeader/>
                <main>
                    {children}
                </main>
            </div>
        </div>
        <MainFooter/>
    </>
  )
}

export default TutorAdminLayout