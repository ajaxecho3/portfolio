import React from 'react'
import About from './features/aboutme'
import Contacts from './features/contacts'
import Hero from './features/hero'
import { FloatingSidenav } from './features/navigation'
import Works from './features/works'
import style from './App.module.css'
export default function App() {


  return (
    <div className={`${style.App}`}>
      <FloatingSidenav />
      <Hero id="Home" />
      <About id="About" />
      <Works id="Works" />
      <Contacts />
    </div>
  )
}
