using System.Collections.Generic;
using Challenge202.TestDeviceBooking.DataContracts.Requests;
using Challenge202.TestDeviceBooking.Models;
using Challenge202.TestDeviceBooking.DataContracts.Requests;

namespace Challenge202.TestDeviceBooking.DataContracts
{
    public interface IDevicesService
    {
        List<Device> GetAll();
        Device Create(CreateDeviceRequest request, User user);

        Device GetById(int id);

        int SaveChanges();

        Device Book(Device device, User user);

        Device Return(Device device);

        Device ChangeLocation(ChangeLocationRequest request);
    }
}
