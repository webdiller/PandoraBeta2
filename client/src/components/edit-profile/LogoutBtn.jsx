import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import Register from "../auth/Register";
import Login from "../auth/Login";

class Navbar extends Component {
    onLogoutClick(e) {
        e.preventDefault();
        this.props.clearCurrentProfile();
        this.props.logoutUser();
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <li className="nav-item">
                <a
                    href=""
                    onClick={this.onLogoutClick.bind(this)}
                    className="nav-link"
                >
                    {/* <img
            className="rounded-circle"
            src={user.avatar}
            alt={user.name}
            style={{ width: "25px", marginRight: "5px" }}
            title="You must have a Gravatar connected to your email to display an image"
          />{" "} */}
          Logout
        </a>
            </li>
        );

        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                    <div className="container">

                        <div className="collapse navbar-collapse" id="mobile-nav">

                            {isAuthenticated ? authLinks : null}
                        </div>
                    </div>
                </nav>
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
