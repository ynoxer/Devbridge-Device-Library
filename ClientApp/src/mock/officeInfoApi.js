const mockOfficeInfo = {
    "country":"Lithuania",
    "city":"Vilnius",
    "adress":"Happy street 65",
    "email":"mail@devbridge.com",
    "phone":"+37061478524"
  }
  const officeInfoApi =  { 
    getAll: () => new Promise((resolve) => { 
      setTimeout(() => resolve(mockOfficeInfo), 500); 
    }) 
  }; 
   
  export default officeInfoApi; 
  