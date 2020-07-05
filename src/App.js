import React, { useEffect, useState } from 'react';
import './styles.css';
import NavbarComponent from './components/Navbar';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import img1 from './assets/arthur.jpeg';
import img2 from './assets/danillo.jpeg';
import img3 from './assets/gisele.jpg';
import img4 from './assets/samuel.jpeg';
import { FaInstagram, FaGithub, FaLinkedinIn, FaHeart } from 'react-icons/fa'


function App() {

  const [navbarColors, setNavbarColors] = useState({
    backgroundColor: 'transparent',
    color: "#616161"
  });

  useEffect(() => {
    document.addEventListener("scroll", () => {
      window.scrollY > 150 ?
        setNavbarColors({
          backgroundColor: "#ff914d",
          color: "white"
        })
        :
        setNavbarColors({
          backgroundColor: "white",
          color: "#616161"
        })
    })
  }, [])

  return (
    <>
      <NavbarComponent color={navbarColors} />
      <div className="header" id="home">
        {/**
        <Container style={{
          top: "70%",
          left: 0,
          right: 0,
          textAlign: "center",
          position: "absolute",

        }} >
          <Button size="lg" style={{
            color: "white",
            backgroundColor: "orange",
            borderColor: "orange",
          }}
            href="#tutorial"
          >Como baixar o aplicativo</Button>
        </Container>
         */}
      </div>

      <div className="about" id="about">

      </div>
      <div className="author" id="author">
          <Container>
            
              <Row>
              <Container style={{
                marginTop: 100,
                textAlign: "center",
              }}><span style={{
                fontSize: 50,
              }}>Autores</span>
              </Container>
              </Row>
            <Row xs={1} md={4}>
              <Col style={{
                marginTop: 50,
              }}>
                <Row>
                  <Container className="image-container">
                <Image className="image" src={img1} roundedCircle/>
                </Container>
                </Row>
                <Row>
                  <Container className="name-img">
                <span>Arthur Basílio</span>
                </Container>
                </Row>
                <Row>
                  <Container className="icons">
                    <FaGithub size={23} color="#ff914d"/>
                    <FaInstagram size={23} color="#ff914d"/>
                    <FaLinkedinIn size={23} color="#ff914d"/>
                  </Container>
                </Row>
              </Col>
              <Col style={{
                marginTop: 50,
              }}>
                <Row>
                  <Container className="image-container">
                <Image className="image" src={img2} roundedCircle/>
                </Container>
                </Row>
                <Row>
                  <Container className="name-img">
                <span>Danillo Barros</span>
                </Container>
                </Row>
                <Row>
                  <Container className="icons">
                    <FaGithub size={23} color="#ff914d"/>
                    <FaInstagram size={23} color="#ff914d"/>
                    <FaLinkedinIn size={23} color="#ff914d"/>
                  </Container>
                </Row>
              </Col>
              <Col style={{
                marginTop: 50,
              }}>
                <Row>
                  <Container className="image-container">
                <Image className="image" src={img3} roundedCircle/>
                </Container>
                </Row>
                <Row>
                  <Container className="name-img">
                <span>Gisele Ribeiro</span>
                </Container>
                </Row>
                <Row>
                  <Container className="icons">
                    <FaGithub size={23} color="#ff914d"/>
                    <FaInstagram size={23} color="#ff914d"/>
                    <FaLinkedinIn size={23} color="#ff914d"/>
                  </Container>
                </Row>
              </Col>
              <Col style={{
                marginTop: 50,
              }}>
                <Row>
                  <Container className="image-container">
                <Image className="image" src={img4} roundedCircle/>
                </Container>
                </Row>
                <Row>
                  <Container className="name-img">
                <span>Samuel Santos</span>
                </Container>
                </Row>
                <Row>
                  <Container className="icons">
                    <FaGithub size={23} color="#ff914d"/>
                    <FaInstagram size={23} color="#ff914d"/>
                    <FaLinkedinIn size={23} color="#ff914d"/>
                  </Container>
                </Row>
              </Col>
            </Row>
          </Container>
      </div>
      <Container fluid
        className="footer"
      >
        <footer style={{
          marginTop: 5,
        }}
        > Made with <FaHeart color="red" size={13} /> by Guula </footer>
      </Container>
    </>
  );
}

export default App;
