import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Recommended from './components/Recommended'
import ScrollToTop from './components/ScrollToTop'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import scrollReveal from 'scrollreveal';


function App() {
  useEffect(() => {
    const sr = scrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    })

    sr.reveal(
      `
      nav,
      #home,
      #service,
      #recommend,
      #testimonials,
      footer`, {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
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
