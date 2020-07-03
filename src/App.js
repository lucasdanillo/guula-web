import React from 'react';
import './styles.css';
import './styles.scss';
import NavbarComponent from './components/Navbar';
import {Container, Button} from 'react-bootstrap';
function App() {
  return (
    <>
    <NavbarComponent/>
      <div className="header" id="home">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <span id="title">Uhuuuuuul</span>
        <Container style={{
            top: "80%",
            left: 0,
            right: 0,
            textAlign: "center",
            position: "absolute",
            
          }} >
          <Button style={{
            color: "white",
            backgroundColor: "orange",
            borderColor: "orange",
          }} 
          href="#tutorial"
          >Como baixar o aplicativo</Button>
        </Container>
      </div>
      <div className="tutorial" id="tutorial">

      </div>
      <div className="about" id="about">

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
