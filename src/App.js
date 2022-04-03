import React, { Fragment } from 'react'
import About from './features/about'
import Contacts from './features/contacts'
import Hero from './features/hero'
import { FloatingSidenav } from './features/navigation'
import Works from './features/works'
export default function App() {
  return (
    <Fragment>
      {/* <Navigation /> */}
      <FloatingSidenav />
      <Hero id="Home" style={{ Height: "100vh" }} />
      <About id="About" />
      <Works id="Works" style={{ Height: "100vh" }} />
      <Contacts />
    </Fragment>
  )
}
