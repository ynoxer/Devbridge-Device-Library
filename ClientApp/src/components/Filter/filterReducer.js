// Fake state to be able to work on device list filtering
// without having filter component done
const initialState = {
  locations: [],
  available: false,
  bookedByMe: false,
  searchQuery: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_SEARCH':
      return {
        ...state,
        searchQuery: action.searchQuery
      }
    case 'FILTER_SEARCH_CLEAR':
      return {
        ...state,
        searchQuery: ''
      }
    case 'FILTER_AVAILABLE':
      return {
        ...state,
        available: action.value
      }
    case 'FILTER_BOOKED_BY_ME':
      return {
        ...state,
        bookedByMe: action.value
      }
    case 'FILTER_LOCATION':
      if(action.value){
        return {
          ...state,
          locations: [
            ...state.locations,
            action.officeId
          ]
        }
      }else{
        return {
          ...state,
          locations: state.locations.filter(location => location !== action.officeId)
        }
      }
    default:
      return state
  }
}
