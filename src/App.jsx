import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import Workflow from './components/Workflow'
import PriceSection from './components/PriceSection'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

const App = () => {

  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Workflow />
      <PriceSection />
      <Testimonial />
      <Footer />
    </>
     
  )
}


export default App
