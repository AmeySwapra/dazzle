import React from 'react'
import TopBar from '../components/common/Topbar'
import Header from '../components/common/Header'
import Banner from '../components/common/Banner'
import Footer from '../components/common/Footer'
import designbg from '../assets/bg/design.jpg'
import CostOfConstruction from '../components/common/CostOfConstruction'
import BreadCrumb from '../components/common/BreadCrumb'
import Form from '../components/common/Form'
import HappyHomesPackages from '../components/common/HappyHomesPackages'
import FAQAccordion from '../components/common/FAQAccordion'
import Testimonial from '../components/common/Testimonial'

function Solapur() {
    
  return (
    <>
      <TopBar/>
      <Header/>
      <Banner imageUrl={designbg} title={'HOUSE AND BUNGALOW CONSTRUCTION COST PACKAGES IN SOLAPUR'}/>
      <BreadCrumb currentPage={'House and bungalow construction cost packages in Solapur'}/>
      <CostOfConstruction city="Solapur" price="1549" />
      <Form/>
      <HappyHomesPackages/>
      <FAQAccordion/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default Solapur