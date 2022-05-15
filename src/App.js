import React from 'react'
import About from './features/aboutme'
// import Contacts from './features/contacts'
import Hero from './features/hero'
// import Navigation from './features/navigation'
import Works from './features/works'
import style from './App.module.css'
import { Routes, Route } from "react-router-dom";
export default function App() {


  return (
    <div className={`${style.App} `}>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Hero id="Home" />} />
        <Route path="/about" element={<About id="About" />} />
        <Route path="/work" element={<Works id="Works" />} />
      </Routes>
      {/* <Contacts /> */}
    </div>
  )
}
