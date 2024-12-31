import React from 'react'
import Hero from './Hero/Hero'
import Feature from './BoiteVitesse/Feature'
import AutrePresta from './AutrePresta/AutrePresta'
import Garage from './Garage/Garage'
import Tarifs from './Tarifs/Tarifs'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Hero id="hero"/>
        <Feature id="feature"/>
        <AutrePresta id="autre-presta"/>
        <Garage id="garage"/>
        <Tarifs id="tarifs"/>
        <Footer id="footer"/>
    </div>
  )
}

export default Home
