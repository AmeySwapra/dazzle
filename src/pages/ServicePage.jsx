import React from 'react'
import TopBar from '../components/common/Topbar'
import Header from '../components/common/Header'
import Banner from '../components/common/Banner'
import BreadCrumb from '../components/common/BreadCrumb'
import Services from '../components/common/Services'
import Footer from '../components/common/Footer'
import servicebg from '../assets/bg/servicepg.jpg'
function ServicePage() {
  return (
   <>
     <TopBar/>
     <Header/>
     <Banner imageUrl={servicebg} title={'SERVICES'}/>
     <BreadCrumb currentPage={'Our Product/Service'}/>
     <Services backgroundImage={false} cardBackground="white" />;
     <Footer/>
   </>
  )
}

export default ServicePage