import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
    onLogoutClick(e) {
        e.preventDefault();
        this.props.clearCurrentProfile();
        this.props.logoutUser();
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        
        const authLinks = (
            <button
                type="submit" 
                className="site-btn site-btn_red site-btn_s1 mb-3"
                onClick={this.onLogoutClick.bind(this)}>
                Выйти из аккаунта
            </button>
        );

        return (
            <div>
                {isAuthenticated ? authLinks : null}
            </div>
        );
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
    Navbar
);
