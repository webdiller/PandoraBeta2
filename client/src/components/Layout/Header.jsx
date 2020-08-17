import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
import Omnibox from '../omnibox/Omnibox';
// import HeaderProfile from '../HeaderProfile';

import './Header.sass';
import HeaderProfile from './HeaderProfile';

function Header() {

    const [search, setSearch] = useState(true);
    console.log(search);

    const Logo = () => {
        return (
            <Link to="/" className="header__title">
                <span className="header__title-item header__title-item_left">Pan</span>
                <span className="header__title-item header__title-item_right">Dora</span>
            </Link>
        )
    };

    const SvgPath = () => {
        return (
            <svg className="svg">
                <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
                    <path d="M1,1 L0.952,0.545 C0.924,0.278,0.91,0.144,0.89,0.072 C0.869,0,0.845,0,0.798,0 H0 V1 H1"></path>
                </clipPath>
            </svg>
        );
    };

    const Navigation = () => {
        return (
            <nav className="navigation">
                <Link to="/global-search" className={search ? "navigation__item navigation__item--active" : "navigation__item"}
                    onClick={() => setSearch(true)} 
                >
                    <span className="navigation__link">Поиск</span>
                </Link>
                <Link to="/categories" className={(!search) ? "navigation__item navigation__item--active" : "navigation__item"}
                    onClick={() => setSearch(false)} 
                >
                    <span className="navigation__link">Все разделы</span>
                </Link>
            </nav>
        );
    };


    return (
        <header className="header">

            <SvgPath />
            <Navigation />

            <div className="header__container">
                <Logo />
                <Omnibox />
                <div className="header__bar">
                    <HeaderProfile />
                </div>
            </div>

        </header >
    );
}

export default Header;