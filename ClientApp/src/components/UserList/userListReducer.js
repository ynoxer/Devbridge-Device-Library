const initialState = {
  loading: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_USERS':
      return {
        ...state,
        users: action.users,
        loading: false
      }
    case 'LOADING_USERS':
      return {
        loading: true
      }
    default:
      return state
  }
}
