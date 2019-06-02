const initialState = {
  isLoading: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GETTING_ALL_EVENTS':
      return { 
        ...state,
        isLoading: true
      }
    case 'RECEIVE_ALL_EVENTS':
      return {
        ...state,
        isLoading: false,
        events: action.events
      }
    default:
      return state
  }
}
