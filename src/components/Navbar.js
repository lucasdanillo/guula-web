import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './styles.css';
import { Link, animateScroll as scroll } from "react-scroll";
import {FaBars} from 'react-icons/fa'

export default function NavbarComponent({color}) {
    function scrollToTop(){
        scroll.scrollToTop();
      };
    return (
        <Navbar
            fixed="top" 
            expand="lg"
            style={{
                backgroundColor: color.backgroundColor,
                transition: "0.3s",
            }}
        >
            <Navbar.Brand onClick={scrollToTop} style={{
                        color: "white",
                        transition: "0.3s",
                        fontSize: 30,
                        cursor: "pointer"
            }}>Guula</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{borderColor: "transparent"}}><FaBars size={25} color="white"/></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ width: "100%" }} className="mr-auto justify-content-end">
                    <Nav.Link style={{
                        color: "white",
                        fontSize: 25
                    }}>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Home
                        </Link>
                    </Nav.Link>
                     <Nav.Link style={{
                        color: "white",
                        fontSize: 25
                    }}>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Sobre
                        </Link>
                    </Nav.Link>
                    <Nav.Link style={{
                        color: "white",
                        fontSize: 25
                    }}>
                        <Link
                            activeClass="active"
                            to="author"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Equipe \o/
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
