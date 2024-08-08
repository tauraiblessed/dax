
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Catalogue from './Components/Catalogue/Catalogue'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Vanhuvacho from './Components/Vanhuvacho/Vanhuvacho'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Products' title='What We Offer'/>
      <Catalogue/>
      <About/>
      <Title subTitle='Our Products' title='Images'/>
      <Gallery/>
      
      <Title subTitle='Contact Us' title='Get In Touch'/>
     <Contact/>
     <Footer/>
      </div>
     {/*<Vanhuvacho/> */} 
    </div>
  )
}

export default App