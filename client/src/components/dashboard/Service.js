import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
// import Moment from "react-moment";
import { deleteService } from "../../redux/actions/profileActions";

class Service extends Component {
  onDeleteClick(id) {
    this.props.deleteService(id);
  }

  render() {
    // if (this.props.services === null) {
    //   <div>Null</div>;
    // } else {
    const services = this.props.services.map((s) => (
      <tr key={s._id}>
        <td>{s.title}</td>
        <td>{s.categories}</td>
        <td>{s.content}</td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, s._id)}
            className="btn btn-danger"
          >
            Удалить
          </button>
        </td>
      </tr>
    ));
    // }

    return (
      <div>
        <h4 className="mb-4">Услуги</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Название услуги</th>
              <th>Категории</th>
              <th>Описание услуги</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{services}</tbody>
        </table>
      </div>
    );
  }
}

Service.propTypes = {
  deleteService: PropTypes.func.isRequired,
};

export default connect(null, { deleteService })(withRouter(Service));
