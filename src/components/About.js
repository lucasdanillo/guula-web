import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import app from '../assets/teste.png';
import logo from '../assets/icon.png';

export default function About() {
    return (
        <Container className="about">

            <Row >

            </Row>

            <Row xs={1} md={12}>
                <Col md={7} className="d-flex flex-column justify-content-center align-items-center"
                style={{
                    minHeight: "100vh",
                    //marginRight: 520,
                }}>
                    <Container className="text-container"
                        style={{
                            color: "white",
                            fontFamily: "Open Sans",
                            fontWeight: "200",
                            fontStyle: "normal",
                        }}>
                        <div className="title-container" style={{
                            marginBottom: 15,
                        }}>
                            <span style={{
                                color: "white",
                                fontFamily: "Open Sans",
                                fontWeight: "100",
                                fontStyle: "normal",
                            }}>Sobre o Guula</span>

                            <hr style={{
                                backgroundColor: "white",
                                marginTop: "0",
                                width: "70%",
                                height: "0.5px",
                            }} />
                        </div>
                        <p>Guula é um aplicativo desenvolvido com o propósito de sugerir receitas maravilhosas de
                             acordo com os ingredientes que o usuário possui. Com mais de  <b>5 mil receitas</b>, o aplicativo
                             fornece opções para todos os gostos. Além de informações básicas como lista de ingredientes e
                             modo de preparo, cada receita é acompanhada de uma foto e grau de dificuldade.
                             </p>
                    </Container>

                </Col>
                <Col md={5} className="d-flex flex-column justify-content-center align-items-center" 
                style={{
                    minHeight: "100vh",
                }}>
                    <Container style={{
                        display: "flex",
                        justifyContent: "center",
                    }} className="image-container">
                        <Image className="d-none d-lg-block" id="app-image" src={app} />
                    </Container>
                </Col>


            </Row>
        </Container>
    )
}