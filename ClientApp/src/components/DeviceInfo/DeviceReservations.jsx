import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import moment from 'moment';

import * as actionCreators from './deviceInfoActions';
import DatePicker from '../common/DatePicker/DatePicker';
import DeviceInfoTimetable from './DeviceInfoTimetable';
import Spinner from '../common/Spinner/Spinner';

class DeviceReservations extends React.Component {
  
  componentDidMount = () => {
    this.props.fetchCalendarForMonth(this.props.deviceInfo.id, moment());
    this.props.fetchReservationsForDay(this.props.deviceInfo.id, moment());
  }

  onCalendarValueChange = (value) => {
    if(this.props.calendarValue.month() != value.month()){
      this.props.fetchCalendarForMonth(this.props.deviceInfo.id, value);
    }
    this.props.fetchReservationsForDay(this.props.deviceInfo.id, value);
  }
    

  renderTimetable = () => {
    return this.props.loadingReservationsForDate ? (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Spinner />
      </div>
    ) : (
      <DeviceInfoTimetable
        day={this.props.calendarValue}
        reservationTimetable={this.props.reservationTimetable}
      />
    )
  }

  renderCalendar = () => {
    console.dir(this.props)
    return this.props.loadingReservationCalendar ? (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Spinner />
      </div>
    ) : (
      <div style={{marginTop: 2}}>
        <DatePicker
          inline
          onChange={this.onCalendarValueChange}
          selected={this.props.calendarValue}
          dayClassName={day => 
            this.props.reservationCalendar.find(date => moment(date).isSame(day))
            ? 'with-reservations' 
            : undefined
          } 
        />
        { this.renderTimetable() }
      </div>
    )
  }

  render() {
    return (
      <div class="reservation-sidebar__calendar-section">
        <span class="reservation-sidebar__calendar-title">Device reservations</span>
        { this.renderCalendar() }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loadingReservationCalendar: state.deviceInfoDetails.loadingReservationCalendar,
  loadingReservationsForDate: state.deviceInfoDetails.loadingReservationsForDate,
  deviceInfo: state.deviceInfoDetails.deviceInfo,
  reservationCalendar: state.deviceInfoDetails.reservationCalendar,
  calendarValue: state.deviceInfoDetails.calendarValue,
  reservationTimetable: state.deviceInfoDetails.reservationTimetable
})

const mapDispatchToProps = {
  ...actionCreators
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceReservations);
