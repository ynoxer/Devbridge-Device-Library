import React from 'react';
import { connect } from 'react-redux'
import DatePicker from '../common/DatePicker/DatePicker';
import * as actionCreators from './reservationActions';
import ReactModal from 'simple-react-modal'
import moment from 'moment';

const formattedDate = (date) => moment.utc(date).local().format('YYYY-MM-DD HH:mm');

class ReservationModal extends React.Component {
  componentWillReceiveProps = (nextProps) => {
    if(this.props.isOpen != nextProps.isOpen){
      this.props.initializeDates(moment());
    }
  }
  
  handleStartChange = (startDate) => this.setState({startDate});

  handleEndChange = (endDate) => this.setState({endDate});

  makeReservation = () => {
    const { startDate, endDate, deviceId } = this.props; 
    if(startDate.isSameOrAfter(endDate)){ 
      this.props.setInvalidDateRange();
    } else { 
      const reservation = {
        deviceId: deviceId,
        dateFrom: startDate.toISOString(),
        dateTo: endDate.toISOString()
      };
      this.props.makeReservation(reservation);
    } 
  } 

  renderConflicts = () => {
    if(this.props.conflicts.length){
      let conflicts = this.props.conflicts.map(conflict => (
        <li>{`${formattedDate(conflict.dateFrom)} - ${formattedDate(conflict.dateTo)} by ${conflict.userName}`}</li>
      ));
      return (
        <div className="error-message">
          <div>Reservation could not be created because of the following conflicts:</div>
          <ul>
            {conflicts}
          </ul>
        </div>
      );
    }else{
      return undefined;
    }
  }

  render(){
    const { loading, deviceInfo } = this.props;
    const { isOpen, onClose } = this.props;
    return (
      <div>
        <ReactModal
          show={isOpen}
          onClose={onClose}
        >
          <div>
            <h1>Create reservation</h1>
            <div>
              <label>From:</label>
              <DatePicker
                selected={this.props.startDate}
                selectsStart
                timeFormat="HH:mm"
                showTimeSelect
                timeIntervals = {30}
                dateFormat = "YYYY-MM-DD HH:mm"
                startDate={this.props.startDate}
                endDate={this.props.endDate}
                onChange={this.props.changeStartDate}
              />
            </div>
            <div>
              <label>To:</label>
              <DatePicker
                  selected={this.props.endDate}
                  selectsEnd
                  timeFormat="HH:mm"
                  showTimeSelect
                  timeIntervals = {30}
                  dateFormat = "YYYY-MM-DD HH:mm"
                  startDate={this.props.startDate}
                  endDate={this.props.endDate}
                  onChange={this.props.changeEndDate}
              />
            </div>
            {this.props.invalidDateRange && <div className="error-message">Invalid date range</div>} 
            {this.renderConflicts()}
            <div>
              <button
                style={{float: 'none'}}
                className="button button--save_reservation" 
                onClick={this.makeReservation}
              > 
                SAVE
              </button>
            </div>
          </div>
        </ReactModal>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  startDate: state.reservation.startDate,
  endDate: state.reservation.endDate,
  invalidDateRange: state.reservation.invalidDateRange,
  conflicts: state.reservation.conflicts
})

const mapDispatchToProps = {
  ...actionCreators
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationModal);
