import React, { useEffect, useState } from 'react'
import { Button, Col, Container, InputGroup, Row, Modal, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../api';
import Header from '../../components/Header/Index';
import './home.css';
const Home = () => {
    const [show, setShow] = useState(false);
    const [allChamados, setAllChamados] = useState([]);
    const [chamados, setChamados] = useState({
        nome: "",
        date_init: "",
        inst: ""
    });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDeleteChamado = (id) => {
        api.get(`/chamados/deleteChamado/${id}`).then(() => {
            toast.error("Deletado com sucesso!");
            setTimeout(() => {
                document.location.reload();
            }, 800)
        })
    }

    useEffect(() => {
        function getAllChamados() {
            api.get("/chamados/getAllChamados").then((decoded) => {
                setAllChamados(decoded.data)
            })
        }

        getAllChamados();
    }, [])

    const handleOnSubmit = (e) => {
        e.preventDefault();
        api.post("/chamados/createNewChamado", chamados).then((res) => {
            if (res.data.inserted === true) {
                setShow(false);
                setTimeout(() => {
                    document.location.reload();
                }, 800)
                toast.success("Cadastrado com sucesso!", { theme: 'colored' });
            } else {
                console.log("Error")
            }
        })
    }

    return (
        <div>

            <div className="filter"></div>
            <Header />
            <br />
            <Container fluid="md">
                <Button className='btnModal' onClick={handleShow}>
                    Novo chamado
                </Button>
            </Container>

            <div>
                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton className="modal-cadastrar">
                        <Modal.Title>Novo chamado</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-cadastrar">
                        <Form onSubmit={handleOnSubmit}>
                            <Row>

                                <Col xs={6}>
                                    <label htmlFor="">Nome</label>
                                    <Form.Control type="text" name="nome" value={chamados.nome} onChange={(e) => setChamados({ ...chamados, nome: e.target.value })} />
                                </Col>
                                <Col xs={6}>
                                    <label htmlFor="">Instituição</label>
                                    <Form.Control type="text" name="inst" value={chamados.inst} onChange={(e) => setChamados({ ...chamados, inst: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <label htmlFor="">Data de inicio:</label>
                                    <Form.Control type="date" value={chamados.date_init} onChange={(e) => setChamados({ ...chamados, date_init: e.target.value })} />
                                </Col>
                            </Row>
                            <Modal.Footer className="modal-cadastrar">
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" className="btnModal" type="submit">
                                    Cadastrar
                                </Button>

                            </Modal.Footer>
                        </Form>

                    </Modal.Body>


                </Modal>

                <table className='content-table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Data</th>
                            <th>Instituição</th>
                            <th></th>
                        </tr>
                    </thead>

                    {allChamados.map((decoded, i) => {
                        return (
                            <tr className='content'>
                                <td>{decoded.id_chamado}</td>
                                <td>{decoded.nome}</td>
                                <td>{decoded.date_init}</td>
                                <td>{decoded.inst}</td>
                                <td><Button variant="danger" onClick={() => handleDeleteChamado(decoded.id_chamado)}>Deletar</Button></td>
                            </tr>
                        )
                    })}



                </table>

            </div>
        </div>
    );
}

export default Home;