const mockOffices = [
  {
    'country': 'Lithuania',
    'city': 'Vilnius',
    'adress': '135 Zalgirio g.'
  },
  {
    'country': 'Lithuania',
    'city': 'Kaunas',
    'adress': '11d. Juozapaviciaus pr'
  },
  {
    'country': 'United States',
    'city': 'Chicago',
    'adress': '343 W. Erie St.'
  }
]

const officeApi = {
  getAll: () => new Promise((resolve) => {
    setTimeout(() => resolve(mockOffices), 500);
  })
};

export default officeApi;