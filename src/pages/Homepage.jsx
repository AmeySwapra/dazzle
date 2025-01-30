import React from 'react'
import TopBar from '../components/common/Topbar'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import WelcomeSection from '../components/WelcomeSection'
import VisionMissionSection from '../components/VisionMissionSection'
import Services from '../components/common/Services'
import LatestProjects from '../components/LatestProjects'
import SloganSection from '../components/common/SloganSection'
import Testimonial from '../components/common/Testimonial'
import BrandCarousel from '../components/common/BrandCarousel'
import Carousel from '../components/Carousel'

function Homepage() {
  return (
    <>
      <TopBar/>
      <Header/>
      <Carousel/>
      <WelcomeSection/>
      <VisionMissionSection/>
      <Services/>
      <LatestProjects/>
      <SloganSection 
        text="Being the largest in-home decorating service in New York City, you can work with us from anywhere!" 
      />
      <Testimonial/>
      <BrandCarousel/>
      <Footer/>

    </>
  )
}

export default Homepage