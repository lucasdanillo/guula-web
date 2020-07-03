import React, { useEffect, useState } from 'react';
import './styles.css';
import NavbarComponent from './components/Navbar';
import { Container, Button } from 'react-bootstrap';
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
