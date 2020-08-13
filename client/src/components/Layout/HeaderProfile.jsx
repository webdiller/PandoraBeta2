import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registeruser } from "../../actions/authActions";
import Register from '../auth/Register';
import Login from '../auth/Login';

class HeaderProfile extends Component {

    constructor() {
        super();
        this.state = {
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

    render() {
        return (
            <React.Fragment>
                <div
                    data-toggle="modal"
                    data-target="#modalRegistration"
                    data-whatever="@mdo" to="/dashboard" className="header__bar-icon">
                    <i className="header__bar-icon-inner far fa-user"></i>

                </div>
                <Register />
                <Login />
            </React.Fragment>
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