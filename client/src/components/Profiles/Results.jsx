import React from 'react';
import './Results.sass'

import customers from '../../../db/customers.json'

const ResultsContent = (props) => {
    let checkGuarantor = (guarantor) => {
        if (JSON.parse(guarantor) === true) {
            return <i className="results__col-shield fas fa-shield-alt"></i>
        } else {
            return <span> – </span>;
        }
    }

    return (
        <div className="results__content">
            <div className="results__col results__col_name">{props.name}</div>
            <div className="results__col"><span className="results__col-city">{props.city}</span>
            </div>
            <div className="results__col results__col_rating"><i className="results__col-star fas fa-star"></i>{props.raiting}</div>
            <div className="results__col results__col_center">{props.deposit} руб.</div>
            <div className="results__col results__col_guarantor">
                {checkGuarantor(props.guarantor)}
            </div>
            <div className="results__col results__col_payment">

                {props.payment.map((item, index) => {
                    let payment_type = JSON.parse(item.payment);
                    if (payment_type === false) {
                        return false
                    }
                    else {
                        return <img key={index} src={require(`../../../images/${item.name}.png`)} className='results__col_img' alt="" />
                    }
                })}
            </div>
            <div className="results__col results__col_contact">
                <button className="results__col-btn">Cвязаться</button>
            </div>
        </div>
    );
}

export default function Results() {
    return (
        <div id="results" className="results w-100 active">
            <div className="results__top">
                <p className="results__title">Найдено 4 исполнителя:</p>
                <p className="results__value">проверка репутации застройщика</p>
            </div>

            <div className="results__table-wrapper">
                <div className="results__table">
                    <div className="results__header">
                        <div className="results__col results__col_header">Исполнитель</div>
                        <div className="results__col results__col_header">Регион</div>
                        <div className="results__col results__col_header results__col_center">
                            <button className="results__col-rating-btn">Рейтинг</button>
                        </div>
                        <div className="results__col results__col_header results__col_center">Депозит</div>
                        <div className="results__col results__col_header results__col_guarantor">Гарант</div>
                        <div className="results__col results__col_header">Способы оплаты</div>
                        <div className="results__col results__col_header results__col_contact"></div>
                    </div>
                    <div className="results__body">
                        {customers.map((item, index) => {
                            let {
                                name,
                                city,
                                raiting,
                                deposit,
                                guarantor,
                                payment,
                                link } = item;

                            return <ResultsContent
                                key={index}
                                name={name}
                                city={city}
                                raiting={raiting}
                                deposit={deposit}
                                guarantor={guarantor}
                                payment={payment}
                                link={link}
                            />
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}