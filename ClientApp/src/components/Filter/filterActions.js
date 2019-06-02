export const filterSearch = (searchQuery) => ({
  type: 'FILTER_SEARCH',
  searchQuery
});

export const filterSearchClear = () => ({
  type: 'FILTER_SEARCH_CLEAR'
});

export const filterAvailable = (value) => ({
  type: 'FILTER_AVAILABLE',
  value
})

export const filterBookedByMe = (value) => ({
  type: 'FILTER_BOOKED_BY_ME',
  value
})

export const filterLocation = (officeId, value) => ({
  type: 'FILTER_LOCATION',
  officeId,
  value
})
