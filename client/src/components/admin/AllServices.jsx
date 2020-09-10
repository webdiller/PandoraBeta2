import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profileActions';

const AllServices = (props) => {

    useEffect(() => {
        props.getProfiles();
    }, [])

    const ServiceItem = ({ item }) => {
        let arr = [];
        item.services.map(item => {
            arr.push(item.title)
        });
        console.log(arr);
        return (
            <li id={item._id} key={item._id} className="list-group-item">
                {item.handle}
                <p>Категории: {
                     arr.map((item, index)=>{return(<span className="mr-2" key={index}>{item} </span>)})
                }</p>
            </li>
        )
    }

    return (
        <div className="container">
            <div className="row text-left">

                <div className="col-12">
                    <h1 className="my-3">Все услуги</h1>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button">Найти</button>
                        </div>
                        <input type="text" className="form-control" placeholder="Ведите имя пользователя" aria-label="" aria-describedby="basic-addon1" />
                    </div>
                </div>

                <div className="col-12">
                    <ul className="list-group">
                        {
                            props.profile.profiles ?
                                props.profile.profiles.map(item => (
                                    <ServiceItem key={item._id} item={item} />
                                ))
                                :
                                null
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

AllServices.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(AllServices);