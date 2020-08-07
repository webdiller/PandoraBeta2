import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';

function HeaderProfile() {

    const [formData, setFormData] = React.useState({
        registration_email: '',
        auth_email: '',
        auth_password: '',
        forgot_email: ''
    });

    const [errors, setErrors] = React.useState({
        status: false,
        message: ''
    });

    const onChange = e => { setFormData({ ...formData, [e.target.name]: e.target.value }) }

    const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
    }

    const [showRegistration, setShowRegistration] = React.useState(false);
    const handleCloseRegistration = () => setShowRegistration(false);
    const handleShowRegistration = () => setShowRegistration(true);

    const [showAuth, setShowAuth] = React.useState(false);
    const handleCloseAuth = () => setShowAuth(false);
    const handleShowAuth = () => setShowAuth(true);

    const [showForgot, setShowForgot] = React.useState(false);
    const handleCloseForgot = () => setShowForgot(false);
    const handleShowForgot = () => setShowForgot(true);

    const registrationHandle = (e, url = "http://localhost:5000/api/users/register") => {
        e.preventDefault();
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: formData.registration_email,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }

    const authHandle = (e, url = "http://localhost:5000/api/users/login") => {
        e.preventDefault();
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: formData.auth_email,
                password: formData.auth_password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(data => data.json())
            .then(data => console.log(data))
    }

    if (1) {
        return (
            <React.Fragment>
                <Button variant="primary" onClick={handleShowRegistration} className="header__bar-icon">
                    <i className="header__bar-icon-inner far fa-user"></i>
                </Button>

                {/* Регистрация */}
                <Modal
                    show={showRegistration}
                    onHide={handleCloseRegistration}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Регистрация</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={e => registrationHandle(e)} className="d-flex flex-column">
                            <Form.Group controlId="registration">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={e => { onChange(e) }} name="registration_email" type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Button className="ml-auto" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {
                            handleCloseRegistration();
                            handleShowForgot();
                        }}>
                            Забыли пароль?
                        </Button>

                        <Button variant="secondary" onClick={handleCloseRegistration}>
                            Close
                        </Button>

                        <Button onClick={() => {
                            handleCloseRegistration()
                            handleShowAuth()
                        }} variant="primary">Уже есть аккаунт?</Button>
                    </Modal.Footer>
                </Modal>


                {/* Забыли пароль? */}
                <Modal
                    show={showForgot}
                    onHide={handleCloseForgot}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Забыли пароль?</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={e => onSubmit(e)} className="d-flex flex-column">

                            <Form.Group controlId="forgot">
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={e => { onChange(e) }} name="forgot_email" type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    Введите вашу почту
                                </Form.Text>
                            </Form.Group>

                            <Button className="ml-auto" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseForgot}>
                            Close
                        </Button>

                        <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal>

                {/* Авторизация */}
                <Modal
                    show={showAuth}
                    onHide={handleCloseAuth}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Авторизация</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={e => authHandle(e)} className="d-flex flex-column">

                            <Form.Group controlId="auth">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={e => { onChange(e) }} name="auth_email" type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={e => { onChange(e) }} name="auth_password" type="password" placeholder="Password" />
                            </Form.Group>

                            <Button className="ml-auto" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseAuth}>
                            Close
                        </Button>

                        <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment >
        )


    } else {
        return (
            <Link to="/profile" className="header__bar-icon">
                <i className="header__bar-icon-inner far fa-user"></i>
            </Link>
        )
    }
}

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = () => {
    return {};
}

export default HeaderProfile;