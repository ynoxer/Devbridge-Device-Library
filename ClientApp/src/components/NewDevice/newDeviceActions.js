import axios from 'axios';
import { push } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { getAllDevices } from '../DeviceList/deviceListActions';

export const addNewDevice = body => (dispatch) => {
  dispatch({
    type: 'ADD_DEVICE_REQUEST'
  });
  axios.post('api/Devices', body).then((response) => {
    if(response.status == 200){
      dispatch({ type: 'CLOSE_NEW_DEVICE_MODAL' });
      dispatch(getAllDevices());
    }
    else{
      dispatch({ type: 'ADD_DEVICE_ERROR' });
    }
  });
};