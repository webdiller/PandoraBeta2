import React from 'react';
import { Link } from 'react-router-dom';
import Omnibox from '../Omnibox';
import { connect } from "react-redux";
import ModalRegistration from '../ModalRegistration/ModalRegistration';
import ModalAuth from '../ModalAuth/ModalAuth';

import './Header.sass';

function Header({ isAuth }) {

    const [activeRegistration, setActiveRegistration] = React.useState(false);

    const Logo = () => {
        return (
            <Link to="/main" className="header__title">
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
                <Link to="/advanced" className="navigation__item navigation__item--active">
                    <span className="navigation__link">Поиск</span>
                </Link>
                <Link to="/categories" className="navigation__item">
                    <span className="navigation__link">Все разделы</span>
                </Link>
            </nav>
        );
    };

    const handleActiveChange = (e) => {
        setActiveRegistration(!activeRegistration);
    }

    const LinkToPersonal = () => {
        if (isAuth) {
            return (
                <Link to="/profile" className="header__bar-icon">
                    <i className="header__bar-icon-inner far fa-user"></i>
                </Link>
            )
        } else {
            return (
                <React.Fragment>
                    <div onClick={e => { handleActiveChange(e) }} className="header__bar-icon">
                        <i className="header__bar-icon-inner far fa-user"></i>
                    </div>
                    <ModalRegistration activeRegistration={activeRegistration} />
                    <ModalAuth />
                </React.Fragment>
            )
        }
    };

    return (
        <header className="header">

            <SvgPath />
            <Navigation />

            <div className="header__container">
                <Logo />
                <Omnibox />
                <div className="header__bar">
                    <LinkToPersonal />
                </div>
            </div>

        </header >
    );
}

export default connect(({ user }) => ({ isAuth: user.isAuth }))(Header);