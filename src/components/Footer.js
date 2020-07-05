import React from 'react';
import { Container } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa'

export default function Footer(){
    return(
        <Container fluid
        className="footer"
      >
        <footer style={{
          marginTop: 5,
        }}
        > Made with <FaHeart color="red" size={13} /> by Guula </footer>
      </Container>
    )
}