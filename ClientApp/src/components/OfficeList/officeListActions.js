import axios from 'axios';

export const getAllOffices = () => (dispatch) => {
  dispatch({
    type: 'LOADING_OFFICES'
  });
  axios.get('api/Offices').then(response => dispatch({
    type: 'RECEIVE_OFFICES',
    offices: response.data
  }));
};
