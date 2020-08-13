import React from 'react';

const Forgot = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Modal
            show={show}
            onHide={handleClose}
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
                        <Form.Control name="auth_email" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="auth_password" type="password" placeholder="Password" />
                    </Form.Group>

                    <Button className="ml-auto" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                            </Button>

                <Button variant="primary">Understood</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Forgot;