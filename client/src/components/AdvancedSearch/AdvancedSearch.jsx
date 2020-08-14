import React, { Component } from 'react';
import Results from '../Results/Results';

import { Range, getTrackBackground } from 'react-range';
import Select from 'react-dropdown-select';

import './AdvancedSearch.sass'

import bitcoin from '../../../images/bitcoin.png';
import qiwi from '../../../images/qiwi.png';
import visa from '../../../images/visa.png';
import yandex from '../../../images/yandex-money.png';

const options_location = [
	{ value: 'Любой', label: 'Любой', },
	{ value: 'Хакасия', label: 'Хакасия', },
	{ value: 'Приволжский', label: 'Приволжский', },
	{ value: 'Ардатов', label: 'Ардатов', },
	{ value: 'Москва', label: 'Москва', },
	{ value: 'Санкт-Петербург', label: 'Санкт-Петербург', },
	{ value: 'Армавир', label: 'Армавир', },
	{ value: 'Владивосток', label: 'Владивосток', },
	{ value: 'Артёмовск', label: 'Артёмовск', },
];

const options_tags = [
	{ value: 'Международное право', label: 'Международное право', },
	{ value: 'Уголовное право', label: 'Уголовное право' },
	{ value: 'Арбитражный суд', label: 'Арбитражный суд' },
];

const STEP = 0.5;
const MIN = 0;
const MAX = 100000;

export default class AdvancedSearch extends Component {

	constructor(props) {
		super(props);
		this.state = {
			activeSearch: false,
			searchTags: [],
			searchTime: 0,
			searchRating: 0,
			searchCity: '',
			searchDeposit: [50000],
			searchGuarantor: false,
			searchVisa: true,
			searchYandex: false,
			searchBitcoin: false,
			searchQiwi: false,
		}

		this.handleActiveSearch = this.handleActiveSearch.bind(this);

	}

	handleActiveSearch() { this.setState({ activeSearch: !this.state.activeSearch }) }


	handleChange = (e) => {
		e.preventDefault();
		console.log(this.state);
	};

