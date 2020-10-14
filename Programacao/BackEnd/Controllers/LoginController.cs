using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("[controller]")]
    [ApiController]

    public class LoginController : ControllerBase
    {
        Business.LoginBusiness business = new Business.LoginBusiness();
        Utils.GeralConversor conversor = new Utils.GeralConversor();
        
       [HttpPost]
        public ActionResult<Models.Response.LoginResponse> Logar (Models.Request.LoginRequest loginRequest)
        {
            try
            {
                Models.TbLogin login = business.Logar(loginRequest);

                if (login == null)
                    return BadRequest("Nenhum Registo Encontrado!!!");

                return conversor.ParaLoginResponse(login);   
            }
            catch (System.Exception ex)
            {
                return BadRequest( new Models.Response.ErroResponse(
                    ex.Message, 400
                ));
            }
             
        }
    }
}