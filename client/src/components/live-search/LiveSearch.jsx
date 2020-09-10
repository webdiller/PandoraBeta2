import React from 'react';
import { Link } from 'react-router-dom';
import './LiveSearch.sass'

export default function LiveSearch(props) {

    return (

        <div className={props.focused ? 'live-search live-search_home active' : 'live-search live-search_home'}>
            <div className="live-search__wrapper">
                <div className="live-search__list-wrapper">
                    <ul className="live-search__list">
                        {
                            props.search.map((item, index) => {

                                let name = item.name.toLowerCase();
                                if (name.includes(props.term)) {
                                    return <li key={index} className="live-search__item">
                                        <Link to={item.link} className="live-search__link">{item.name}</Link>
                                    </li>
                                }
                                return true;
                            })
                        }
                    </ul>
                    <div className="live-search__help">
                        <p className="live-search__help-text">Не найшли исполнителей?</p>
                        <Link to="/dashboard" className="live-search__help-link">Создайте заявку</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}