import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
export default function Navigation() {

  return (
    <Navbar className='navbar fixed-top navbar-expand-lg navbar-dark ' collapseOnSelect >
      <Container>
        <Navbar.Brand href="#Home">Portfolio</Navbar.Brand>
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
