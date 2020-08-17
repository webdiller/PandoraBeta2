import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      // <div className="card card-body bg-light mb-3">
      //   <div className="row">
      //     <div className="col-lg-6 col-md-4 col-8">
      //       <h3>{profile.handle}</h3>
      //       <Link to={`/profile/${profile.handle}`} className="btn btn-info">
      //         Просмотр профиля
      //       </Link>
      //       <Link
      //         to={`/messanger/${profile.handle}`}
      //         className="btn btn-danger"
      //       >
      //         СВЯЗАТЬСЯ
      //       </Link>
      //     </div>
      //     <div></div>
      //     <div className="col-md-4 d-none d-md-block">
      //       <h4>Категории</h4>

      //       <ul className="list-group">
      //         {profile.services[0] &&
      //           profile.services[0].categories.map((item, index) => (
      //             <li key={index}>
      //               <p>{item}</p>
      //             </li>
      //           ))}
      //       </ul>
      //     </div>
      //   </div>
      // </div>

      <div className="results__content">
        <div className="results__col results__col_name">{profile.handle}</div>
        <div className="results__col"><span className="results__col-city">Город</span>
        </div>
        <div className="results__col results__col_rating"><i className="results__col-star fas fa-star"></i>Рейтинг</div>
        <div className="results__col results__col_center">0 руб.</div>
        <div className="results__col results__col_guarantor">
          {/* {checkGuarantor(props.guarantor)} */}
          Гарант
        </div>
        <div className="results__col results__col_payment">
          {/* {props.payment.map((item, index) => {
            let payment_type = JSON.parse(item.payment);
            if (payment_type === false) {
              return false
            }
            else {
              return <img key={index} src={require(`../../../images/${item.name}.png`)} className='results__col_img' alt="" />
            }
          })} */}
        </div>
        <div className="results__col results__col_contact">
          <Link to={`/messanger/${profile.handle}`} className="results__col-btn">Cвязаться</Link>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
