import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import app from '../assets/teste.png';
import logo from '../assets/icon.png';

export default function About() {
    return (
        <Container className="about">

            <Row >
                <Container className="title-container" style={{
                    marginTop: 10,
                    textAlign: "center",
                }}>
                <span style={{
                    color:"white",
                    fontFamily: "Open Sans",
                    fontWeight: "100",
                    fontStyle: "normal",
                }}>Sobre</span>
                
                <hr style={{
                    backgroundColor: "white",
                    margin: "0 auto",
                    width: 65,
                    height:"1px",
                }}/>
                </Container>
            </Row>

            <Row xs={1} md={12}>
                <Col md={7} style={{
                    marginTop: 50,
                    //marginRight: 520,
                }}>
                        <Container className="text-container"  
                            style={{
                                color:"white",
                                fontSize:25,
                                fontFamily: "Open Sans",
                                fontWeight: "200",
                                fontStyle: "normal", 
                                }}>
                            <p>Guula é um aplicativo desenvolvido com o propósito de sugerir receitas maravilhosas de
                             acordo com os ingredientes que o usuário possui. Com mais de  <b>5 mil receitas</b>, o aplicativo 
                             fornece opções para todos os gostos. Além de informações básicas como lista de ingredientes e 
                             modo de preparo, cada receita é acompanhada de uma foto e grau de dificuldade.
                             </p>
                        </Container>
                    
                </Col>
                <Col md={5} style={{
                    marginTop: 20,
                }}>
                        <Container style={{
                            display: "flex",
                            justifyContent: "center",
                        }} className="image-container">
                            <Image className="d-none d-lg-block" id="app-image" src={app}  />
                        </Container>
                </Col>

               
            </Row>
        </Container>
    )
}