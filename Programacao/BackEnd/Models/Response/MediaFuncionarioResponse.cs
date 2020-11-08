using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;


namespace BackEnd.Models.Response
{
    public class MediaFuncionarioResponse
    {
        public string Nome {get; set;}
        public int QtdConsultas{get; set;}
        public double? NotaMedia {get; set;}
        
    }
}