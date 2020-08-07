import React, { useState } from 'react';
import Select from 'react-dropdown-select';

const AddService2 = () => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
      });
      
      const [categories, setCategories] = useState([
        { value: 'ПРОБИВ ПО НЕДВИЖИМОСТИ', label: 'ПРОБИВ ПО НЕДВИЖИМОСТИ' },
        { value: 'ПРОБИВ ПО ГИБДД', label: 'ПРОБИВ ПО ГИБДД' },
        { value: 'ПРОБИВ ПО ПРФ', label: 'ПРОБИВ ПО ПРФ' },
        { value: 'ПРОБИВ ПО МВД', label: 'ПРОБИВ ПО МВД' },
        { value: 'ПРОБИВ ПО СОТОВЫМ ОПЕРАТОРАМ', label: 'ПРОБИВ ПО СОТОВЫМ ОПЕРАТОРАМ' },
        { value: 'ПРОБИВ ПО ФСПП', label: 'ПРОБИВ ПО ФСПП' }
      ]);

    const onChange = e => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="profile__username">
            <p className="profile__username-title">Публикация услуги</p>
            <form className="profile__form">
                <input onChange={e => { onChange(e) }} name="title" type="text" placeholder="Название" className="profile__username-input" />
                <input onChange={e => { onChange(e) }} name="description" type="text" placeholder="Описание" className="profile__username-input" />
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
                                category: value[0].value
                            })
                        }}
                        placeholder="Категории"
                        value
                    />
                </div>
                <button type="button" className="profile__btn-submit site-btn site-btn_red site-btn_s3">Опубликовать услугу</button>
            </form>
        </div>

    );
};

export default AddService2;