import React from 'react'
import SplitScreen from './components/mainScreem'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'



function Page() {
  return (
    <div className='bg-black min-h-screen w-full overflow-hidden'>
     
      <SplitScreen/>
      <AboutMe/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Page
