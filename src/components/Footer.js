import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer(){
    return(
        <Container fluid
        className="footer"
      >
        <footer style={{
          marginTop: 5,
        }}
        > Copyright &copy; 2020 Guula</footer>
      </Container>
    )
}