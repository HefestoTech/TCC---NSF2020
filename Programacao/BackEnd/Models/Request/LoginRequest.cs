using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace BackEnd.Models.Request
{
    public class LoginRequest
    {
        public string Email {get; set;}
        public string Senha {get; set;}
    }
}