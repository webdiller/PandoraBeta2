import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profileActions";
import './Results.sass'
import AdvancedSearch from "../AdvancedSearch/AdvancedSearch";

class ProfilesNew extends Component {

  constructor(props) {
    super(props);
    this.state = { newUsers: [] };
  }

  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        console.log(profiles);
        profileItems = profiles.map((profile) => (
          <ProfileItem key={profile._id} profile={profile} />
        ));
      } else {
        profileItems = <h4>No profiles found...</h4>;
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <AdvancedSearch />

              <div className="results__top">
                <p className="results__title">Найдено 2 исполнителя:</p>
                <p className="results__value">проверка репутации застройщика</p>
              </div>

              <div className="results__table-wrapper">
                <div className="results__table">
                  <div className="results__header">
                    <div className="results__col results__col_header">Исполнитель</div>
                    <div className="results__col results__col_header">Регион</div>
                    <div className="results__col results__col_header results__col_center">
                      <button className="results__col-rating-btn">Рейтинг</button>
                    </div>
                    <div className="results__col results__col_header results__col_center">Депозит</div>
                    <div className="results__col results__col_header results__col_guarantor">Гарант</div>
                    <div className="results__col results__col_header">Способы оплаты</div>
                    <div className="results__col results__col_header results__col_contact"></div>
                  </div>
                  <div className="results__body">
                    {profileItems}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfilesNew.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(ProfilesNew);
