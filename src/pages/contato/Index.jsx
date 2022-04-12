import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Header from '../../components/Header/Index';
import './contato.css';
const Contato = () => {
    return (
        <div>
            <Header />
            <br />
            <div className="title">
                <h1>Contato Form</h1>
            </div>
            <hr />
            <Container>
                <Row>
                    <Col xs={6}>
                        <label className="label-form">Nome:</label>
                        <Form.Control type="text" />
                    </Col>
                    <Col xs={6}>
                        <label className="label-form">Email:</label>
                        <Form.Control type="email" />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <label htmlFor="" className="label-form">Mensagem:</label>
                        <Form.Control as="textarea" rows={3}/>
                    </Col>
                </Row>
                <br />
                <Button className='btnModal'>Enviar</Button>
            </Container>

        </div>
    );
}

export default Contato;