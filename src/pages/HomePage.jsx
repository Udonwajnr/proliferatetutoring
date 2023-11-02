import React from 'react'
import MainLayout from '../components/MainLayout'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Discover from '../components/Discover'
const HomePage = () => {
  return (
    <MainLayout>
      <Hero/>
      <HowItWorks/>
    </MainLayout>
  )
}

export default HomePage