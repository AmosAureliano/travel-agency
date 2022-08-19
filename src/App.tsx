import { useState } from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Recommended from './components/Recommended'
import ScrollToTop from './components/ScrollToTop'
import Services from './components/Services'
import Testimonial from './components/Testimonial'


function App() {
  return (
    <>
      <ScrollToTop/>
      <Navbar/>
      <Hero/>
      <Services/>
      <Recommended/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
