import React, { Component } from 'react';
import Select from 'react-dropdown-select';

import bitcoin from '../../assets/images/bitcoin.png'
import qiwi from '../../assets/images/qiwi.png';
import visa from '../../assets/images/visa.png';
import yandex from '../../assets/images/yandex-money.png';

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
            text: '',
            profileCity: '',
            profileGuarantor: true,
            paymentVisa: false,
            paymentYandex: false,
            paymentBitcoin: false,
            paymentQiwi: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({ text: value })
    }

    onInput = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form className="profile__form">
                {/* Имя пользователя */}
                <div className="profile__form-group">
                    <label className="profile__form-label">Имя пользователя</label>
                    <div className="profile__form-control">
                        <input onInput={this.onInput} name="profileName" type="text" className="profile__form-input" />
                        <span className="profile__form-help">Видимо всем</span>
                    </div>
                </div>

                {/* Почта */}
                <div className="profile__form-group">
                    <label className="profile__form-label">Электронная почта</label>
                    <div className="profile__form-control">
                        <input autoComplete="email" onInput={this.onInput} name="profileEmail" type="email" className="profile__form-input" />
                        <button type="button" className="profile__form-btn-hide icon-eye-off"></button>
                    </div>
                </div>

                {/* Регион */}
                <div className="profile__form-group">
                    <label className="profile__form-label">Регион / Город</label>
                    <div className="profile__form-control profile__form-control_select">
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
                <div className="profile__form-group">
                    <label className="profile__form-label profile__form-label_guarantor">Работа через гарант сервис</label>
                    <div className="profile__form-control profile__form-control_guarantor">
                        <input onChange={(e) => { this.setState({ profileGuarantor: !this.state.profileGuarantor }) }} checked={this.state.profileGuarantor} className="profile__form-custom-input" type="checkbox" id="profileGarant" />
                        <label className="profile__form-custom-label" htmlFor="profileGarant"></label>
                    </div>
                </div>

                <div className="profile__form-group">
                    <label className="profile__form-label">Принимаемые формы оплаты</label>
                    <div className="profile__form-control profile__form-control_payment">

                        {/* Visa */}
                        <input
                            onChange={(e) => { this.setState({ paymentVisa: !this.state.paymentVisa }) }}
                            checked={this.state.paymentVisa}
                            className="profile__form-custom-input profile__form-custom-input_payment"
                            type="checkbox" id="profileFormPayment1" />
                        <label className="profile__form-custom-label profile__form-custom-label_payment"
                            htmlFor="profileFormPayment1">
                            <img src={visa} alt="" />
                        </label>

                        {/* Bitcoin */}
                        <input
                            onChange={(e) => { this.setState({ paymentBitcoin: !this.state.paymentBitcoin }) }}
                            checked={this.state.paymentBitcoin}
                            className="profile__form-custom-input profile__form-custom-input_paymen"
                            type="checkbox" id="profileFormPayment2" />
                        <label className="profile__form-custom-label profile__form-custom-label_payment"
                            htmlFor="profileFormPayment2">
                            <img src={bitcoin} alt="" />
                        </label>

                        {/* Qiwi */}
                        <input
                            onChange={(e) => { this.setState({ paymentQiwi: !this.state.paymentQiwi }) }}
                            checked={this.state.paymentQiwi}
                            className="profile__form-custom-input profile__form-custom-input_paymen"
                            type="checkbox" id="profileFormPayment3" />
                        <label className="profile__form-custom-label profile__form-custom-label_payment"
                            htmlFor="profileFormPayment3">
                            <img src={qiwi} alt="" />
                        </label>

                        {/* Yandex */}
                        <input
                            onChange={(e) => { this.setState({ paymentYandex: !this.state.paymentYandex }) }}
                            checked={this.state.paymentYandex}
                            className="profile__form-custom-input profile__form-custom-input_payment"
                            type="checkbox" id="profileFormPayment4" />
                        <label className="profile__form-custom-label profile__form-custom-label_payment"
                            htmlFor="profileFormPayment4">
                            <img src={yandex} alt="" />
                        </label>
                    </div>
                </div>

                <div className="profile__btn-submit-wrapper text-center">
                    <button type="submit" className="profile__btn-submit site-btn site-btn_red site-btn_s3">Сохранить</button>
                </div>
            </form>


        );
    }
}

export default Form;