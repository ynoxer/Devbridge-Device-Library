const initialState = {
  loading: true,
  loadingReservationCalendar: true,
  loadingReservationsForDate: true,
  reservationModalIsOpen: false
}
  
export default (state = initialState, action) => {
  switch (action.type) {
    case 'DI_BOOK_DEVICE':
      let device = {...state.deviceInfo};
      device.status = "UNAVAILABLE";
      device.custodyOf = action.user;
      return {
        ...state,
        deviceInfo: device
      }
    case 'OPEN_CHANGE_LOCATION_MODAL': 
      return { 
        ...state, 
        changeLocationModalIsOpen: true 
      } 
    case 'CHANGE_LOCATION_SUCCESS':
      device = {...state.deviceInfo};
      device.locationCity = action.city;
      return {
        ...state,
        deviceInfo: device
      }
    case 'CLOSE_CHANGE_LOCATION_MODAL': 
      return { 
        ...state, 
        changeLocationModalIsOpen: false 
      } 
    case 'DI_RETURN_DEVICE':
      device = {...state.deviceInfo};
      device.status = "AVAILABLE";
      device.custodyOf = null;
      return {
        ...state,
        deviceInfo: device
      }
    case 'RECEIVE_DEVICE_INFO':
      return {
        ...state,
        deviceInfo: action.device,
        loading: false
      }

    case 'LOADING_DEVICE_INFO':
      return {
        ...state,
        loading: true
      }
    case 'RESERVATIONS_FETCHING_CALENDAR_FOR_MONTH':
      return {
        ...state,
        loadingReservationCalendar: true
      }
    case 'RESERVATIONS_RECEIVE_CALENDAR_FOR_MONTH':
      return {
        ...state,
        loadingReservationCalendar: false,
        reservationCalendar: action.reservationCalendar
      }
    case 'CALENDAR_VALUE_CHANGED':
      return {
        ...state,
        loadingReservationsForDate: true,
        calendarValue: action.value
      }
    case 'RESERVATIONS_RECEIVE_TIMETABLE':
      return {
        ...state,
        loadingReservationsForDate: false,
        reservationTimetable: action.reservationTimetable
      }
    case 'OPEN_RESERVATION_MODAL':
      return {
        ...state,
        reservationModalIsOpen: true
      }
    case 'CLOSE_RESERVATION_MODAL':
      return {
        ...state,
        reservationModalIsOpen: false
      }
    case 'MAKING_RESERVATION':
      return {
        ...state,
        isMakingReservation: true
      }
    case 'RESERVATION_SUCCESS':
      return {
        ...state,
        isMakingReservation: false,
        reservationModalIsOpen: false,
      }
    default:
      return state
  }
}
  