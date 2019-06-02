import axios from 'axios';

export const makeReservation = (reservation) => (dispatch) => {
  dispatch({
    type: 'MAKING_RESERVATION'
  });
  axios.post(`api/Reservations`, reservation)
    .then(() => dispatch({
      type: 'RESERVATION_SUCCESS',
      reservation
    }), error => {
      if(error.response.status == 409){
        dispatch({
          type: 'RESERVATION_CONFLICT',
          conflicts: error.response.data
        });
      }
    });
};

export const changeStartDate = (startDate) => ({
  type: 'CHANGE_START_DATE',
  startDate
});

export const changeEndDate = (endDate) => ({
  type: 'CHANGE_END_DATE',
  endDate
});

export const setInvalidDateRange = () => ({
  type: 'RESERVATION_INVALID_DATE_RANGE'
});

export const initializeDates = (date) => ({
  type: 'RESERVATION_INITIALIZE',
  date
});
