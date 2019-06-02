import axios from 'axios';

export const getAllEvents = () => (dispatch) => {
  dispatch({
    type: 'GETTING_ALL_EVENTS'
  });
  axios.get('api/Events')
    .then(response => dispatch({
      type: 'RECEIVE_ALL_EVENTS',
      events: response.data
    }));
}
