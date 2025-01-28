import React from 'react'
import TopBar from '../components/common/Topbar'
import Header from '../components/common/Header'
import Banner from '../components/common/Banner'
import BreadCrumb from '../components/common/BreadCrumb'
import Footer from '../components/common/Footer'
import designbg from '../assets/bg/design.jpg'
import Design from '../components/Design'
function DesignPage() {
  return (
    <>
      <TopBar/>
      <Header/>
      <Banner imageUrl={designbg} title={'DESIGN COST'}/>
      <BreadCrumb currentPage={'Design Cost'}/>
      <Design/>
      <Footer/>
    </>
  )
}

export default DesignPage