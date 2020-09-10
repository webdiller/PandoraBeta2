import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profileActions';

const AllUsers = (props) => {

    useEffect(() => {
        props.getProfiles();
    }, [])

    return (
        <div className="container">
            <div className="row text-left">

                <div className="col-12">
                    <h1 className="my-3">Профили</h1>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button">Найти</button>
                        </div>
                        <input type="text" className="form-control" placeholder="Ведите email пользователя" aria-label="" aria-describedby="basic-addon1" />
                    </div>
                </div>

                <div className="col-12">
                    <ul className="list-group">
                        {
                            props.profile.profiles ?
                                props.profile.profiles.map(item => (
                                    <li key={item._id} className="list-group-item">{item.handle}</li>
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

AllUsers.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(AllUsers);