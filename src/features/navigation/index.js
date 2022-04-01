import { motion } from 'framer-motion';
import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import style from './navigation.module.css'
export default function Navigation() {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }
  return (
    <Navbar className='navbar fixed-top navbar-expand-lg navbar-dark ' collapseOnSelect >
      <Container>
        <Navbar.Brand href="#Home">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={style.navigation__brandLogo}
          >
            <motion.path
              d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] }
              }}
            />
          </motion.svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Works">Works</Nav.Link>
            <Nav.Link href="#Contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
