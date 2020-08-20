import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profileActions";
import './Results.sass'
import AdvancedSearch from "../AdvancedSearch/AdvancedSearch";

class ProfilesNew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      searchTags: [],
      searchTime: 0,
      searchRating: 0,
      searchCity: '',
      searchDeposit: [50000],
      searchGuarantor: false,
      searchVisa: true,
      searchYandex: false,
      searchBitcoin: true,
      searchQiwi: false,
      allProfiles: [],
      filteredProfiles: []
    };
  }

  componentDidMount() {
    this.props.getProfiles();
    fetch('/api/profile/all')
      .then(data => data.json())
      .then(data => (
        this.setState({ allProfiles: data }),
        this.setState({ filteredProfiles: data })
      ))
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onChangeTags = (value) => {
    let searchTags = [];
    value.map(item=>{
      searchTags.push(item.value)
    });
    this.setState({searchTags: searchTags});
  }

  onFilter() {
    let filteredProfiles = [];

    for (let item of this.state.allProfiles) {
      for (let item2 of item.services) {
        if (item2.categories.some(i => this.state.searchTags.includes(i))) {
          filteredProfiles.push(item)
        }
      }
    } 

    this.setState({filteredProfiles: filteredProfiles})

  }

  render() {

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <AdvancedSearch
                handle={this.state.handle}
                searchTags={this.state.searchTags}
                searchTime={this.state.searchTime}
                searchRating={this.state.searchRating}
                searchCity={this.state.searchCity}
                searchDeposit={this.state.searchDeposit}
                searchGuarantor={this.state.searchGuarantor}
                searchVisa={this.state.searchVisa}
                searchYandex={this.state.searchYandex}
                searchBitcoin={this.state.searchBitcoin}
                searchQiwi={this.state.searchQiwi}

                onChange={this.onChange.bind(this)}
                onChangeTags={this.onChangeTags.bind(this)}
                onFilter={this.onFilter.bind(this)}
              />

              <div className="results__top">
                <p className="results__title">Найдено 2 исполнителя:</p>
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
                    {this.state.filteredProfiles &&
                      this.state.filteredProfiles.map((profile) => (
                        <ProfileItem key={profile._id} profile={profile} />
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfilesNew.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(ProfilesNew);
