import React from 'react'
import StudentSidebar from './StudentSidebar'
import MainFooter from '../MainFooter'
import StudentHeader from './StudentHeader'
const StudentMainLayout = ({children}) => {
  return (
    <>
        <div className="flex">
            <StudentSidebar/>
            <div className='w-10/12 p-4'>
                <StudentHeader/>
                <main className=''>
                    {children}
                </main>
            </div>
        </div>
        <MainFooter/>
    </>
  )
}

export default StudentMainLayout