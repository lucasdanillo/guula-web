import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import img1 from '../assets/arthur.jpeg';
import img2 from '../assets/danillo.jpeg';
import img3 from '../assets/gisele.jpg';
import img4 from '../assets/samuel.jpeg';
import { FaInstagram, FaGithub, FaLinkedinIn, } from 'react-icons/fa';

export default function Author() {
    return (
        <Container>

            <Row>
                <Container className="title-container" style={{
                    marginTop: 40,
                    marginBottom:30,
                    textAlign: "center",
                }}><span style={{
                    fontFamily: "Open Sans",
                    fontWeight: "100",
                    fontStyle: "normal",
                }}>Desenvolvedores</span>
                
                <hr style={{
                    backgroundColor: "#ff914d",
                    margin: "0 auto",
                    width: 80,
                    height:"1px",
                }}/>
                </Container>
            </Row>
            <Row xs={1} md={4}>
                <Col style={{
                    marginTop: 50,
                }}>
                    <Row>
                        <Container className="image-container">
                            <Image className="image" src={img1} roundedCircle />
                        </Container>
                    </Row>
                    <Row>
                        <Container className="name-img">
                            <span style={{
                    fontFamily: "Open Sans",
                    fontWeight: "100",
                    fontStyle: "normal",
                }}>Arthur Basílio</span>
                        </Container>
                    </Row>
                    <Row>
                        <Container className="icons">
                            <a href="https://github.com/basilioarth"  target="_blank" rel="noopener noreferrer">
                                <FaGithub className="icon" size={28} color="#171717" />
                            </a>

                            <a href="https://www.instagram.com/basilioarth/"  target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="icon" size={28} color="#171717" />
                            </a>

                            <a href="#"  target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className="icon" size={28} color="#171717" />
                            </a>
                        </Container>
                    </Row>
                </Col>
                <Col style={{
                    marginTop: 50,
                }}>
                    <Row>
                        <Container className="image-container">
                            <Image className="image" src={img2} roundedCircle />
                        </Container>
                    </Row>
                    <Row>
                        <Container className="name-img">
                            <span style={{
                    fontFamily: "Open Sans",
                    fontWeight: "100",
                    fontStyle: "normal",
                }}>Danillo Barros</span>
                        </Container>
                    </Row>
                    <Row>
                        <Container className="icons">
                            <a href="https://github.com/lucasdanillo"  target="_blank" rel="noopener noreferrer">
                                <FaGithub className="icon" size={28} color="#171717" />
                            </a>

                            <a href="https://www.instagram.com/lucasdanillo_/"  target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="icon" size={28} color="#171717" />
                            </a>
                            
                            <a href="#"  target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className="icon" size={28} color="#171717" />
                            </a>
                        </Container>
                    </Row>
                </Col>
                <Col style={{
                    marginTop: 50,
                }}>
                    <Row>
                        <Container className="image-container">
                            <Image className="image" src={img3} roundedCircle />
                        </Container>
                    </Row>
                    <Row>
                        <Container className="name-img">
                            <span style={{
                    fontFamily: "Open Sans",
                    fontWeight: "100",
                    fontStyle: "normal",
                }}>Gisele Ribeiro</span>
                        </Container>
                    </Row>
                    <Row>
                        <Container className="icons">
                            <a href="https://github.com/giselesousar"  target="_blank" rel="noopener noreferrer">
                                <FaGithub className="icon" size={28} color="#171717" />
                            </a>

                            <a href="https://www.instagram.com/xlribeiro_/"  target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="icon" size={28} color="#171717" />
                            </a>
                            
                            <a href="#"  target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className="icon" size={28} color="#171717" />
                            </a>
                        </Container>
                    </Row>
                </Col>
                <Col style={{
                    marginTop: 50,
                }}>
                    <Row>
                        <Container className="image-container">
                            <Image className="image" src={img4} roundedCircle />
                        </Container>
                    </Row>
                    <Row>
                        <Container className="name-img">
                            <span style={{
                    fontFamily: "Open Sans",
                    fontWeight: "100",
                    fontStyle: "normal",
                }}>Samuel Santos</span>
                        </Container>
                    </Row>
                    <Row>
                        <Container className="icons">
                            <a href="https://github.com/SamuelSSan28"  target="_blank" rel="noopener noreferrer">
                                <FaGithub className="icon" size={28} color="#171717" />
                            </a>

                            <a href="https://www.instagram.com/samuelssan28/"  target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="icon" size={28} color="#171717" />
                            </a>

                            <a href="https://www.linkedin.com/in/samuel-santos-5217831aa/"  target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className="icon" size={28} color="#171717" />
                            </a>
                        </Container>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}