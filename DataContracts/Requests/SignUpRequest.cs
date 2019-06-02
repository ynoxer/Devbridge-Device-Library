using System.ComponentModel.DataAnnotations;

namespace Challenge202.TestDeviceBooking.DataContracts.Requests
{
    public class SignUpRequest
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Name { get; set; }

        public string SlackName { get; set; }

        [Required(ErrorMessage = "Location is required")]
        public int? LocationId { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "The password and repeated password do not match.")]
        public string RepeatedPassword { get; set; }
    }
}
