using System.Collections.Generic;
using Challenge202.TestDeviceBooking.Models;

namespace Challenge202.TestDeviceBooking.DataContracts
{
    public interface IOfficesService
    {
        List<Office> GetAll();
        Office GetById(int id);
    }
}
