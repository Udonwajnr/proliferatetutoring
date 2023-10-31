import React from 'react'
import MainFooter from './MainFooter'
import Navbar from './Navbar'
const MainLayout = ({children}) => {
  return (
    <>
    <Navbar/>
            <main className='px-4 py-10 max-w-[2000px] m-auto relative'>
              {children}
          </main>
    <MainFooter/>
    </>
  )
}

export default MainLayout