using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Models.Response
{
    public class LoginResponse
    {

        public int IdLogin {get; set;}
        public int IdUsuario {get; set;}
        public string Nome {get; set;}
        public string Perfil {get; set;}
    }

}