using System.Collections.Generic;
using System.Linq;
using Challenge202.TestDeviceBooking.Data;
using Challenge202.TestDeviceBooking.DataContracts;
using Challenge202.TestDeviceBooking.Models;

namespace Challenge202.TestDeviceBooking.Services
{
    public class OfficesService : IOfficesService
    {
        private readonly DataContext _dataContext;

        public OfficesService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public List<Office> GetAll()
        {
            return _dataContext.Offices.ToList();
        }

        public Office GetById(int id)
        {
            return _dataContext.Offices.SingleOrDefault(office => office.Id == id);
        }
    }
}
