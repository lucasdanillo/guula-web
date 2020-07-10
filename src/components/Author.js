import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import img1 from '../assets/arthur.jpeg';
import img2 from '../assets/danillo.jpeg';
import img3 from '../assets/gisele.jpg';
import img4 from '../assets/samuel.jpeg';
import { FaInstagram, FaGithub, FaLinkedinIn, } from 'react-icons/fa'

export default function Author() {
    return (
        <Container>

            <Row>
                <Container className="title-container" style={{
                    marginTop: 70,
                    textAlign: "center",
                }}><span>Desenvolvedores</span>
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
                            <span>Arthur Basílio</span>
                        </Container>
                    </Row>
                    <Row>
                        <Container className="icons">
                            <FaGithub className="icon" size={28} color="#ff914d" />
                            <FaInstagram className="icon" size={28} color="#ff914d" />
                            <FaLinkedinIn className="icon" size={28} color="#ff914d" />
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
                            <span>Danillo Barros</span>
                        </Container>
                    </Row>
                    <Row>
                        <Container className="icons">
                            <FaGithub className="icon" size={28} color="#ff914d" />
                            <FaInstagram className="icon" size={28} color="#ff914d" />
                            <FaLinkedinIn className="icon" size={28} color="#ff914d" />
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
                            <span>Gisele Ribeiro</span>
                        </Container>
                    </Row>
                    <Row>
                        <Container className="icons">
                            <FaGithub className="icon" size={28} color="#ff914d" />
                            <FaInstagram className="icon" size={28} color="#ff914d" />
                            <FaLinkedinIn className="icon" size={28} color="#ff914d" />
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
                            <span>Samuel Santos</span>
                        </Container>
                    </Row>
                    <Row>
                        <Container className="icons">
                            <FaGithub className="icon" size={28} color="#ff914d" />
                            <FaInstagram className="icon" size={28} color="#ff914d" />
                            <FaLinkedinIn className="icon" size={28} color="#ff914d" />
                        </Container>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}