const mockDevices = [
  {
    "id": "1",
    "brand": "Samsung",
    "model": "SM-G930F",
    "os": "Android 7.0",
    "location": "Wilno",
    "custody": "John Snow",
    "available": true,
    "active": false
  },
  {
    "id": "2",
    "brand": "Apple",
    "model": "Ipad Pro 10.5\", 256GB",
    "os": "macOS High Sierra (version 10.13)",
    "location": "Kawns",
    "custody": "Bronius",
    "available": false,
    "active": true
  },
  {
    "id": "3",
    "brand": "Samsung",
    "model": "SM-G930F",
    "os": "Android 7.0",
    "location": "Wilno",
    "custody": "John Snow",
    "available": true,
    "active": true
  },
  {
    "id": "4",
    "brand": "Samsung",
    "model": "SM-G930F",
    "os": "Android 7.0",
    "location": "Wilno",
    "custody": "John Snow",
    "available": true,
    "active": true
  },
  {
    "id": "5",
    "brand": "Samsung",
    "model": "SM-G930F",
    "os": "Android 7.0",
    "location": "Wilno",
    "custody": "John Snow",
    "available": true,
    "active": true
  },
  {
    "id": "6",
    "brand": "Samsung",
    "model": "SM-G930F",
    "os": "Android 7.0",
    "location": "Wilno",
    "custody": "John Snow",
    "available": true,
    "active": true
  },
  {
    "id": "7",
    "brand": "Samsung",
    "model": "SM-G930F",
    "os": "Android 7.0",
    "location": "Wilno",
    "custody": "John Snow",
    "available": true,
    "active": true
  },
  {
    "id": "8",
    "brand": "Samsung",
    "model": "SM-G930F",
    "os": "Android 7.0",
    "location": "Wilno",
    "custody": "John Snow",
    "available": true,
    "active": true
  },
  {
    "id": "9",
    "brand": "Samsung",
    "model": "SM-G930F",
    "os": "Android 7.0",
    "location": "Wilno",
    "custody": "John Snow",
    "available": true,
    "active": true
  },
]

const deviceApi =  {
  getAll: () => new Promise((resolve) => {
    setTimeout(() => resolve(mockDevices), 500);
  })
};

export default deviceApi;

