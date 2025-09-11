import React from 'react'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import { FeatureSection } from './components/FeatureSection'


const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto px-6 pt-20'>
        <Hero />
      </div>
      <FeatureSection />
    </>
  )
}

export default App
