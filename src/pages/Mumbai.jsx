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

function Mumbai() {
    
  return (
    <>
      <TopBar/>
      <Header/>
      <Banner imageUrl={designbg} title={'HOUSE AND BUNGALOW CONSTRUCTION COST PACKAGES IN MUMBAI'}/>
      <BreadCrumb currentPage={'House and bungalow construction cost packages in Mumbai'}/>
      <CostOfConstruction city="Mumbai" price="1749" />
      <Form/>
      <HappyHomesPackages/>
      <FAQAccordion/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default Mumbai