const initialState = {
  isLoadingOffices: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_OFFICES':
      return {
        ...state,
        isLoadingOffices: true
      }
    case 'SIGNING_UP':
      return {
        ...state,
        isSigningUp: true
      }
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        isSigningUp: false
      }
    case 'SIGNUP_ERROR':
      return {
        ...state,
        isSigningUp: false,
        error: action.error
      }
    case 'RECEIVE_OFFICES':
      return {
        ...state,
        isLoadingOffices: false,
        offices: action.offices
      }
    default:
      return state
  }
}
