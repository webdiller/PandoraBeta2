import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
// import Moment from "react-moment";
import { deleteService } from "../../actions/profileActions";
import './Service.scss';

class Service extends Component {
  onDeleteClick(id) {
    this.props.deleteService(id);
  }

  render() {
    const services = this.props.services.map((s) => (
      <div className="services__item" key={s._id}>
        <h1 className="services__title">Заголовок: {s.title}</h1>
        <h4 className="services__description">Описание: {s.content}</h4>
        <p className="services__categories">Категории: {s.categories.map((item, indx)=>(<span className="mr-2" key={indx}>{item}</span>))}
      </p>
        <div>
          <button
            onClick={this.onDeleteClick.bind(this, s._id)}
            className="services__delete">x</button>
        </div>
      </div>
    ));

    return (
      <div>
        <h4 className="mb-4">Услуги</h4>
        <div className="services">{services}</div>
      </div>
    );
  }
}

Service.propTypes = {
  deleteService: PropTypes.func.isRequired,
};

export default connect(null, { deleteService })(withRouter(Service));
