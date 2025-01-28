import React from 'react'
import TopBar from '../components/common/Topbar'
import Header from '../components/common/Header'
import Banner from '../components/common/Banner'
import Footer from '../components/common/Footer'
import designbg from '../assets/bg/design.jpg'
import ChooseArea from '../components/common/ChooseArea'
import BuildingSpecificationsForm from '../components/BuildingSpecificationsForm'
function CostCalculatorPage() {
  return (
    <>
      <TopBar/>
      <Header/>
      <Banner imageUrl={designbg} title={'COST CALCULATOR'}/>
      <ChooseArea/>
      <BuildingSpecificationsForm/>
      <Footer/>
    </>
  )
}

export default CostCalculatorPage