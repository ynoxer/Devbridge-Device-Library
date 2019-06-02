using System;
using System.Linq;
using Challenge202.TestDeviceBooking.Enums;
using Challenge202.TestDeviceBooking.Models;
using Microsoft.AspNetCore.Identity;

namespace Challenge202.TestDeviceBooking.Data
{
    public class DataInitializer
    {
        public static void Seed(DataContext dataContext, UserManager<User> userManager)
        {
            SeedDevices(dataContext);
            SeedOffices(dataContext);
            SeedUsers(dataContext, userManager);
            //SeedEvents(dataContext);
        }

        private static void SeedDevices(DataContext dataContext)
        {
            if(!dataContext.Devices.Any())
            {
                Random rand = new Random();
                for(int i = 0; i <32; i++)
                {
                    dataContext.Devices.Add(new Device()
                    {
                        SerialNumber = (new Guid()).ToString(),
                        Name = "Apple Ipad Pro 10.5\", 256GB",
                        OperatingSystem = "iOS 11",
                        Group = "Tablets",
                        Subgroup = "Apple",
                        Description = "i5-6300U; (14.0\") FHD (1920x1080) Non-Touch Anti-Glare 8GB (1x8GB) 2133MHz DDR4; 256GB M.2 SSD Intel Dual Band Wireless 8260 (802.11ac) Windows 10 Pro (64bit) English 3Y Basic Warranty",
                        PurchasedOn = DateTime.Now,
                        Vendor = "iDeal",
                        Status = DeviceStatus.AVAILABLE
                    });
                }
                dataContext.SaveChanges();
            }
        }

        private static void SeedOffices(DataContext dataContext)
        {
            if(!dataContext.Offices.Any())
            {
                dataContext.Offices.Add(new Office()
                {
                    Country = "Lithuania",
                    City = "Vilnius",
                    Address = "Žalgirio g. 135"
                });
                dataContext.Offices.Add(new Office()
                {
                    Country = "Lithuania",
                    City = "Kaunas",
                    Address = "Juozapavičiaus pr. 11"
                });
                dataContext.Offices.Add(new Office()
                {
                    Country = "United States",
                    City = "Chicago",
                    Address = "343 W. Erie St."
                });
                dataContext.SaveChanges();
            }
        }

        private static void SeedUsers(DataContext dataContext, UserManager<User> userManager)
        {
            if(!dataContext.Users.Any())
            {
                User user = new User()
                {
                    Email = "challenge@devbridge.com",
                    UserName = "challenge@devbridge.com",
                    Name = "Acceptor of Challenges",
                    Location = dataContext.Offices.FirstOrDefault(),
                    SlackName = "challenge202"
                };
                // Should work ok without awaiting
                var task = userManager.CreateAsync(user, "202");
                task.Wait();
            }
        }

        private static void SeedEvents(DataContext dataContext)
        {
            if(!dataContext.Events.Any())
            {
                var device = dataContext.Devices.First();
                var office = dataContext.Offices.First();
                var user = dataContext.Users.First();
                
                dataContext.Events.Add(new Event()
                {
                    Type = EventType.CHECK_IN,
                    Device = device,
                    Office = office,
                    User = user,
                    Date = DateTime.Now.AddHours(-1)
                });

                dataContext.Events.Add(new Event()
                {
                    Type = EventType.CHECK_IN,
                    Device = device,
                    Office = office,
                    User = user,
                    Date = DateTime.Now
                });

                dataContext.SaveChanges();
            }
        }
    }
}
