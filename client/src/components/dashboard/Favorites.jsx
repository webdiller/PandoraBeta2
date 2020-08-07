import React, { useState } from 'react';
import customersData from './customers.json';
import Aside from "../aside/Aside";
import './Favorites.sass'

export default function Favorites() {

    const [search, setSearch] = useState('');
    const [customers, setCustomers] = useState(customersData);

    return (
        <div className="favorites" >
            <div className="favorites__container">
                <Aside />
                <div className="favorites__content">

                    <div className="favorites__body">
                        <p className="favorites__title"><i className="favorites__star far fa-star"></i> Избранное - 3</p>

                        <div className="favorites__search">
                            <input
                                name="searchFavoriteCustomer"
                                type="text"
                                className="favorites__input" />
                            <i className="favorites__icon fas fa-search"></i>
                        </div>

                        <div className="favorites__list">

                            { customers &&
                                customers.map((item) => {

                                    let {
                                        name,
                                        raiting,
                                        deposit,
                                        tags,
                                        review,
                                    } = item;

                                    if (name.toLowerCase().includes(search)) {

                                        return (
                                            <div key={item.id} className="favorites__item">

                                                <div className="favorites__profile">
                                                    <div className="favorites__profile-img-wrapper">
                                                        <img src="" alt="" className="favorites__profile-img" />
                                                    </div>
                                                    <p className="favorites__profile-name">{name}</p>
                                                </div>

                                                <div className="favorites__tags">
                                                    {tags.map((item, index) => {
                                                        return (
                                                            <div key={index} className="favorites__tag">
                                                                <p className="favorites__tags-name">{item.title}</p>
                                                                <p className="favorites__tags-value">{item.data}</p>
                                                            </div>
                                                        )
                                                    })}
                                                </div>

                                                <div className="favorites__deposit">
                                                    <p className="favorites__deposit-name">Депозит</p>
                                                    <p className="favorites__deposit-price">{deposit} руб.</p>
                                                </div>

                                                <div className="favorites__info">
                                                    <div className="favorites__star">
                                                        <i className="favorites__star-icon fas fa-star"></i>
                                                        <span className="favorites__star-value">{raiting}</span>
                                                    </div>
                                                    <div className="favorites__shield">
                                                        <i className="favorites__shield-icon fas fa-shield-alt"></i>
                                                    </div>
                                                </div>

                                                <div className="favorites__comment-filed">
                                                    <input id={item.id} defaultValue={review} className="favorites__comment-area"></input>
                                                </div>

                                                <div className="favorites__comment-wrapper">
                                                    <button className="site-btn site-btn_red site-btn_s1 mr-2">Сохранить</button>
                                                </div>

                                            </div>
                                        )
                                    }
                                    return true;
                                })
                            }
                        </div>

                    </div>

                </div>
            </div>
        
        </div>
    
    );
}