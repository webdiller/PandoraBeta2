import React from 'react';
import { Link } from 'react-router-dom';

import './TopNavigation.sass'

const TopNavigation = () => {
    return (
        <div className="top-navigation">
            <nav className="top-navigation__container">
                <Link to="#!" className="top-navigation__item">Новые сообщения</Link>
                <Link to="#!" className="top-navigation__item">Правила проекта</Link>
                <Link to="#!" className="top-navigation__item">ГАРАНТ-сервис</Link>
                <Link to="#!" className="top-navigation__item">Депозит</Link>
                <Link to="#!" className="top-navigation__item">Проверка продавцов</Link>
                <Link to="#!" className="top-navigation__item">Реклама</Link>
            </nav>
        </div>
    );
}

export default TopNavigation;