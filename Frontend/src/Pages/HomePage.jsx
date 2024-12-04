import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/hero'
import About from '../Components/About'
import Footer from '../Components/footer'
import Services from '../Components/Services'
import Contact from '../Components/Contact'

function HomePage() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer /> 

    </div>
  )
}

export default HomePage