	render() {

		return (
			<div>
				<form onSubmit={this.handleChange} className="advanced-search" >

					<p className="advanced-search__title">Расширенный поиск</p>

					{/* Категории */}
					<div className="advanced-search__group" >
						<label className="advanced-search__label">Категории</label>
						<div className="advanced-search__direction-wrapper">

							<Select
								multi
								color="#fc171e"
								options={options_tags}
								values={[]}
								placeholder=""
								onChange={(value) =>
									this.setState({ searchTags: value })
								}
							/>

							<span className="advanced-search__direction-small">Например: трудовые споры</span>
						</div>
					</div>

					{/* Сроки */}
					< div className="advanced-search__group" >
						<label className="advanced-search__label">Срок регистрации на сайте</label>
						<div className="advanced-search__input-buttons">

							<div className="advanced-search__input-group">
								<input onChange={(e) => { this.setState({ searchTime: e.target.value }) }} defaultValue="2" id="registration_term_1" name="registration_term" type="radio"
									className="advanced-search__input-button" />
								<label className="advanced-search__input-label" htmlFor="registration_term_1">От 2 лет</label>
							</div>

							<div className="advanced-search__input-group">
								<input onChange={(e) => { this.setState({ searchTime: e.target.value }) }} defaultValue="1" defaultChecked id="registration_term_2" name="registration_term" type="radio"
									className="advanced-search__input-button" />
								<label className="advanced-search__input-label" htmlFor="registration_term_2">От года</label>
							</div>

							<div className="advanced-search__input-group">
								<input onChange={(e) => { this.setState({ searchTime: e.target.value }) }} defaultValue="0.5" id="registration_term_3" name="registration_term" type="radio"
									className="advanced-search__input-button" />
								<label className="advanced-search__input-label" htmlFor="registration_term_3">От 0.5 года</label>
							</div>

							<div className="advanced-search__input-group">
								<input onChange={(e) => { this.setState({ searchTime: e.target.value }) }} defaultValue="0" id="registration_term_4" name="registration_term" type="radio"
									className="advanced-search__input-button" />
								<label className="advanced-search__input-label" htmlFor="registration_term_4">Не важно</label>
							</div>

						</div>
					</div >

					{/* Рейтинг */}
					< div className="advanced-search__group" >
						<span className="advanced-search__label">Рейтинг исполнителя</span>
						<div className="advanced-search__rating-wrapper">
							<div className="star-rating">
								<div className="star-rating__wrap">
									<div className="rating">
										<input onChange={(e) => { this.setState({ searchRating: e.target.value }) }} id="rating-5" type="radio" name="rating" defaultValue="5" /><label htmlFor="rating-5"><i className="fas fa-star"></i></label>
										<input onChange={(e) => { this.setState({ searchRating: e.target.value }) }} id="rating-4" type="radio" name="rating" defaultValue="4" /><label htmlFor="rating-4"><i className="fas fa-star"></i></label>
										<input onChange={(e) => { this.setState({ searchRating: e.target.value }) }} id="rating-3" type="radio" name="rating" defaultValue="3" /><label htmlFor="rating-3"><i className="fas fa-star"></i></label>
										<input onChange={(e) => { this.setState({ searchRating: e.target.value }) }} id="rating-2" type="radio" name="rating" defaultValue="2" /><label htmlFor="rating-2"><i className="fas fa-star"></i></label>
										<input onChange={(e) => { this.setState({ searchRating: e.target.value }) }} id="rating-1" type="radio" name="rating" defaultValue="1" /><label htmlFor="rating-1"><i className="fas fa-star"></i></label>
									</div>
								</div>
							</div>
						</div>
					</div >

					{/* Регион */}
					< div className="advanced-search__group" >
						<label htmlFor="liveSearchHomeCity" className="advanced-search__label">Регион</label>
						<div className="advanced-search__city-wrapper">
							<Select
								options={options_location}
								values={[]}
								placeholder="Любой "
								onChange={(value) => {
									this.setState({ searchCity: value[0].value })
								}}
							/>
						</div>
					</div >

					{/* Депозит */}
					< div className="advanced-search__group" >
						<p className="advanced-search__label">Депозит</p>
						<div className="advanced-search__range-wrapper">

							<Range
								values={this.state.searchDeposit}
								step={STEP}
								min={MIN}
								max={MAX}
								onChange={values => this.setState({ searchDeposit: values })}
								renderTrack={({ props, children }) => (
									<div
										onMouseDown={props.onMouseDown}
										onTouchStart={props.onTouchStart}
										style={{
											...props.style,
											height: '36px',
											display: 'flex',
											width: '100%'
										}}
									>
										<div
											ref={props.ref}
											style={{
												height: '5px',
												width: '100%',
												borderRadius: '4px',
												background: getTrackBackground({
													values: this.state.searchDeposit,
													colors: ['#fc171e', '#ccc'],
													min: MIN,
													max: MAX
												}),
												alignSelf: 'center'
											}}
										>
											{children}
										</div>
									</div>
								)}
								renderThumb={({ props, isDragged }) => (
									<div
										{...props}
										style={{
											...props.style,
											height: '20px',
											width: '100px',
											borderRadius: '4px',
											backgroundColor: '#FFF',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											boxShadow: '0px 2px 6px #AAA'
										}}
									>
										<div
											style={{
												position: 'absolute',
												top: '-5px',
												color: '#333',
												fontWeight: 'bold',
												fontSize: '14px',
												fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
												padding: '4px',
												borderRadius: '4px',
											}}
										>
											{this.state.searchDeposit[0].toFixed(1)}
										</div>
										<div
											style={{
												height: '16px',
												width: '5px',
												backgroundColor: isDragged ? '#fff' : '#fff'
											}}
										/>
									</div>
								)}
							/>

						</div>
					</div >

					{/* Работа через гаранта */}
					< div className="advanced-search__group advanced-search__group_garant" >
						<p className="advanced-search__label advanced-search__label_garant">Работа через гарант сервис</p>
						<div className="advanced-search__custom-input-wrapper">
							<input onChange={(e) => { this.setState({ searchGuarantor: !this.state.searchGuarantor }) }} checked={this.state.searchGuarantor} className="advanced-search__custom-input" type="checkbox" id="liveSearchGarant" />
							<label className="advanced-search__custom-label" htmlFor="liveSearchGarant"></label>
						</div>
					</div >

					{/*  Способы оплаты */}
					< div className="advanced-search__group" >
						<p className="advanced-search__label">Способы оплаты</p>
						<div className="advanced-search__custom-input-wrapper">

							{/* Visa */}
							<input
								onChange={(e) => { this.setState({ searchVisa: !this.state.searchVisa }) }}
								checked={this.state.searchVisa}
								defaultValue="visa"
								name="payment"
								className="advanced-search__custom-input advanced-search__custom-input_payment"
								type="checkbox"
								id="liveSearchPayment1" />
							<label className="advanced-search__custom-label advanced-search__custom-label_payment"
								htmlFor="liveSearchPayment1">
								<img src={visa} alt="" />
							</label>

							{/* Bitcoin */}
							<input
								onChange={(e) => { this.setState({ searchBitcoin: !this.state.searchBitcoin }) }}
								checked={this.state.searchBitcoin}
								defaultValue="bitcoin"
								name="payment"
								className="advanced-search__custom-input advanced-search__custom-input_payment"
								type="checkbox"
								id="liveSearchPayment2" />
							<label className="advanced-search__custom-label advanced-search__custom-label_payment"
								htmlFor="liveSearchPayment2">
								<img src={bitcoin} alt="" />
							</label>

							{/* Qiwi */}
							<input
								onChange={(e) => { this.setState({ searchQiwi: !this.state.searchQiwi }) }}
								checked={this.state.searchQiwi}
								defaultValue="qiwi"
								name="payment"
								className="advanced-search__custom-input advanced-search__custom-input_payment"
								type="checkbox"
								id="liveSearchPayment3" />
							<label className="advanced-search__custom-label advanced-search__custom-label_payment"
								htmlFor="liveSearchPayment3">
								<img src={qiwi} alt="" />
							</label>

							{/* Yandex */}
							<input
								onChange={(e) => { this.setState({ searchYandex: !this.state.searchYandex }) }}
								checked={this.state.searchYandex}
								defaultValue="yandex"
								name="payment"
								className="advanced-search__custom-input advanced-search__custom-input_payment"
								type="checkbox"
								id="liveSearchPayment4" />
							<label className="advanced-search__custom-label advanced-search__custom-label_payment"
								htmlFor="liveSearchPayment4">
								<img src={yandex} alt="" />
							</label>

						</div>
					</div >

					<div className="advanced-search__btn-wrapper">
						<button className="advanced-search__btn-submit site-btn site-btn_red site-btn_s2 mx-auto">Найти
					</button>
					</div>

				</form >
				<Results />
			</div>
		);
	}
}