import React from 'react';
import './loader.scss'
import loader from '../../assets/images/loader.gif';

const Loader = ({ active }) => {
    return (
        <div className={active ? "loader active" : "loader"}>
            <img className="loader__img" src={loader} alt="" />
            <div className="loader__overlay"></div>
        </div>
    );
};

Loader.defaultProps = {
    active: false
}

export default Loader;