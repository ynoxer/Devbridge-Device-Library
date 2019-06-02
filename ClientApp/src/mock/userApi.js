const mockUsers = [
  {
    'id': '123',
    'name': 'John Snow',
    'email': 'knows.nothing@north.got',
    'office': 'the wall',
    'slack': 'LordCommander2'
  },
  {
    'id': '456',
    'name': 'Bronius',
    'email': 'Bronius@bronius.lt',
    'office': 'Bronius',
    'slack': 'Bronius'
  },
]

const userApi =  {
  getAll: () => new Promise((resolve) => {
    setTimeout(() => resolve(mockUsers), 500);
  })
};

export default userApi;

