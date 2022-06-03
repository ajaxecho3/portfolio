import React from 'react'
import Navbar from './components/Navbar'
import About from './features/aboutme'
import Contacts from './features/contacts'
import Home from './features/hero'
import Skills from './features/Skill'
import Work from './features/works'
// import Contacts from './features/contacts'
// import Navigation from './features/navigation'
export default function App() {


  return (
    <div className="min-h-full">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work/>
        <Contacts />
    </div>
    
  )
}
