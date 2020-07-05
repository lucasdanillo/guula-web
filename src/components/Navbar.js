import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './styles.css';
import {FaBars} from 'react-icons/fa'

export default function NavbarComponent(props) {
    return (
        <Navbar
            fixed="top" 
            expand="lg"
            style={{
                backgroundColor: props.color.backgroundColor,
                transition: "0.3s",
            }}
        >
            <Navbar.Brand href="#home" style={{
                        color: "white",
                        transition: "0.3s",
                        fontSize: 30
            }}>Guula</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{borderColor: "transparent"}}><FaBars size={25} color="white"/></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ width: "100%" }} className="mr-auto justify-content-end">
                    <Nav.Link style={{
                        color: (window.location.href === 'http://localhost:3000/#home') ? "orange" : "white",
                        fontSize: 25
                    }} href="#home">Home</Nav.Link>
                     <Nav.Link style={{
                        color: (window.location.href === 'http://localhost:3000/#about') ? "orange" : "white",
                        fontSize: 25
                    }} href="#about">Sobre</Nav.Link>
                    <Nav.Link style={{
                        color: (window.location.href === 'http://localhost:3000/#author') ? "orange" : "white",
                        fontSize: 25
                    }} href="#author">Autores</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
