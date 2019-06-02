const initialState = {
  loading: true,
  reservationModalIsOpen: false,  
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'DL_BOOK_DEVICE': 
      {
        let idx = state.devices.findIndex(device => device.id == action.device.id);
        return {
          ...state,
          devices: [
            ...state.devices.slice(0, idx),
            action.device,
            ...state.devices.slice(idx + 1)
          ]
        }
      }

    case 'DL_RETURN_DEVICE':
      {
        let idx = state.devices.findIndex(device => device.id == action.device.id);
        return {
          ...state,
          devices: [
            ...state.devices.slice(0, idx),
            action.device,
            ...state.devices.slice(idx + 1)
          ]
        }
      }

    case 'RECEIVE_DEVICES':
      return {
        ...state,
        devices: action.devices,
        loading: false
      }

    case 'LOADING_DEVICES':
      return {
        ...state,
        loading: true
      }
    case 'DEVICE_LIST_OPEN_RESERVATION_MODAL':
      return {
        ...state,
        reservationModalIsOpen: true,
        reservationDeviceId: action.deviceId
      }
    case 'RESERVATION_SUCCESS':
    case 'DEVICE_LIST_CLOSE_RESERVATION_MODAL':
      return {
        ...state,
        reservationModalIsOpen: false
      }

    case 'OPEN_NEW_DEVICE_MODAL':
      return {
        ...state,
        newDeviceModalIsOpen: true
      }
    case 'CLOSE_NEW_DEVICE_MODAL':
      return {
        ...state,
        newDeviceModalIsOpen: false
      }

    default:
      return state
  }

  
}
