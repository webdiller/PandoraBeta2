import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profileActions";

class Profiles extends Component {

  constructor(props) {
    super(props);
    // Не вызывайте здесь this.setState()!
    this.state = { newUsers: [] };
  }

  componentDidMount() {
    this.props.getProfiles();
  }

  showMatchProfiles = (e) => {
    e.preventDefault();
    const { name, categories } = e.target.elements;
    // sort by handle
    // if (!!this.props.profile.profiles) {
    //   let users = this.props.profile.profiles.find((user) => {
    //     return user.handle === name.value;
    //   });
    //   this.setState({ newUsers: users });
    // }

    // sort by services
    if (!!this.props.profile.profiles) {
      console.log(this.props.profile.profiles);
      // if (!!this.props.profile.services[0]) {
      //   this.props.profile.services[0].categories.map(item => {
      //     console.log(item);
      //   })
      // }

      // let users = this.props.profile.profiles.find((user) => {
      //   return user.handle === categories.value;
      // });
      // this.setState({ newUsers: users });
    }
    else {
      console.log('no users match');
    }
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;

    } else {
      if (profiles.length > 0) {
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
              <h1 className="display-4 text-center">Developer Profiles</h1>
              <p className="lead text-center">
                Browse and connect with developers
              </p>
              <form onSubmit={e => { this.showMatchProfiles(e) }}>
                <p>Искать по параметрам</p>
                <input placeholder="имя" name="name" type="text" /> <br />
                <select id="myselect" multiple name="category">
                  <option value="категория" defaultValue>категория</option>
                  <option value="adasdas">кат1</option>
                  <option value="кат1">кат1</option>
                  <option value="кат1">кат2</option>
                  <option value="кат1">кат3</option>
                </select>
                <input value="применить" type="submit" /> <br />
              </form>

              {profileItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
