import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{profile.handle}</h3>
            <Link to={`/profile/${profile.handle}`} className="btn btn-info">
              Просмотр профиля
            </Link>
            <Link
              to={`/messanger/${profile.handle}`}
              className="btn btn-danger"
            >
              СВЯЗАТЬСЯ
            </Link>
          </div>
          <div></div>
          <div className="col-md-4 d-none d-md-block">
            <h4>Категории</h4>

            <ul className="list-group">
              {profile.services[0] &&
                profile.services[0].categories.map((item, index) => (
                  <li key={index}>
                    <p>{item}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
