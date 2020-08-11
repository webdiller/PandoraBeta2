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

    const profiles = this.props.profile.profiles;
    const all_categories = profiles.filter(item => (
      item => item.services.length > 0
    ));

    const compare_arr = ["asdasd"];

    const profilesWithServises = this.props.profile.profiles.filter(item => item.services.length > 0)

    const profilesWithServisesFilter = profilesWithServises.filter(item => (
      item.handle.includes('') &&
      item.user._id.includes('') &&
      item.services[0].categories.some(item => compare_arr.includes(item))
    ));
    console.log(profilesWithServisesFilter);
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

              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-6 mx-auto">

                    <form onSubmit={e => { this.showMatchProfiles(e) }}>
                      <p>Искать по параметрам</p>

                      {/* <div className="form-group">
                        <label>Ключевые слова</label>
                        <select multiple className="custom-select">
                          {all_categories ? all_categories.map(item => {
                            <option disabled>Выбирете категорию</option>
                            return (
                              <option value="Кат1">{item}</option>
                            )
                          }) : null}
                        </select>
                      </div> */}

                      <div className="form-group">
                        <label>Срок регистрации на сайте</label>
                        <select className="custom-select">
                          <option defaultValue="2">от 2 лет</option>
                          <option value="1">От года</option>
                          <option value="0.5">От 0.5 года</option>
                          <option value="0">Не важно</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Рейтинг исполнителя</label>
                        <select className="custom-select">
                          <option defaultValue="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Регион</label>
                        <select className="custom-select">
                          <option defaultValue="Приморский край">Приморский край</option>
                          <option value="Московская область">Московская область</option>
                          <option value="Иркутская область">Иркутская область</option>
                          <option value="Урал">Урал</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Депозит</label>
                        <input type="number" className="form-control" />
                      </div>


                      <div className="form-group">
                        <label>Способы оплаты</label>
                        <select multiple className="custom-select">
                          <option defaultValue="visa" >visa</option>
                          <option value="bitcoin" >bitcoin</option>
                          <option value="qiwi" >qiwi</option>
                          <option value="я.д." >я.д.</option>
                        </select>
                      </div>

                      <button type="submit" className="btn btn-primary">Найти</button>

                    </form>

                  </div>
                </div>
              </div>

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
