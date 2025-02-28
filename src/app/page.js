import React from 'react'
import SplitScreen from './components/mainScreem'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'



function Page() {
  return (
    <div className='bg-black min-h-screen w-full'>
     
      <SplitScreen/>
      <AboutMe/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default Page
