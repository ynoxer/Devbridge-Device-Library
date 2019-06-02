import axios from 'axios';
import deviceInfoApi from '../../mock/deviceInfoApi';

export const getDeviceInfo = (id) => (dispatch) => {
  dispatch({
    type: 'LOADING_DEVICE_INFO'
  });
  axios.get("api/Devices/" + id).then(response => dispatch({
    type: 'RECEIVE_DEVICE_INFO',
    device: response.data
  }));
};

export const bookDevice = (id) => (dispatch) => {
  axios.patch('api/Devices/Book/' + id).then(response => dispatch({
    type: 'DI_BOOK_DEVICE',
    user: response.data.custodyOf
  }));
};

export const returnDevice = (id) => (dispatch) => {
  axios.patch('api/Devices/Return/' + id).then(response => dispatch({
    type: 'DI_RETURN_DEVICE'
  }));
};

export const fetchCalendarForMonth = (deviceId, date) => (dispatch) => {
  dispatch({
    type: 'RESERVATIONS_FETCHING_CALENDAR_FOR_MONTH'
  });
  axios.get(`api/Reservations/calendar/${deviceId}/${date.toISOString()}`)
    .then(response => dispatch({
      type: 'RESERVATIONS_RECEIVE_CALENDAR_FOR_MONTH',
      reservationCalendar: response.data
    }));
}

export const fetchReservationsForDay = (deviceId, date) => (dispatch) => {
  dispatch({
    type: 'CALENDAR_VALUE_CHANGED',
    value: date
  });
  axios.get(`api/Reservations/day/${deviceId}/${date.toISOString()}`)
    .then(response => dispatch({
      type: 'RESERVATIONS_RECEIVE_TIMETABLE',
      reservationTimetable: response.data
    }))
}

export const openReservationModal = () => ({
  type: 'OPEN_RESERVATION_MODAL'
});

export const closeReservationModal = () => ({
  type: 'CLOSE_RESERVATION_MODAL'
});

 
export const openChangeLocationModal = () => ({ 
  type: 'OPEN_CHANGE_LOCATION_MODAL' 
}); 
 
export const closeChangeLocationModal = () => ({ 
  type: 'CLOSE_CHANGE_LOCATION_MODAL' 
}); 

export const changeLocation = (deviceId, locationId) => (dispatch) => {
  const request = {
    deviceId,
    locationId
  }
  axios.post('api/Devices/location', request)
    .then(response => dispatch({
      type: 'CHANGE_LOCATION_SUCCESS',
      city: response.data
    }));
  dispatch({
    type: 'CLOSE_CHANGE_LOCATION_MODAL'
  });
}
