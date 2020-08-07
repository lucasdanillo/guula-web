import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import './styles.css';

function PrivacyPolicy() {
  return (
    <Container fluid style={{
        width: "100%",
        backgroundColor: "rgb(0,0,0,3%)",
        margin: 0, 
        position: "absolute",
        display: "flex",
        justifyContent: "center"
    }} >
        <Col md={8} xs={12} classname="content-container" style={{
            boxShadow: "0px 0px 4px 1px rgba(0,0,0,.2)",
            marginTop: "30px",
            marginBottom: "30px",
            minHeight: "100vh",
            color: "rgb(0,0,0,55%)",
        }}>
        <Row style={{
            justifyContent: "center",
        }}>
            <Col md={10} xs={10} style={{
                padding: "50px 0px",
            }}>
                <h3>Política de privacidade - Guula</h3>
                <p>
                    4Devs desenvolveu o aplicativo Guula.
                </p>
                <strong>
                Acreditamos que você sempre deve saber quais dados coletamos de você e como os usamos, e que você deve ter um controle significativo sobre isso. Queremos capacitá-lo para tomar as melhores decisões sobre as informações que você compartilha conosco.
                </strong>
                <strong>
                Esse é o objetivo desta Política de Privacidade.
                </strong>
                <p>
                    Este SERVIÇO é fornecido pela 4Devs, sem custo e é destinado para uso como está.
                </p>
                <p>
                Se você optar por usar o nossos Serviços, concordará com a coleta e uso de informações relacionadas a essa política. As informações pessoais coletadas por nós são usadas para fornecer e melhorar o serviço, e não usaremos e nem compartilharemos suas informações com ninguém, exceto conforme descrito nesta Política de Privacidade.
                </p>
                <h5>Coleta e Uso de Informações</h5>
                <p>
                Para uma melhor experiência, ao usar nosso Serviço, nós podemos exigir que você nos forneça algumas informações pessoalmente identificáveis como seu E-mail, Senha e Nome Completo. As informações coletadas pelo aplicativo são de propriedade exclusiva da 4Devs, não sendo compartilhadas com nenhuma outra instituição, exceto para cumprimento de exigência legal, regulamentação ou ordem judicial.
                </p>
                <h5>Segurança</h5>
                <p>
                As informações coletadas pelo aplicativo são sigilosas e sujeitas a medidas de segurança e confidencialidade adequadas para impedir o acesso ou divulgação não autorizados, bem como alteração ou destruição dos dados indevidamente.
                </p>
                <h5>Links para outros apps</h5>
                <p>
                Este Serviço contém link para outro aplicativo. Se você clicar nesse link e/ou acessar o conteúdo desse aplicativo, você será direcionado para esse aplivativo e/ou estará sujeito às políticas de privacidade do mesmo. Esse aplivativo externo não é operados por nós. Portanto, aconselhamos fortemente que você revise a Política de Privacidade dele, pois não temos controle e não assumimos nenhuma responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.
                </p>
                <h5>Contate-Nos</h5>
                <p>Através do e-mail <span style={{
                    color: "orange"
                }}>guula_contato@gmail.com</span></p>
                <p>Se você tiver dúvidas ou sugestões sobre a nossa Política de Privacidade, não hesite em entrar em contato.</p>
            </Col>
            </Row>
        </Col>
    </Container>

  );
}

export default PrivacyPolicy;