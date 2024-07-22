import React from 'react'
import BannerSection from './Banner'
import ClientsImages from './clients'
import HowItWorks from './How'
import ImageSlider from './ClientsSlide'
import AboutMyro from './About'
import Comment from './Comment'
import HowToBuy from './HowToBuy'
import Features from './Features'


const Home = () => {
  return (
    <>
      <BannerSection/>
     <ImageSlider/>
     <AboutMyro/>
     <Comment/>
     <HowToBuy/>
     <Features/>
   
    </>
  )
}

export default Home