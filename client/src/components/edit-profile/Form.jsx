import React, { Component } from 'react';
import Select from 'react-dropdown-select';

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

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            profileCity: '',
            profileGuarantor: true,
            paymentVisa: false,
            paymentYandex: false,
            paymentBitcoin: false,
            paymentQiwi: false,
        }
    }

    onInput = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form className="settings__form">
                {/* Имя пользователя */}
                <div className="settings__form-group">
                    <label className="settings__form-label">Имя пользователя</label>
                    <div className="settings__form-control">
                        <input onInput={this.onInput} name="profileName" type="text" className="settings__form-input" />
                        <span className="settings__form-help">Видимо всем</span>
                    </div>
                </div>

                {/* Пароль */}
                <div className="settings__form-group">
                    <label className="settings__form-label">Пароль</label>
                    <div className="settings__form-control">
                        <input onInput={this.onInput} name="profilePassword" type="password" className="settings__form-input" />
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


        );
    }
}

export default Form;