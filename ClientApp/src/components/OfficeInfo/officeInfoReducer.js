const initialState = {
  loading: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_OFFICE_INFO':
      return {
        ...state,
        officeInfo: action.officeInfo,
        loading: false
      }
    case 'LOADING_OFFICE_INFO':
      return {
        loading: true
      }
    default:
      return state
  }
}
