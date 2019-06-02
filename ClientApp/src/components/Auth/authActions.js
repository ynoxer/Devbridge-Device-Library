import axios from 'axios';
import { browserHistory } from 'react-router'

export const login = (body) => (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' }); 
  axios.post("api/Account/login", body).then((response) => {
    dispatch({ 
      type: 'LOGIN_SUCCESS',
      user: response.data
    });
    browserHistory.push('/');
  }).catch((error) => {
    dispatch({
        type: 'LOGIN_ERROR',
        error: error.response.data.errorMessage || JSON.stringify(error.response.data)
    });
  });
};

export const checkAuth = () => (dispatch) => {
  dispatch({ type: 'CHECK_AUTH_REQUEST'} );
  axios.get('api/Account/check')
    .then(response => dispatch({
      type: 'CHECK_AUTH_SUCCESS',
      user: response.data
    }), error => dispatch({
      type: 'CHECK_AUTH_FAIL'
    }));
}

export const logout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT_REQUEST' }); 
  axios.post("api/Account/logout").then((response) => {
    dispatch({ 
      type: 'LOGOUT_SUCCESS',
    });
  })
};