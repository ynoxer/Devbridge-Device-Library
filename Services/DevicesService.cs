
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Challenge202.TestDeviceBooking.Data;
using Challenge202.TestDeviceBooking.DataContracts;
using Challenge202.TestDeviceBooking.Enums;
using Challenge202.TestDeviceBooking.DataContracts.Requests;
using Challenge202.TestDeviceBooking.Models;
using Microsoft.EntityFrameworkCore;
using System;
using Challenge202.TestDeviceBooking.Enums;

namespace Challenge202.TestDeviceBooking.Services
{
    public class DevicesService: IDevicesService
    {
        private readonly DataContext _dataContext;
        private readonly ISlackService _slackService;

        public DevicesService(DataContext dataContext, ISlackService slackService)
        {
            _dataContext = dataContext;
            _slackService = slackService;
        }

        public Device ChangeLocation(ChangeLocationRequest request)
        {
            var device = _dataContext.Devices.Find(request.DeviceId);
            var office = _dataContext.Offices.Find(request.LocationId);
            device.Location = office;
            _dataContext.SaveChanges();
            return device;
        }

        public List<Device> GetAll()
        {
            return _dataContext.Devices
                .Include(device => device.Location)
                .Include(device => device.CustodyOf)
                .ToList();
        }

        public Device GetById(int id)
        {
            return _dataContext.Devices
                .Include(device => device.Location)
                .Include(device => device.CustodyOf)
                .FirstOrDefault(t => t.Id == id);
        }

        public int SaveChanges()
        {
            return _dataContext.SaveChanges();
        }

        public Device Book(Device device, User user)
        {
            device.Status = DeviceStatus.UNAVAILABLE;
            device.CustodyOf = user;

            _dataContext.Entry(user)
                .Reference(u => u.Location)
                .Load();

            device.Location = user.Location;

            //string message = $":arrow_forward: {device.Name} has booked by {user.SlackName ?? user.Name} in {user.Location.City}";
            //_slackService.SendMessage(message);

            var bookEvent = new Event()
            {
                Type = EventType.CHECK_IN,
                Device = device,
                Office = user.Location,
                User = user,
                Date = DateTime.Now
            };

            _dataContext.Add(bookEvent);

            _dataContext.SaveChanges();
            return device;
        }

        public Device Return(Device device)
        {
            device.Status = DeviceStatus.AVAILABLE;
            var user = device.CustodyOf;
            device.CustodyOf = null;

            var returnEvent = new Event()
            {
                Type = EventType.CHECK_OUT,
                Device = device,
                Office = device.Location,
                User = user,
                Date = DateTime.Now
            };

            //var message = $":back: {user.SlackName ?? user.Name} has returned {device.Name} in {device.Location.City}";            
            //_slackService.SendMessage(message);

            _dataContext.Add(returnEvent);

            _dataContext.SaveChanges();
            return device;
        }

        public Device Create(CreateDeviceRequest request, User user)
        {
            var location = _dataContext.Offices.Find(request.LocationId);
            var device = new Device
            {
                Name = request.Name,
                SerialNumber = request.SerialNumber,
                OperatingSystem = request.OS,
                Description = request.Description,
                Status = DeviceStatus.AVAILABLE,
                Location = location
            };

            var createEvent = new Event()
            {
                Type = EventType.NEW_DEVICE,
                Device = device,
                Office = location,
                User = user,
                Date = DateTime.Now
            };

            _dataContext.Add(createEvent);
            _dataContext.Devices.Add(device);

            _dataContext.SaveChanges();

            return device;

        }
    }
}
