import axios from 'axios';
import { login } from '../Auth/authActions';

export const signup = (formInput) => (dispatch) => {
  dispatch({
    type: 'SIGNING_UP'
  });
  let request = {...formInput};
  request.locationId = parseInt(request.locationId);
  axios.post('api/Account/signup', request)
    .then(response => {
      dispatch({
        type: 'SIGNUP_SUCCESS'
      });
      let loginRequest = {
        userName: request.email,
        password: request.password
      };
      login(loginRequest)(dispatch);
    }, error => dispatch({
      type: 'SIGNUP_ERROR',
      error: error.response.data.errorMessage || error.response.data
    }));
}
