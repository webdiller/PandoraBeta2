import React, { Component } from "react";
import Select from 'react-dropdown-select';

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";
import isEmpty from "../../validation/is-empty";
import Aside from "../aside/Aside";

import bitcoin from '../../assets/images/bitcoin.png'
import qiwi from '../../assets/images/qiwi.png';
import visa from '../../assets/images/visa.png';
import yandex from '../../assets/images/yandex-money.png';

import './EditProfile.sass'

const options_location = [
  { value: 'Хакасия', label: 'Хакасия', },
  { value: 'Приволжский', label: 'Приволжский', },
  { value: 'Ардатов', label: 'Ардатов', },
  { value: 'Москва', label: 'Москва', },
  { value: 'Санкт-Петербург', label: 'Санкт-Петербург', },
  { value: 'Армавир', label: 'Армавир', },
  { value: 'Владивосток', label: 'Владивосток', },
  { value: 'Артёмовск', label: 'Артёмовск', },
];

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // Bring skills array back to CSV
      // const skillsCSV = profile.skills.join(',');

      // If profile field doesnt exist, make empty string
      profile.handle = !isEmpty(profile.handle) ? profile.handle : "";
      // profile.website = !isEmpty(profile.website) ? profile.website : '';
      // profile.location = !isEmpty(profile.location) ? profile.location : '';
      // profile.githubusername = !isEmpty(profile.githubusername)
      //   ? profile.githubusername
      //   : '';
      // profile.bio = !isEmpty(profile.bio) ? profile.bio : '';
      // profile.social = !isEmpty(profile.social) ? profile.social : {};
      // profile.twitter = !isEmpty(profile.social.twitter)
      //   ? profile.social.twitter
      //   : '';
      // profile.facebook = !isEmpty(profile.social.facebook)
      //   ? profile.social.facebook
      //   : '';
      // profile.linkedin = !isEmpty(profile.social.linkedin)
      //   ? profile.social.linkedin
      //   : '';
      // profile.youtube = !isEmpty(profile.social.youtube)
      //   ? profile.social.youtube
      //   : '';
      // profile.instagram = !isEmpty(profile.social.instagram)
      //   ? profile.social.instagram
      //   : '';

      // Set component fields state
      this.setState({
        handle: profile.handle,
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    return (

      <div className="settings">
        <div className="settings__container">
          <Aside />
          <div className="settings__content">
            <div className="settings__body">
              <div className="settings__title">Профиль</div>

              <form className="settings__form" onSubmit={this.onSubmit}>

                <div className="settings__form-group">
                  <label className="settings__form-label">Имя пользователя</label>
                  <div className="settings__form-control">
                    <input placeholder="Загрузка имени профиля..." name="handle"
                      value={this.state.handle}
                      onChange={this.onChange} type="text" className="settings__form-input" />
                    <span className="settings__form-help">Видимо всем</span>
                  </div>
                </div>

                <div className="settings__form-group">
                  <label className="settings__form-label">Пароль</label>
                  <div className="settings__form-control">
                    <input name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      className="settings__form-input" />
                  </div>
                </div>

                {/* Почта */}
                <div className="settings__form-group">
                    <label className="settings__form-label">Электронная почта</label>
                    <div className="settings__form-control">
                        <input autoComplete="email" onInput={this.onInput} name="profileEmail" type="email" className="settings__form-input" />
                        <button type="button" className="settings__form-btn-hide icon-eye-off"></button>
                    </div>
                </div>

                {/* Регион */}
                <div className="settings__form-group">
                    <label className="settings__form-label">Регион / Город</label>
                    <div className="settings__form-control settings__form-control_select">
                        <Select
                            options={options_location}
                            values={[]}
                            placeholder="Регион"
                            value
                            onChange={(value) => {
                                this.setState({ profileCity: value[0].value })
                            }}
                        />
                    </div>
                </div>

                {/* Гарант */}
                <div className="settings__form-group">
                    <label className="settings__form-label settings__form-label_guarantor">Работа через гарант сервис</label>
                    <div className="settings__form-control settings__form-control_guarantor">
                        <input onChange={(e) => { this.setState({ profileGuarantor: !this.state.profileGuarantor }) }} checked={this.state.profileGuarantor} className="settings__form-custom-input" type="checkbox" id="profileGarant" />
                        <label className="settings__form-custom-label" htmlFor="profileGarant"></label>
                    </div>
                </div>

                <div className="settings__form-group">
                    <label className="settings__form-label">Принимаемые формы оплаты</label>
                    <div className="settings__form-control settings__form-control_payment">

                        {/* Visa */}
                        <input
                            onChange={(e) => { this.setState({ paymentVisa: !this.state.paymentVisa }) }}
                            checked={this.state.paymentVisa}
                            className="settings__form-custom-input settings__form-custom-input_payment"
                            type="checkbox" id="profileFormPayment1" />
                        <label className="settings__form-custom-label settings__form-custom-label_payment"
                            htmlFor="profileFormPayment1">
                            <img src={visa} alt="" />
                        </label>

                        {/* Bitcoin */}
                        <input
                            onChange={(e) => { this.setState({ paymentBitcoin: !this.state.paymentBitcoin }) }}
                            checked={this.state.paymentBitcoin}
                            className="settings__form-custom-input settings__form-custom-input_paymen"
                            type="checkbox" id="profileFormPayment2" />
                        <label className="settings__form-custom-label settings__form-custom-label_payment"
                            htmlFor="profileFormPayment2">
                            <img src={bitcoin} alt="" />
                        </label>

                        {/* Qiwi */}
                        <input
                            onChange={(e) => { this.setState({ paymentQiwi: !this.state.paymentQiwi }) }}
                            checked={this.state.paymentQiwi}
                            className="settings__form-custom-input settings__form-custom-input_paymen"
                            type="checkbox" id="profileFormPayment3" />
                        <label className="settings__form-custom-label settings__form-custom-label_payment"
                            htmlFor="profileFormPayment3">
                            <img src={qiwi} alt="" />
                        </label>

                        {/* Yandex */}
                        <input
                            onChange={(e) => { this.setState({ paymentYandex: !this.state.paymentYandex }) }}
                            checked={this.state.paymentYandex}
                            className="settings__form-custom-input settings__form-custom-input_payment"
                            type="checkbox" id="profileFormPayment4" />
                        <label className="settings__form-custom-label settings__form-custom-label_payment"
                            htmlFor="profileFormPayment4">
                            <img src={yandex} alt="" />
                        </label>
                    </div>
                </div>

                <div className="settings__btn-submit-wrapper text-center">
                    <button type="submit" className="settings__btn-submit site-btn site-btn_red site-btn_s3">Сохранить</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

    );
  }
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfile)
);
