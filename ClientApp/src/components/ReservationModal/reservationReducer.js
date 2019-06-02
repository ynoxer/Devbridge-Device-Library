const initialState = {
  invalidDateRange: false,
  conflicts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RESERVATION_INITIALIZE':
      return {
        ...state,
        startDate: action.date,
        endDate: action.date,
        invalidDateRange: false,
        conflicts: []
      }
    case 'MAKING_RESERVATION':
      return {
        ...state,
        invalidDateRange: false,
        isMakingReservation: true
      }
    case 'RESERVATION_SUCCESS':
      return {
        ...state,
        isMakingReservation: false
      }
    case 'RESERVATION_CONFLICT':
      return {
        ...state,
        conflicts: action.conflicts
      }
    case 'CHANGE_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'CHANGE_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    case 'RESERVATION_INVALID_DATE_RANGE':
      return {
        ...state,
        invalidDateRange: true
      }
    default:
      return state
  }
}
