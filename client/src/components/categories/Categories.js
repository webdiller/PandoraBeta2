import React, { Component } from 'react';
import './Categories.sass'

class Categories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false,
      active2: false,
      active3: false,
      active4: false,
      active5: false,
      active6: false,
      active7: false,
      activeOverlay: false
    }
  }

  render() {
    return (
      <div className="categories">
        <div className="categories__container">

          <p className="categories__title">Все разделы</p>
          <div className="categories__lists">

            <ul className="categories__list">

              <li className="categories__item categories__item_title">Пробив / поиск</li>

              <li className="categories__item">
                <button className="categories__link" >Пробив по банку</button>
              </li>

              <li className={this.state.active ? 'categories__item categories__item_navigation active' : 'categories__item categories__item_navigation'}>
                <button onClick={() => {
                  this.setState({ active: !this.state.active })
                  this.setState({ activeOverlay: !this.state.activeOverlay })
                }} className="categories__link categories__link_navigation" href="#!">Пробив по
                  недвижимости
								</button>
                <div className="categories__inner-list-wrapper">
                  <ul className="categories__list_inner container">
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Выписки из ЕГРП</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">История перехода прав на
												объект</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Расширенные сведения из
												реестра</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Архивная выписка из
												домовой</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Докусенты бти</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Поиск недвижимости по
												кадастровому номеру</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Перепроверка репутации
												застройщика</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Копия дела по сделки с
												недвижимостью</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Единый жилищный документ</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="categories__item">
                <a className="categories__link" href="#!">Пробив по гибдд</a>
              </li>

              <li className={this.state.active2 ? 'categories__item categories__item_navigation active' : 'categories__item categories__item_navigation'}>
                <button onClick={() => {
                  this.setState({ active2: !this.state.active2 })
                  this.setState({ activeOverlay: !this.state.activeOverlay })
                }} className="categories__link categories__link_navigation">Пробив по прф
								</button>
                <div className="categories__inner-list-wrapper">
                  <ul className="categories__list_inner container">
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Выписки из ЕГРП</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">История перехода прав на
												объект</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Расширенные сведения из
												реестра</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Архивная выписка из
												домовой</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Докусенты бти</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Поиск недвижимости по
												кадастровому номеру</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Перепроверка репутации
												застройщика</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Копия дела по сделки с
												недвижимостью</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Единый жилищный документ</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="categories__item">
                <a className="categories__link" href="#!">Пробив по мвд</a>
              </li>

              <li className="categories__item">
                <a className="categories__link" href="#!">Пробив по сотовым оперпторам</a>
              </li>

              <li className="categories__item">
                <a className="categories__link" href="#!">Пробив по фспп</a>
              </li>

              <li className="categories__item">
                <a className="categories__link" href="#!">Пробив по россреестр</a>
              </li>

              <li className="categories__item">
                <a className="categories__link" href="#!">загс - браки, разводы, родственные связи</a>
              </li>

              <li className="categories__item">
                <a className="categories__link" href="#!">Пробив по фнс</a>
              </li>

            </ul>

            <ul className="categories__list">

              <li className="categories__item categories__item_title">Hacking</li>

              <li className="categories__item">
                <a className="categories__link" href="#!">Взлом почты</a>
              </li>

              <li className={this.state.active3 ? 'categories__item categories__item_navigation active' : 'categories__item categories__item_navigation'}>
                <button onClick={() => {
                  this.setState({ active3: !this.state.active3 })
                  this.setState({ activeOverlay: !this.state.activeOverlay })
                }} className="categories__link categories__link_navigation">Пробив по
                  недвижимости
								</button>
                <div className="categories__inner-list-wrapper">
                  <ul className="categories__list_inner container">
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Выписки из ЕГРП</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">История перехода прав на
												объект</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Расширенные сведения из
												реестра</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Архивная выписка из
												домовой</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Докусенты бти</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Поиск недвижимости по
												кадастровому номеру</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Перепроверка репутации
												застройщика</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Копия дела по сделки с
												недвижимостью</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Единый жилищный документ</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="categories__item">
                <a className="categories__link" href="#!">Аккаунты, базы данных, ключи </a>
              </li>

              <li className={this.state.active4 ? 'categories__item categories__item_navigation active' : 'categories__item categories__item_navigation'}>
                <button onClick={() => {
                  this.setState({ active4: !this.state.active4 })
                  this.setState({ activeOverlay: !this.state.activeOverlay })
                }} className="categories__link categories__link_navigation">Пробив по прф
								</button>
                <div className="categories__inner-list-wrapper">
                  <ul className="categories__list_inner container">
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Выписки из ЕГРП</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">История перехода прав на
												объект</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Расширенные сведения из
												реестра</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Архивная выписка из
												домовой</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Докусенты бти</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Поиск недвижимости по
												кадастровому номеру</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Перепроверка репутации
												застройщика</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Копия дела по сделки с
												недвижимостью</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Единый жилищный документ</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="categories__item">
                <a className="categories__link" href="#!">Взлом социальных сетей и месседжеров</a>
              </li>

              <li className="categories__item">
                <a className="categories__link" href="#!">Ddos, спам, флуд, рассылки</a>
              </li>

              <li className="categories__item">
                <a className="categories__link" href="#!">Софт, инструменты</a>
              </li>

              <li className="categories__item">
                <a className="categories__link" href="#!">Сервера, дедики, соксы, vpn, ssh</a>
              </li>

            </ul>

            <ul className="categories__list">

              <li className="categories__item categories__item_title">документты</li>

              <li className="categories__item">
                <a className="categories__link" href="#!">Купить / продать</a>
              </li>

              <li className={this.state.active5 ? 'categories__item categories__item_navigation active' : 'categories__item categories__item_navigation'}>
                <button onClick={() => {
                  this.setState({ active5: !this.state.active5 })
                  this.setState({ activeOverlay: !this.state.activeOverlay })
                }} className="categories__link categories__link_navigation">Отрисовка
								</button>
                <div className="categories__inner-list-wrapper">
                  <ul className="categories__list_inner container">
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Отрисовка 1</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Отрисовка 2</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Отрисовка 3</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Отрисовка 4</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="categories__item">
                <a className="categories__link" href="#!">фнс</a>
              </li>

              <li className={this.state.active6 ? 'categories__item categories__item_navigation active' : 'categories__item categories__item_navigation'}>
                <button onClick={() => {
                  this.setState({ active6: !this.state.active6 })
                  this.setState({ activeOverlay: !this.state.activeOverlay })
                }} className="categories__link categories__link_navigation">Бухгалтерия
								</button>
                <div className="categories__inner-list-wrapper">
                  <ul className="categories__list_inner container">
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Бухгалтерия 1</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Бухгалтерия 2</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Бухгалтерия 3</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">Бухгалтерия 4</a>
                    </li>
                  </ul>
                </div>
              </li>

            </ul>

            <ul className="categories__list">

              <li className="categories__item categories__item_title">банки и мфо</li>

              <li className="categories__item">
                <a className="categories__link" href="#!">Обнал</a>
              </li>

              <li className={this.state.active7 ? 'categories__item categories__item_navigation active' : 'categories__item categories__item_navigation'}>
                <button onClick={() => {
                  this.setState({ active7: !this.state.active7 })
                  this.setState({ activeOverlay: !this.state.activeOverlay })
                }} className="categories__link categories__link_navigation">ндс
								</button>
                <div className="categories__inner-list-wrapper">
                  <ul className="categories__list_inner container">
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">ндс 1</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">ндс 2</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">ндс 3</a>
                    </li>
                    <li className="categories__item_inner">
                      <a className="categories__link_inner" href="#!">ндс 4</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="categories__item">
                <a className="categories__link" href="#!">продажи</a>
              </li>

            </ul>

          </div>

          <div className={this.state.activeOverlay ? 'categories__overlay active' : 'categories__overlay'}
            onClick={(e) => {
              this.setState({ activeOverlay: false })
              this.setState({ active: false })
              this.setState({ active2: false })
              this.setState({ active3: false })
              this.setState({ active4: false })
              this.setState({ active5: false })
              this.setState({ active6: false })
              this.setState({ active7: false })
            }}></div>
        </div>
      </div>
    );
  }
}

export default Categories;