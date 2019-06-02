using System.ComponentModel.DataAnnotations;

namespace Challenge202.TestDeviceBooking.DataContracts.Requests
{
  public class LoginRequest
  {
    [Required]
    public string UserName { get; set; }

    [Required]
    [DataType(DataType.Password)]
    public string Password { get; set; }
  }
}