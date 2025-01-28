import React from "react";
import TopBar from "../components/common/Topbar";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/common/Banner";
import BreadCrumb from "../components/common/BreadCrumb";
import aboutbg from "../assets/bg/about.jpg";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import SloganSection from "../components/common/SloganSection";
import FactCounter from "../components/FactCounter";
import BrandCarousel from "../components/common/BrandCarousel";
function AboutPage() {
  return (
    <>
      <TopBar />
      <Header />
      <Banner imageUrl={aboutbg} title={"About Us"} />
      <BreadCrumb currentPage={"About Us"} />
      <About />
      <WhyChooseUs />
      <SloganSection
        text="We come to you with our large supplier network in the comfort of your own home. No lost weekends,no wonder we’re near by you."
      />
      <FactCounter/>
      <BrandCarousel/>
      <Footer />
    </>
  );
}

export default AboutPage;
