import React, { useEffect, useState } from 'react';
import './styles.css';
import NavbarComponent from './components/Navbar';
import { Container, Button, Row } from 'react-bootstrap';
import Author from './components/Author';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';

function App() {

  const [navbarColors, setNavbarColors] = useState({
    backgroundColor: 'transparent',
  });

  useEffect(() => {
    document.addEventListener("scroll", () => {
      window.scrollY > 150 ?
        setNavbarColors({
          backgroundColor: "#fea26f",
        })
        :
        setNavbarColors({
          backgroundColor: "transparent",
        })
    })
  }, [])

  return (
    <>
    <NavbarComponent color={navbarColors} />

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

      <div className="about" id="about">
          <Container  style={{
            height: "100vh",
          }}>
            <Row>
              <Container style={{
                marginTop: 40,
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
         <Author />
      </div>
      <Footer />
    </>
  );
}

export default App;
