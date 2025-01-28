import React from 'react'
import TopBar from '../components/common/Topbar'
import Header from '../components/common/Header'
import Banner from '../components/common/Banner'
import Footer from '../components/common/Footer'
import designbg from '../assets/bg/design.jpg'
import CostOfConstruction from '../components/common/CostOfConstruction'
import BreadCrumb from '../components/common/BreadCrumb'
import Form from '../components/common/Form'

function ChhatrapatiSambhajinagar() {
    
  return (
    <>
      <TopBar/>
      <Header/>
      <Banner imageUrl={designbg} title={'HOUSE AND BUNGALOW CONSTRUCTION COST PACKAGES IN CHHATRAPATI SAMBHAJI NAGR'}/>
      <BreadCrumb currentPage={'House and bungalow construction cost packages in CHHATRAPATI SAMBHAJI NAGR'}/>
      <CostOfConstruction city="CHHATRAPATI SAMBHAJI NAGR" price="1599" />
      <Form/>
      <Footer/>
    </>
  )
}

export default ChhatrapatiSambhajinagar
