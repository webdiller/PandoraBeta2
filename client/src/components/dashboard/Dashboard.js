import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import ProfileActions from "./ProfileActions";
import Service from "./Service";
import AddService from "../add-credentials/AddService";
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
            <p className="lead text-muted">
              Добро пожаловать{" "}
              <Link to={`/profile/${profile.handle}`}>{profile.handle}</Link>
            </p>
            <ProfileActions />
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
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Личный кабинет</h1>
              {dashboardContent}
            </div>
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
