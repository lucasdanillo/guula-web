import React, { useEffect, useState } from 'react';
import './styles.css';
import NavbarComponent from './components/Navbar';
import { Container, Button, Row, Image } from 'react-bootstrap';
import Author from './components/Author';
import Footer from './components/Footer';
import About from './components/About';
import { Link } from "react-scroll";
import icon from './assets/icon.png';
import download1 from './assets/downloadAppStore.png';
import download2 from './assets/downloadGooglePlay.png';

function App() {

  const [navbarColors, setNavbarColors] = useState({
    backgroundColor: 'transparent',
    color: "#fff",
    shadow: false,
  });

  useEffect(() => {
    document.addEventListener("scroll", () => {
      window.scrollY > 250 ?
        setNavbarColors({
          backgroundColor: "#fff",
          color: "#171717",
          shadow: true,
        })
        :
        setNavbarColors({
          backgroundColor: "transparent",
          color: "#fff",
          shadow: false,
        })
    })
  }, [])
  return (
    <>
      <NavbarComponent color={navbarColors} />

      <div className="header" id="home">

        <Row>
          <Container style={{
            top: "38%",
            left: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}>
            <Image className="icon" src={icon}/>
            <span className="welcome" style={{ color: "white" }}>
              Guula
            </span>
          </Container>
        </Row>

        <Row>
          <Container style={{
            top: "60%",
            left: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}>
            <a href="#">
              <Image className="download" src={download1}/>
            </a>
            <a href="#">
              <Image className="download" src={download2}/>
            </a>
          </Container>
        </Row>

        <Container className="content" style={{
          top: "80%",
          left: 0,
          right: 0,
          textAlign: "center",
          position: "absolute",
          width: "100%",
        }} >

          <Button className="button" size="lg" style={{
            fontSize: 64,
            backgroundColor: "transparent",
            borderColor: "transparent",
          }}
          >
             <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            ⌄
            </Link>
          </Button>
        </Container>

      </div>

      <div className="about" id="about">
        <About />
      </div>

      <div className="author" id="author">
        <Author />
      </div>
      <Footer />
    </>
  );
}

export default App;
