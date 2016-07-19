using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AureliaTSApp.Models
{
    public class LoginModel
    {
        [Required, DataType(DataType.Text)]
        public string UserName { get; set; }
        [Required, DataType(DataType.Password)]
        public string Password { get; set; }

        [Required, DataType(DataType.DateTime)]
        public DateTime DateOfBirth { get; set; }
    }
}