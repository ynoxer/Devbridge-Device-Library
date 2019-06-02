import deviceApi from '../../mock/deviceApi';
import axios from 'axios';

export const getAllDevices = () => (dispatch) => {
  dispatch({
    type: 'LOADING_DEVICES'
  });
  axios.get('api/Devices').then(response => dispatch({
    type: 'RECEIVE_DEVICES',
    devices: response.data
  }));
};

export const openReservationModal = (deviceId) => ({
  type: 'DEVICE_LIST_OPEN_RESERVATION_MODAL',
  deviceId
});

export const closeReservationModal = () => ({
  type: 'DEVICE_LIST_CLOSE_RESERVATION_MODAL'
});

export const bookDevice = (id, user) => (dispatch) => {
  axios.patch('api/Devices/Book/' + id).then(response => dispatch({
    type: 'DL_BOOK_DEVICE',
    device: response.data,
    user: user
  }));
};

export const returnDevice = (id) => (dispatch) => {
  axios.patch('api/Devices/Return/' + id).then(response => dispatch({
    type: 'DL_RETURN_DEVICE',
    device: response.data,
  }));
};

export const openNewDeviceModal = () => ({
  type: 'OPEN_NEW_DEVICE_MODAL'
});

export const closeNewDeviceModal = () => ({
  type: 'CLOSE_NEW_DEVICE_MODAL'
});
