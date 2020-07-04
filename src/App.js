import React, { useEffect, useState } from 'react';
import './styles.css';
import NavbarComponent from './components/Navbar';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import img1 from './assets/arthur.jpeg';
import img2 from './assets/danillo.jpeg';
import img3 from './assets/gisele.jpg';
import img4 from './assets/samuel.jpeg';
import { FiInstagram, FiGithub, FiMail } from 'react-icons/fi'


function App() {

  const [navbarColors, setNavbarColors] = useState({
    backgroundColor: 'transparent',
    color: "#616161"
  });

  useEffect(() => {
    document.addEventListener("scroll", () => {
      window.scrollY > 150 ?
        setNavbarColors({
          backgroundColor: "orange",
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
      </div>

      <div className="about" id="about">

      </div>
      <div className="tutorial" id="tutorial">
      
      </div>
      <div className="author" id="author">
          <Container  style={{
            height: "100vh",
          }}>
            <Row>
              <Container style={{
                marginTop: 100,
                textAlign: "center",
              }}><span style={{
                fontSize: 50,
              }}>Autores</span>
              </Container>
              <Col style={{
                marginTop: 50,
              }}>
                <Row>
                  <Container style={{
                  textAlign: "center"
                }}>
                <Image style={{width: "80%"}} src={img1} roundedCircle/>
                </Container>
                </Row>
                <Row>
                  <Container style={{
                  textAlign: "center",
                  marginTop: 20,
                }}>
                <span>Arthur Basílio</span>
                </Container>
                </Row>
                <Row>
                  <Container style={{
                    textAlign: "center",
                  }}>
                    <FiGithub size={16} color="orange"/>
                    <FiInstagram size={16} color="orange"/>
                    <FiMail size={16} color="orange"/>
                  </Container>
                </Row>
              </Col>
              <Col style={{
                marginTop: 50,
              }}>
                <Row>
                  <Container style={{
                  textAlign: "center"
                }}>
                <Image style={{width: "80%"}} src={img2} roundedCircle/>
                </Container>
                </Row>
                <Row>
                  <Container style={{
                  textAlign: "center",
                  marginTop: 20,
                }}>
                <span>Danillo Barros</span>
                </Container>
                </Row>
                <Row>
                  <Container style={{
                    textAlign: "center",
                  }}>
                    <FiGithub size={16} color="orange"/>
                    <FiInstagram size={16} color="orange"/>
                    <FiMail size={16} color="orange"/>
                  </Container>
                </Row>
              </Col>
              <Col style={{
                marginTop: 50,
              }}>
                <Row>
                  <Container style={{
                  textAlign: "center"
                }}>
                <Image style={{width: "80%"}} src={img3} roundedCircle/>
                </Container>
                </Row>
                <Row>
                  <Container style={{
                  textAlign: "center",
                  marginTop: 20,
                }}>
                <span>Gisele Ribeiro</span>
                </Container>
                </Row>
                <Row>
                  <Container style={{
                    textAlign: "center",
                  }}>
                    <FiGithub size={16} color="orange"/>
                    <FiInstagram size={16} color="orange"/>
                    <FiMail size={16} color="orange"/>
                  </Container>
                </Row>
              </Col>
              <Col style={{
                marginTop: 50,
              }}>
                <Row>
                  <Container style={{
                  textAlign: "center"
                }}>
                <Image style={{width: "80%"}} src={img4} roundedCircle/>
                </Container>
                </Row>
                <Row>
                  <Container style={{
                  textAlign: "center",
                  marginTop: 20,
                }}>
                <span>Samuel Santos</span>
                </Container>
                </Row>
                <Row>
                  <Container style={{
                    textAlign: "center",
                  }}>
                    <FiGithub size={16} color="orange"/>
                    <FiInstagram size={16} color="orange"/>
                    <FiMail size={16} color="orange"/>
                  </Container>
                </Row>
              </Col>
            </Row>
          </Container>
      </div>
      <Container
        className="footer"
        style={{
          textAlign: "center",
          height: 30
        }}
      >
        <footer
        > &copy; 2020 Guula</footer>
      </Container>
    </>
  );
}

export default App;
