import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import Workflow from './components/Workflow'
import PriceSection from './components/PriceSection'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

const App = () => {

  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/features" element={<FeaturesSection />}  />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="/pricing" element={<PriceSection />} />
        <Route path="/testimonials" element={<Testimonial />} />
        
      </Routes>
      <Footer />
    </Router>
     
  )
}


export default App
