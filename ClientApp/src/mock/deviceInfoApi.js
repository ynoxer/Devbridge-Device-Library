const mockDeviceInfo = {
    "Title":"IPad (year 2010) | A1219 | MB292LL",
    "Custody_of":"Name Surname",
    "Email":"name.surname@devbridge.com",
    "Booked_from": "17 Jan 2018, 11:28 AM",
    "Id": "000000000497",
    "Serial_number":"123456789ZXJC",
    "OS":"macOS High Sierra (version 10.13)",
    "Group": "ACC Computers LT",
    "Subgroup": "Tablet APPLE",
    "Description": "i5-6300U; (14.0\") FHD (1920x1080) Non-Touch Anti-Glare 8GB (1x8GB) 2133MHz DDR4; 256GB M.2 SSD Intel Dual Band Wireless 8260 (802.11ac) Windows 10 Pro (64bit) English 3Y Basic Warranty",
    "Check_in_due": "--",
    "Location": "Kaunas Office (History)",
    "Purchased_on": "June 09, 2016",
    "Vendor": "Mark IT",
    "Tax_Rate": "Demo Tax: 10.0%",
    "Available": false
  }
  const deviceInfoApi =  { 
    getAll: () => new Promise((resolve) => { 
      setTimeout(() => resolve(mockDeviceInfo), 500); 
    }) 
  }; 
   
  export default deviceInfoApi; 
  