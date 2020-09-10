import React, { useState, useEffect } from 'react';
import Aside from "../aside/Aside";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProfiles } from "../../actions/profileActions";
import './Favorites.sass'

function Favorites(props) {

    const [profiles, setProfiles] = useState();

    useEffect(() => {
        props.getProfiles();
        fetch('/api/profile/all')
            .then(data => data.json())
            .then(data => setProfiles(data)
            )
    }, []);

    let currentCategories = new Set();


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

                            {profiles ?
                                profiles.map(item => (
                                    <div key={item._id} className="favorites__item">

                                        <div className="favorites__profile">
                                            <div className="favorites__profile-img-wrapper">
                                                <img src="" alt="" className="favorites__profile-img" />
                                            </div>
                                            <p className="favorites__profile-name">{item.handle}</p>
                                        </div>

                                        <div className="favorites__tags">
                                            <div className="favorites__tag">
                                                <p className="favorites__tags-name">Категории: </p>
                                                <p className="favorites__tags-value">
                                                    {/* {item.services?.map(item => {
                                                        innerItem.categories?.map(item => {
                                                            currentCategories.add(innerSecondItem)
                                                        })
                                                    })
                                                    } */}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="favorites__deposit">
                                            <p className="favorites__deposit-name">Депозит</p>
                                            <p className="favorites__deposit-price">0 руб.</p>
                                        </div>

                                        <div className="favorites__info">
                                            <div className="favorites__star">
                                                <i className="favorites__star-icon fas fa-star"></i>
                                                <span className="favorites__star-value">5</span>
                                            </div>
                                            <div className="favorites__shield">
                                                <i className="favorites__shield-icon fas fa-shield-alt"></i>
                                            </div>
                                        </div>

                                        <div className="favorites__comment-filed">
                                            <input defaultValue="Отзыв" className="favorites__comment-area"></input>
                                        </div>

                                        <div className="favorites__comment-wrapper">
                                            <button className="site-btn site-btn_red site-btn_s1 mr-2">Сохранить</button>
                                        </div>
                                    </div>
                                ))
                                :
                                null
                            }
                        </div>

                    </div>

                </div>
            </div>

        </div>

    );
}

Favorites.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Favorites);
