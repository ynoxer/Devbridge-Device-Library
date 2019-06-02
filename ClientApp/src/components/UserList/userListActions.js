import userApi from '../../mock/userApi';
import axios from 'axios';

export const getAllUsers = () => (dispatch) => {
  dispatch({
    type: 'LOADING_USERS'
  });
  //userApi.getAll().then(users => dispatch({
    axios.get('api/Users').then(response => dispatch({
    type: 'RECEIVE_USERS',
    users: response.data
  }));
};
