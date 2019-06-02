using System.Collections.Generic;
using System.Linq;
using Challenge202.TestDeviceBooking.Data;
using Challenge202.TestDeviceBooking.DataContracts;
using Challenge202.TestDeviceBooking.Models;
using Microsoft.EntityFrameworkCore;

namespace Challenge202.TestDeviceBooking.Services
{
    public class UsersService : IUsersService
    {
        private readonly DataContext _dataContext;

        public UsersService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public List<User> GetAll()
        {
            return _dataContext.Users.Include(u => u.Location).ToList();
        }
    }
}
