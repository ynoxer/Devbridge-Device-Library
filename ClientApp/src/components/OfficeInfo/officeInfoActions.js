import axios from 'axios';

export const getOfficeInfo = (id) => (dispatch) => {
  dispatch({
    type: 'LOADING_OFFICE_INFO'
  });
  axios.get(`api/Offices/${id}`)
    .then(response => dispatch({
      type: 'RECEIVE_OFFICE_INFO',
      officeInfo: response.data
    }));
};
