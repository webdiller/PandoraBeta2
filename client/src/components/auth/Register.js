import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registeruser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import Login from "./Login";
import './Modals.sass';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
    };

    this.props.registeruser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div
        className="modal fade"
        id="modalRegistration"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal modal-content">
            <div className="modal__wrapper text-left">

              <button data-dismiss="modal"
                aria-label="Close" type="button" className="modal__close">
                <i className="fas fa-times"></i>
              </button>

              <p className="modal__title">Регистрация</p>

              <form noValidate onSubmit={this.onSubmit}>

                <div className="modal__group">
                  <input
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    autoComplete="email"
                    placeholder='Введите email'
                    className="modal__input" />
                </div>

                <div className="modal__group">
                  <input
                    defaultChecked="checked"
                    className="modal__agree-input"
                    type="checkbox"
                    name="register_agree"
                    id="register_agree"
                  />

                  <label className="modal__agree-label" htmlFor="register_agree">
                    <span className="modal__agree-checkbox"></span>
                    <span className="modal__agree-text">
                      Нажимая 'Зарегистрироваться', вы подтверждаете, что ознакомлены и полностью согласны
                      с
                      <a className="modal__agree-link" href="#!">условиями пользования сайта</a>
                    </span>
                  </label>
                </div>
                
                <div className="modal__footer">
                  <button type="submit" className="site-btn site-btn_red site-btn_large">Зарегистрироваться</button>
                  <span className="modal__help-text">Уже есть аккаунт?
                      <button 
                      data-dismiss="modal"
                      data-toggle="modal"
                      data-target="#modalLogIn"
                      data-whatever="@mdo" type="button" className="modal__help-link">Войти</button>
                  </span>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registeruser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registeruser })(withRouter(Register));
