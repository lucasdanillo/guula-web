import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavbarComponent(props) {
    return (
        <Navbar
            fixed="top" 
            expand="lg"
            style={{
                backgroundColor: props.color.backgroundColor,
            }}
        >
            <Navbar.Brand href="#home" style={{
                        color: props.color.color,
                        fontSize: 30
            }}>Guula</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ width: "100%" }} className="mr-auto justify-content-end">
                    <Nav.Link style={{
                        color: props.color.color,
                        fontSize: 25
                    }} href="#home">Home</Nav.Link>
                     <Nav.Link style={{
                        color: props.color.color,
                        fontSize: 25
                    }} href="#about">Sobre</Nav.Link>
                    <Nav.Link style={{
                        color: props.color.color,
                        fontSize: 25
                    }} href="#tutorial">Tutorial</Nav.Link>
                    <Nav.Link style={{
                        color: props.color.color,
                        fontSize: 25
                    }} href="#author">Autores</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}