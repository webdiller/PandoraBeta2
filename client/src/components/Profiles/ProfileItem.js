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
              View Profile
            </Link>
          </div>
          <div>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <h4>Платежные системы</h4>


            <ul className="list-group">
              {!!profile.services &&
                profile.services.map((item, index) => {
                  {
                    item.categories.map((subitem, subindex) => (
                      <span>{subitem}</span>
                    ))
                  }
                }
                )}
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
