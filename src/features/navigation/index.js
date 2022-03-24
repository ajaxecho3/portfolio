import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
export default function Navigation() {

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#Home">Bernardino Ochoa</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Works">Works</Nav.Link>
            <Nav.Link href="#Contacts">Contacts</Nav.Link>
            <Button>Download my cv</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
