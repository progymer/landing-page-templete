import React from 'react'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import { FeatureSection } from './components/FeatureSection'
import Workflow from './components/Workflow'


const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto px-6 pt-20'>
        <Hero />
        <FeatureSection />
        <Workflow />
      </div>
      
    </>
  )
}

export default App
