import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import StatsContainer from '../components/StatsContainer'
import Stats from '../components/Stats'
import FeaturedSection from '../components/FeaturedSection'
import TrustSection from '../components/TrustSection'
import InsuranceGuides from '../components/GuideCard'
import CustomerShowcase from '../components/Testimonials'
import FAQ from '../components/Faq'
import SubscribeSection from '../components/Subscribe'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <StatsContainer/>
        <Stats/>
        <FeaturedSection/>
        <TrustSection/>
        <InsuranceGuides/>
        {/* <CustomerShowcase/>
        <FAQ/>
        <SubscribeSection/> */}
        <Footer/>
    </div>
  )
}

export default HomePage