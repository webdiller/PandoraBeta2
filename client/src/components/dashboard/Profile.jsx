import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import ProfileActions from "./ProfileActions";
import Service from "./Service";
import AddService from "../add-credentials/AddService";
import './Profile.sass';
import Aside from "../aside/Aside";
import AddService2 from "../add-credentials/AddService2";

// import Experience from './Experience';
// import Education from './Education';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>

            <div className='profile__status'>

              <div className="profile__status-item">
                <p className="profile__status-title">Личные сообщения:</p>
                <div className="profile__status-info">
                  <div className="profile__status-row">
                    <span className="profile__status-name">Новых</span>
                    <span className="profile__status-value">5</span>
                  </div>
                  <div className="profile__status-row">
                    <span className="profile__status-name">Всего</span>
                    <span className="profile__status-value">41</span>
                  </div>
                </div>
              </div>

              <div className="profile__status-item">
                <p className="profile__status-title">Сделки ожидающие завершения:</p>
                <div className="profile__status-info">
                  <button className="profile__status-row">
                    <span className="profile__status-name">Вы исполнитель</span>
                    <span className="profile__status-value">1</span>
                  </button>
                  <button className="profile__status-row">
                    <span className="profile__status-name">Вы заказчик</span>
                    <span className="profile__status-value">2</span>
                  </button>
                </div>
              </div>

              <div className="profile__status-item">
                <p className="profile__status-title">Ваш депозит:</p>
                <div className="profile__status-info">
                  <p className="profile__status-deposit">120000 руб</p>
                </div>
              </div>

              <div className="profile__status-item">
                <p className="profile__status-title">Ваш последний вход:</p>
                <div className="profile__status-info">
                  <p className="profile__status-date">17 марта 2021 года</p>
                </div>
              </div>

            </div>


            {/* <Experience experience={profile.experience} />
            <Education education={profile.education} /> */}
            <button
              className="fas fa-power-off btn btn-primary"
              type="button"
              data-toggle="modal"
              data-target="#exampleModal2"
              data-whatever="@mdo"
            ></button>
            <AddService />
            <AddService2 />

            <div className="profile__username">
              <p className="profile__username-title">Имя пользователя</p>
              <div className="profile__username-group">
                <input readOnly defaultValue={profile.handle} type="text" className="profile__username-input" />
                <span className="profile__username-description">видно всем</span>
              </div>
            </div>

            <Service services={profile.services} />
            <div style={{ marginBottom: "60px" }} />
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-danger"
            >
              Удалить мой аккаунт
            </button>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Добро пожаловать {user.name}</p>
            <p>
              Пожалуйста заполните необходимую информацию для дальнейшей работы
              с сервисом
            </p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Заполнить
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="profile">
        <div className="profile__container">

          <Aside />
          <div className="profile__content">
            {dashboardContent}
          </div>

        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
