import React from "react";
import { NavLink } from "react-router-dom";

import "./Aside.sass";

export default function Aside() {
  return (
    <nav className="aside">
      <NavLink
        className="aside__item"
        activeClassName="aside__item_active"
        exact
        to="/dashboard"
      >
        Личный кабинет
      </NavLink>
      <NavLink
        className="aside__item aside__item_chat-active"
        activeClassName="aside__item_active"
        exact
        to="/messanger"
      >
        Чаты
      </NavLink>
      <NavLink
        className="aside__item"
        activeClassName="aside__item_active"
        exact
        to="/transactions"
      >
        История транзакций
      </NavLink>
      <NavLink
        className="aside__item"
        activeClassName="aside__item_active"
        exact
        to="/favorites"
      >
        Избранное
      </NavLink>
      <NavLink
        className="aside__item"
        activeClassName="aside__item_active"
        exact
        to="/settings-profile"
      >
        Настройки
      </NavLink>

      <NavLink
        className="aside__item aside__item_icon"
        activeClassName="aside__item_active"
        exact
        to="/dashboard"
      >
        <i className="fas fa-user-circle"></i>
      </NavLink>
      <NavLink
        className="aside__item aside__item_icon aside__item_chat-active"
        activeClassName="aside__item_active"
        exact
        to="/"
      >
        <i className="fas fa-comments"></i>
      </NavLink>
      <NavLink
        className="aside__item aside__item_icon"
        activeClassName="aside__item_active"
        exact
        to="/transactions"
      >
        <i className="fas fa-money-check-alt"></i>
      </NavLink>
      <NavLink
        className="aside__item aside__item_icon"
        activeClassName="aside__item_active"
        exact
        to="/favorites"
      >
        <i className="fab fa-gratipay"></i>
      </NavLink>
      <NavLink
        className="aside__item aside__item_icon"
        activeClassName="aside__item_active"
        exact
        to="/settings-profile"
      >
        <i className="fas fa-user-cog"></i>
      </NavLink>
    </nav>
  );
}
