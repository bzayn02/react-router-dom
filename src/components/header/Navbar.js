import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './navbar.css'

export const TopNavbar = () => {
    return (
        <div className="navlists">
            <Navbar expand="lg">
                <Container>
                    <Link className="logo nav-link" to="/">
                        Bijay
                    </Link>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        className="toggler"
                    />
                    <Navbar.Collapse id="basic-navbar-nav" className="toggler">
                        <Nav className="ms-auto lists">
                            <Link className="nav-link" to="/skills">
                                Skills
                            </Link>
                            <Link className="nav-link" to="/projects">
                                Projects
                            </Link>
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
