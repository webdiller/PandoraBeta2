import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'socket.io-client';
import { loginUser } from "../../actions/authActions";

const MAuth = () => {

   

    return (
        <Modal
            show={true}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Авторизация</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form className="d-flex flex-column">

                    <Form.Group controlId="auth">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            // value={formData.email}
                            // onChange={onChange}
                            placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            // value={formData.}
                            // onChange={onChange}
                            type="password"
                            placeholder="Password" />
                    </Form.Group>

                    <Button className="ml-auto" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">
                    Close
                </Button>

                <Button variant="primary">Understood</Button>
            </Modal.Footer>
        </Modal>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(MAuth);