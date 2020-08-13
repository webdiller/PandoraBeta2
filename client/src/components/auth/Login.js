import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import classnames from "classnames";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import './Modals.sass';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  }

  render() {
    const { errors } = this.state;

    return (
      <div
        className="modal fade"
        id="modalLogIn"
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

              <p className="modal__title">Авторизация</p>

              <form noValidate onSubmit={this.onSubmit}>

                <div className="modal__group">
                  <input
                    placeholder="Почта"
                    name="email"
                    type="email"
                    error={errors.email}
                    value={this.state.email}
                    onChange={this.onChange}
                    className="modal__input" />
                </div>

                <div className="modal__group">
                  <input
                    placeholder="Пароль"
                    name="password"
                    type="password"
                    error={errors.password}
                    value={this.state.password}
                    onChange={this.onChange}
                    className="modal__input" />
                </div>

                <div className="modal__group">
                  <input
                    className="modal__agree-input" type="checkbox" name="authAgree" id="authAgree" />
                  <label className="modal__agree-label" htmlFor="authAgree">
                    <span className="modal__agree-checkbox"></span>
                    <span className="modal__agree-text">
                      Запомнить меня на этом компьютере
                        </span>
                  </label>
                </div>

                <div className="modal__footer">
                  <button type="submit" className="site-btn site-btn_red site-btn_large">Войти</button>
                  {/* <Link to="/personal" className="site-btn site-btn_red site-btn_large">Войти</Link> */}
                  <span className="modal__help-text">Забыли пароль? <a className="modal__help-link" href="#!">Восстановить</a></span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
