import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import './navbar.css'

export const TopNavbar = () => {
    return (
        <div className="navlists">
              <Navbar expand= "lg">
            <Container>
    <Navbar.Brand  className="logo" href="/">Bijay</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler"/>
    <Navbar.Collapse id="basic-navbar-nav" className="toggler">
      <Nav className="ms-auto lists">
        <Nav.Link href="#Skills">Skills</Nav.Link>
        <Nav.Link href="#Projects">Projects</Nav.Link>
        <Nav.Link href="#About">About</Nav.Link>
        <Nav.Link href="#Contact">Contact</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    )
}
