import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registeruser } from "../../actions/authActions";

class HeaderProfile extends Component {

    constructor() {
        super();
        this.state = {
            showRegistration: false,
            handleCloseRegistration: false,
            handleShowRegistration: true,

            showAuth: false,
            handleCloseAuth: false,
            handleShowAuth: true,

            showForgot: false,
            handleCloseForgot: false,
            handleShowForgot: true,

            email: "",
            errors: {},
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmitRegistration = this.onSubmitRegistration.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitRegistration(e) {
        e.preventDefault();

        const newUser = {
            email: this.state.email,
        };

        this.props.registeruser(newUser, this.props.history);
    }

    // const[showRegistration, setShowRegistration] = React.useState(false);
    // const handleCloseRegistration = () => setShowRegistration(false);
    // const handleShowRegistration = () => setShowRegistration(true);

    // const[showAuth, setShowAuth] = React.useState(false);
    // const handleCloseAuth = () => setShowAuth(false);
    // const handleShowAuth = () => setShowAuth(true);

    // const[showForgot, setShowForgot] = React.useState(false);
    // const handleCloseForgot = () => setShowForgot(false);
    // const handleShowForgot = () => setShowForgot(true);


    render() {

        return (
            <React.Fragment>

                <Button variant="primary"
                    // onClick={handleShowRegistration}
                    className="header__bar-icon">
                    <i className="header__bar-icon-inner far fa-user"></i>
                </Button>

                {/* Регистрация */}
                <Modal
                    // show={true}
                    // onHide={handleCloseRegistration}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Регистрация</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form noValidate onSubmit={this.onSubmitRegistration} className="d-flex flex-column">
                            <Form.Group controlId="registration">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    type="email"
                                    placeholder="Enter email" />
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
                        <Button variant="secondary"
                        // onClick={() => {
                        // handleCloseRegistration();
                        // handleShowForgot();
                        // }}
                        >
                            Забыли пароль?
                            </Button>

                        <Button variant="secondary"
                        //  onClick={
                        // handleCloseRegistration
                        // }
                        >
                            Close
                            </Button>

                        <Button
                            // onClick={() => {
                            //     handleCloseRegistration()
                            //     handleShowAuth()
                            // }}
                            variant="primary">Уже есть аккаунт?</Button>
                    </Modal.Footer>
                </Modal>

                {/* Забыли пароль? */}
                {/* <Modal
                    show={showForgot}
                    onHide={handleCloseForgot}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Забыли пароль?</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form className="d-flex flex-column">

                            <Form.Group controlId="forgot">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="forgot_email" type="email" placeholder="Enter email" />
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
                </Modal> */}

                {/* Авторизация */}
                {/* <Modal
                    show={showAuth}
                    onHide={handleCloseAuth}
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
                        <Button variant="secondary" onClick={handleCloseAuth}>
                            Close
                            </Button>

                        <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal> */}

            </React.Fragment >
        )
    }


}


HeaderProfile.propTypes = {
    registeruser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(mapStateToProps, { registeruser })(withRouter(HeaderProfile));