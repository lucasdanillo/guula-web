import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavbarComponent() {
    return (
        <Navbar fixed="top" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ width: "100%" }} className="mr-auto justify-content-end">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#tutorial">Tutorial</Nav.Link>
                    <Nav.Link href="#about">Sobre</Nav.Link>
                    <Nav.Link href="#author">Autores</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}