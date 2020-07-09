import React, { useEffect, useState } from 'react';
import './styles.css';
import NavbarComponent from './components/Navbar';
import { Container, Button, Row } from 'react-bootstrap';
import Author from './components/Author';
import Footer from './components/Footer';


function App() {

  const [navbarColors, setNavbarColors] = useState({
    backgroundColor: 'transparent',
  });

  useEffect(() => {
    document.addEventListener("scroll", () => {
      window.scrollY > 250 ?
        setNavbarColors({
          backgroundColor: "#fea26f",
        })
        :
        setNavbarColors({
          backgroundColor: "transparent",
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
         <Author />
      </div>
      <Footer />
    </>
  );
}

export default App;
