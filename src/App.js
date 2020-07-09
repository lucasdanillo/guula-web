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
    color: "white"
  });

  useEffect(() => {
    document.addEventListener("scroll", () => {
      window.scrollY > 250 ?
        setNavbarColors({
          backgroundColor: "#ff914d",
          color: "white"
        })
        :
        setNavbarColors({
          backgroundColor: 'transparent',
          color: "white"
        })
    })
  }, [])
/* Primeira Divisão:
cor laranja: "#fea26f"
  <div className="header" id="home">    
  <Container className="content" style={{
    top: "70%",
    left: 0,
    right: 0,
    textAlign: "center",
    position: "absolute",
    width:"100%",
    
  }} >
   
    <Button className="button" size="lg" style={{
      color: "white",
      backgroundColor: "#ff914d",
      borderColor: "#ff914d",
    }}
      href="#tutorial"
    >Dowload do Guula</Button>
  </Container>
   
</div>
*/
  return (
    <>
    <NavbarComponent color={navbarColors} />

      <div className="header" id="home">

        <Row>
          <Container style={{
            top: "36%",
            left: 0,
            right: 0,
            textAlign: "center",
            position: "absolute",
            width:"100%",
          }}>               
              <span style={{fontSize: 90, color: "white", fontStyle: "italic"}}>
                Seja bem-vindo(a) ao site de instalação do Guula    
              </span>             
          </Container>
        </Row>

        <Container className="content" style={{
          top: "86%",
          left: 0,
          right: 0,
          textAlign: "center",
          position: "absolute",
          width:"100%",
        }} >
          
          <Button className="button" size="lg" style={{
            fontSize: 32,
            backgroundColor: "transparent",
            borderColor: "transparent",
          }}
            href="#about"
          >SAIBA MAIS</Button>
        </Container>
    
      </div>

      <div className="about" id="about">
          <Container  style={{
            height: "100vh",
          }}>
            <Row>
              <Container style={{
                marginTop: 60,
                textAlign: "center",
              }}>               
                <span style={{fontSize: 50,}}>
                  Sobre     
                </span>
                           
              </Container>
              
            </Row>

          </Container>
      </div>
      
      <div className="author" id="author">
          <Container  style={{
            height: "100vh",
          }}>
            <Row>
              <Container style={{
                marginTop: 40,
                textAlign: "center",
              }}><span style={{
                fontSize: 50,
              }}>Desenvolvedores</span>
              </Container>
              <Col style={{
                marginTop: 50,
              }}>
                <Row>
                  <Container className="image">
                <Image style={{width: "80%"}} src={img1} roundedCircle/>
                </Container>
                </Row>
                <Row>
                  <Container className="name-img">
                <span>Arthur Basílio</span>
                </Container>
                </Row>
                <Row>
                  <Container className="icons">
                    <FaGithub  className="icon" size={28} color="#ff914d"/>
                    <FaInstagram  className="icon" size={28} color="#ff914d"/>
                    <FaLinkedinIn className="icon" size={28} color="#ff914d"/>
                  </Container>
                </Row>
              </Col>
              <Col style={{
                marginTop: 50,
              }}>
                <Row>
                  <Container className="image">
                <Image style={{width: "80%"}} src={img2} roundedCircle/>
                </Container>
                </Row>
                <Row>
                  <Container className="name-img">
                <span>Danillo Barros</span>
                </Container>
                </Row>
                <Row>
                  <Container className="icons">
                    <FaGithub  className="icon"size={28} color="#ff914d"/>
                    <FaInstagram  className="icon"size={28} color="#ff914d"/>
                    <FaLinkedinIn className="icon" size={28} color="#ff914d"/>
                  </Container>
                </Row>
              </Col>
              <Col style={{
                marginTop: 50,
              }}>
                <Row>
                  <Container className="image">
                <Image style={{width: "80%"}} src={img3} roundedCircle/>
                </Container>
                </Row>
                <Row>
                  <Container className="name-img">
                <span>Gisele Ribeiro</span>
                </Container>
                </Row>
                <Row>
                  <Container className="icons">
                    <FaGithub  className="icon"size={28} color="#ff914d"/>
                    <FaInstagram  className="icon"size={28} color="#ff914d"/>
                    <FaLinkedinIn className="icon" size={28} color="#ff914d"/>
                  </Container>
                </Row>
              </Col>
              <Col style={{
                marginTop: 50,
              }}>
                <Row>
                  <Container className="image">
                <Image style={{width: "80%"}} src={img4} roundedCircle/>
                </Container>
                </Row>
                <Row>
                  <Container className="name-img">
                <span>Samuel Santos</span>
                </Container>
                </Row>
                <Row>
                  <Container className="icons">
                    <FaGithub  className="icon"size={28} color="#ff914d"/>
                    <FaInstagram  className="icon"size={28} color="#ff914d"/>
                    <FaLinkedinIn className="icon" size={28} color="#ff914d"/>
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
