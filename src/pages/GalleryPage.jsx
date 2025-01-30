import React from 'react'
import TopBar from '../components/common/Topbar'
import Header from '../components/common/Header'
import Banner from '../components/common/Banner'
import BreadCrumb from '../components/common/BreadCrumb'
import Footer from '../components/common/Footer'
import designbg from '../assets/bg/design.jpg'
import Gallery from '../components/Gallery'

function GalleryPage() {
  return (
    <>
      <TopBar/>
      <Header/>
      <Banner imageUrl={designbg} title={' OUR GALLERY'}/>
      <BreadCrumb currentPage={'Gallery'}/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default GalleryPage