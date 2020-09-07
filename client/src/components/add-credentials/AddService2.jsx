import React, { useState } from 'react';
import Select from 'react-dropdown-select';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addEducation } from "../../actions/profileActions";
import Axios from 'axios';

const AddService2 = (props) => {
    const [categories, setCategories] = useState();

    React.useEffect(() => {
        let arr = [];
        const getData = async () => {
            return await Axios('http://localhost:5000/api/category')
        }
        getData()
            .then(data => data.data.map(item => arr.push({ label: item.name, value: item.name })))
            .then(setCategories(arr))
    }, [])

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        categories: '',
        categoriesArray: []
    });

    const onChange = e => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        let newCategories = formData.categoriesArray;
        newCategories = newCategories.map(item => {
            return item.value
        });
        newCategories = newCategories.join();
        console.log(newCategories);

        const eduData = {
            title: formData.title,
            categories: formData.categories,
            content: formData.content
        };

        // props.addEducation(eduData, props.history);
    }

    return (
        <div className="profile__username">
            <p className="profile__username-title">Публикация услуги</p>
            <form onSubmit={onSubmit} className="profile__form">
                <input onChange={e => { onChange(e) }} name="title" type="text" placeholder="Название" className="profile__username-input" />
                <input onChange={e => { onChange(e) }} name="content" type="text" placeholder="Описание" className="profile__username-input" />
                <input onChange={e => { onChange(e) }} name="categories" type="text" placeholder="Категория" className="profile__username-input" />

                <div className="profile__select-wrapper">
                    <Select
                        multi={true}
                        options={categories}
                        name="Категории"
                        values={[]}
                        color="#fc171e"
                        onChange={(value) => {
                            setFormData({
                                ...formData,
                                categoriesArray: value
                            })
                        }}
                        placeholder="Категории"
                        value
                    />
                </div>

                <button type="submit" className="profile__btn-submit site-btn site-btn_red site-btn_s3">Опубликовать услугу</button>
            </form>
        </div>

    );
};

AddService2.propTypes = {
    addEducation: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    profile: state.profile,
    errors: state.errors,
});

export default connect(mapStateToProps, { addEducation })(
    withRouter(AddService2)
);
