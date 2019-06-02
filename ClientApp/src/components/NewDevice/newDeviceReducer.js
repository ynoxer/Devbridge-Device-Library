const initialState = {
    loading: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
    case 'ADD_DEVICE_REQUEST':
        return {
            ...state,
            loading: true
        }
    case 'ADD_DEVICE_SUCCESS':
        return {
            ...state,
            loading: false
        }
    case 'ADD_DEVICE_ERROR':
        return{
            ...state,
            loading: false
        }
    default:
        return state
    }
}
  