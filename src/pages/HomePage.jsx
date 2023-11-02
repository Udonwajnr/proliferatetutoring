import React from 'react'
import MainLayout from '../components/MainLayout'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Discover from '../components/Discover'
import WhatWeOffer from '../components/WhatWeOffer'
import Excel from '../components/Excel'
import PaymentPlan from '../components/PaymentPlan'
import Amazing from '../components/Amazing'
import Tutors from '../components/Tutors'
const HomePage = () => {
  return (
    <MainLayout>
      <Hero/>
      <HowItWorks/>
      <Discover/>
      <WhatWeOffer/>
      <Tutors/>
      <PaymentPlan/>
      <Amazing/>
      <Excel/>
    </MainLayout>
  )
}

export default HomePage