import React from 'react';
import * as actionCreators from './filterActions';
import { getAllOffices } from '../OfficeList/officeListActions';
import { connect } from 'react-redux'

import Spinner from '../common/Spinner/Spinner';

class Filter extends React.Component {
  
  componentDidMount = this.props.getAllOffices;

  render() {
    return (
      <div>
        <div className="sidebar__section">
          <h3 className="sidebar__section-title">Location</h3>
          <div className="sidebar__section-content">
            {
              this.props.isLoadingOffices ? (
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <Spinner />
                </div>
              ) : this.props.offices.map(office => (
                <label className="input-checkbox__wrapper">
                  <input 
                    type="checkbox" 
                    checked={this.props.locations.includes(office.id)}
                    onChange={(e) => this.props.filterLocation(office.id, e.target.checked)} 
                    className="input-checkbox"
                  />
                    <span className="fake-checkbox">
                      <span className="fake-checkbox__check-icon"></span>
                    </span>
                    <span>{office.city}</span>
                  </label>
              ))
            }
          </div>
        </div>

        <div className="sidebar__section">
          <h3 className="sidebar__section-title">Availability</h3>
            <label className="input-checkbox__wrapper">
              <input 
                value={this.props.available}
                type="checkbox" 
                checked={this.props.available}
                onChange={(e) => this.props.filterAvailable(e.target.checked)} 
                className="input-checkbox"
              />
              <span className="fake-checkbox">
                <span className="fake-checkbox__check-icon"></span>
              </span>
              <span>Available</span>
            </label>
            <label className="input-checkbox__wrapper">
              <input 
                value={this.props.bookedByMe}
                type="checkbox" 
                checked={this.props.bookedByMe}
                onChange={(e) => this.props.filterBookedByMe(e.target.checked)} 
                className="input-checkbox"
              />
              <span className="fake-checkbox">
                <span className="fake-checkbox__check-icon"></span>
              </span>
              <span>Booked by me</span>
            </label>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingOffices: state.officeList.loading,
  offices: state.officeList.offices,
  locations: state.filter.locations,
  available: state.filter.available,
  bookedByMe: state.filter.bookedByMe
})

const mapDispatchToProps = {
  ...actionCreators,
  getAllOffices
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
