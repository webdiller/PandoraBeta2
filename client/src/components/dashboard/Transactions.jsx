import React from 'react';

import Aside from '../aside/Aside';
import './Transactions.sass';

export default function () {
    return (
        <div className="transactions">
            <div className="transactions__container">
                <Aside />
                <div className="transactions__content">
                    <div className="transactions__body">

                        <p className="transactions__title">Транзакции</p>

                        <div className="transactions__list">

                            <button className="transactions__item">
                                <span className="transactions__item-number">№2028164029</span>
                                <span className="transactions__item-status">Успех</span>
                                <span className="transactions__item-date">20.02.2020</span>
                            </button>

                            <button className="transactions__item">
                                <span className="transactions__item-number">№1323039645</span>
                                <span className="transactions__item-status">Отмена</span>
                                <span className="transactions__item-date">19.02.2020</span>
                            </button>

                            <button className="transactions__item">
                                <span className="transactions__item-number">№2335357112</span>
                                <span className="transactions__item-status">Успех</span>
                                <span className="transactions__item-date">18.02.2020</span>
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}