import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
// import Moment from "react-moment";
import { deleteService } from "../../actions/profileActions";

class Service extends Component {
  onDeleteClick(id) {
    this.props.deleteService(id);
  }

  render() {
    // if (this.props.services === null) {
    //   <div>Null</div>;
    // } else {
    const services = this.props.services.map((s) => (
      <div key={s._id}>
        <h1>{s.title}</h1>
        <p>{s.categories}</p>
        <h4>{s.content}</h4>
        <div>
          <button
            onClick={this.onDeleteClick.bind(this, s._id)}
            className="btn btn-danger"
          >
            x
          </button>
        </div>
      </div>
    ));
    // }

    return (
      <div>
        <h4 className="mb-4">Услуги</h4>
        <div className="table">
          <div>
            <div>
              <p>Название услуги</p>
              <p>Категории</p>
              <p>Описание услуги</p>
              <p></p>
            </div>
          </div>
          <div>{services}</div>
        </div>
      </div>
    );
  }
}

Service.propTypes = {
  deleteService: PropTypes.func.isRequired,
};

export default connect(null, { deleteService })(withRouter(Service));
