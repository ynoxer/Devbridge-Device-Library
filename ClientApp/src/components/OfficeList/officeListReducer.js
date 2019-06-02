const initialState = {
  loading: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_OFFICES':
      return {
        ...state,
        offices: action.offices,
        loading: false
      }
    case 'LOADING_OFFICES':
      return {
          loading: true
      }
    default:
      return state
  }
}