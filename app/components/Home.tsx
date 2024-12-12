import React from 'react'
import Hero from './Hero/Hero'
import Feature from './BoiteVitesse/Feature'
import AutrePresta from './AutrePresta/AutrePresta'
import Garage from './Garage/Garage'
import Tarifs from './Tarifs/Tarifs'
import Contact from './Contact/contact'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <Feature/>
        <AutrePresta/>
        <Garage/>
        <Tarifs/>
        <Contact/>
    </div>
  )
}

export default Home
