import React from 'react'
import Navbar from './Navbar'
import Footer from '../pages/Footer'
const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
          <main className='px-4 py-10 max-w-[1400px] m-auto'>
              {children}
          </main>
        <Footer/>
    </>
  )
}

export default Layout