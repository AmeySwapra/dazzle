import React from 'react'
import TopBar from '../components/common/Topbar'
import Header from '../components/common/Header'
import Banner from '../components/common/Banner'
import BreadCrumb from '../components/common/BreadCrumb'
import Footer from '../components/common/Footer'
import designbg from '../assets/bg/design.jpg'
import Contact from '../components/Contact'
function ContactPage() {
  return (
    <>
      <TopBar/>
      <Header/>
      <Banner imageUrl={designbg} title={'CONTACT US'}/>
      <BreadCrumb currentPage={'Contact Us'}/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default ContactPage