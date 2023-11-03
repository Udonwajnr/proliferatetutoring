import React from 'react'
import MainFooter from './MainFooter'
import Navbar from './Navbar'
const MainLayout = ({children}) => {
  return (
    <>
    <Navbar />
            <main className=' max-w-[2300px] m-auto relative'>
              {children}
          </main>
    <MainFooter/>
    </>
  )
}

export default MainLayout