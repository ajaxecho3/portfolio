import React, { Fragment } from 'react'
import About from './features/About'
import Hero from './features/hero'
import Navigation from './features/navigation'
import Works from './features/works'
export default function App() {
  return (
    <Fragment>
      <Navigation />
      <Hero id="Home" style={{ Height: "100vh" }} />
      <Works id="Works" style={{ Height: "100vh" }} />
      <About id="Contacts" style={{ Height: "100vh" }} />
    </Fragment>
  )
}
